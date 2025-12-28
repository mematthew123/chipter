import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const draft = await draftMode()
  draft.disable()

  // Redirect to the path from the fetched post
  const url = new URL(request.nextUrl)
  const returnTo = url.searchParams.get('returnTo')

  if (returnTo) {
    return NextResponse.redirect(new URL(returnTo, request.url))
  }

  return NextResponse.redirect(new URL('/', request.url))
}