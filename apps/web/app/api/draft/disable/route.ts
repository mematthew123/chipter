import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const type = searchParams.get('type') || 'reviews'
  const redirectPath = searchParams.get('redirect')

  // Disable draft mode
  const draft = await draftMode()
  draft.disable()

  // If a redirect path is provided, use it
  if (redirectPath) {
    redirect(redirectPath)
  }

  // Otherwise, redirect back to the appropriate page
  if (type === 'reviews' && slug) {
    redirect(`/reviews/${slug}`)
  } else if (type === 'blog' && slug) {
    redirect(`/blog/${slug}`)
  } else if (type === 'reviews') {
    redirect('/reviews')
  } else {
    redirect('/')
  }
}