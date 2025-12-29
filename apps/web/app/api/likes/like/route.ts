import { NextRequest, NextResponse } from 'next/server'
import { baseClient } from '@/lib/sanity.live'
import crypto from 'crypto'

// Create a write-enabled client
const writeClient = baseClient.withConfig({
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false
})

export async function POST(req: NextRequest) {
  try {
    const { documentId, documentType } = await req.json()

    if (!documentId || !documentType) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Generate or retrieve session ID
    const sessionId = req.cookies.get('session_id')?.value || crypto.randomUUID()

    // Hash IP for privacy-preserving rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    const ipHash = crypto.createHash('sha256').update(ip).digest('hex')

    // Check if already liked
    const existingLike = await writeClient.fetch(
      `*[_type == "like" &&
        parentDocument._ref == $documentId &&
        sessionId == $sessionId][0]`,
      { documentId, sessionId }
    )

    if (existingLike) {
      return NextResponse.json(
        { error: 'Already liked' },
        { status: 400 }
      )
    }

    // Create like document and increment count in a transaction
    const transaction = writeClient.transaction()

    // Create the like document
    const likeDoc = {
      _type: 'like',
      parentType: documentType,
      parentDocument: { _ref: documentId },
      sessionId,
      userAgent: req.headers.get('user-agent') || '',
      ipHash,
      createdAt: new Date().toISOString()
    }

    transaction.create(likeDoc)

    // Set likeCount to 0 if it doesn't exist, then increment it
    transaction.patch(documentId, p => p
      .setIfMissing({ likeCount: 0 })
      .inc({ likeCount: 1 })
    )

    // Execute the transaction
    await transaction.commit()

    // Set session cookie if new
    const response = NextResponse.json({
      success: true,
      liked: true
    })

    if (!req.cookies.has('session_id')) {
      response.cookies.set('session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      })
    }

    return response
  } catch (error) {
    console.error('Like error:', error)
    return NextResponse.json(
      { error: 'Failed to create like' },
      { status: 500 }
    )
  }
}