import { NextRequest, NextResponse } from 'next/server'
import { baseClient } from '@/lib/sanity.live'

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

    // Get session ID from cookie
    const sessionId = req.cookies.get('session_id')?.value

    if (!sessionId) {
      return NextResponse.json(
        { error: 'No session found' },
        { status: 400 }
      )
    }

    // Find the like document
    const like = await writeClient.fetch(
      `*[_type == "like" &&
        parentDocument._ref == $documentId &&
        sessionId == $sessionId][0]`,
      { documentId, sessionId }
    )

    if (!like) {
      return NextResponse.json(
        { error: 'Like not found' },
        { status: 404 }
      )
    }

    // Delete like document and decrement count in a transaction
    const transaction = writeClient.transaction()

    // Delete the like document
    transaction.delete(like._id)

    // Decrement the likeCount on the parent document
    // First ensure the field exists, then decrement (min value of 0)
    transaction.patch(documentId, p => p
      .setIfMissing({ likeCount: 0 })
      .dec({ likeCount: 1 })
    )

    // Execute the transaction
    await transaction.commit()

    return NextResponse.json({
      success: true,
      liked: false
    })
  } catch (error) {
    console.error('Unlike error:', error)
    return NextResponse.json(
      { error: 'Failed to remove like' },
      { status: 500 }
    )
  }
}