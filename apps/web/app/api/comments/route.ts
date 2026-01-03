import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { baseClient as client } from '@/lib/sanity.live';

// GET /api/comments - Fetch comments for a parent document
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const parentId = searchParams.get('parentId');
    const parentType = searchParams.get('parentType');

    if (!parentId || !parentType) {
      return NextResponse.json(
        { error: 'Missing parentId or parentType' },
        { status: 400 }
      );
    }

    const query = `
      *[
        _type == "comment" &&
        parentDocument._ref == $parentId &&
        parentType == $parentType &&
        status == "visible"
      ] | order(publishedAt desc) {
        _id,
        authorName,
        authorEmail,
        authorId,
        authorImage,
        content,
        publishedAt,
        isEdited,
        editedAt
      }
    `;

    const comments = await client.fetch(query, {
      parentId,
      parentType,
    });

    return NextResponse.json({ comments });
  } catch (error) {
    console.error('Failed to fetch comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST /api/comments - Create a new comment
export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      content,
      parentId,
      parentType,
      authorName,
      authorEmail,
      authorId,
      authorImage,
    } = body;

    // Validate required fields
    if (!content || !parentId || !parentType || !authorName || !authorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify the authorId matches the authenticated user
    if (authorId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Create comment document in Sanity
    const comment = {
      _type: 'comment',
      authorName,
      authorEmail,
      authorId,
      authorImage,
      content,
      parentType,
      parentDocument: {
        _type: 'reference',
        _ref: parentId,
      },
      publishedAt: new Date().toISOString(),
      status: 'visible',
      isEdited: false,
    };

    const result = await client.create(comment);

    return NextResponse.json({
      success: true,
      comment: result,
    });
  } catch (error) {
    console.error('Failed to create comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}