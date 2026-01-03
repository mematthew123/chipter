import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { baseClient as client } from '@/lib/sanity.live';

// DELETE /api/comments/[id] - Delete a comment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify user is authenticated
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const commentId = params.id;

    // Fetch the comment to verify ownership
    const comment = await client.fetch(
      `*[_type == "comment" && _id == $id][0]{
        _id,
        authorId
      }`,
      { id: commentId }
    );

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Verify the user owns this comment
    if (comment.authorId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized - you can only delete your own comments' },
        { status: 403 }
      );
    }

    // Delete the comment
    await client.delete(commentId);

    return NextResponse.json({
      success: true,
      message: 'Comment deleted successfully',
    });
  } catch (error) {
    console.error('Failed to delete comment:', error);
    return NextResponse.json(
      { error: 'Failed to delete comment' },
      { status: 500 }
    );
  }
}

// PATCH /api/comments/[id] - Update a comment (for future edit functionality)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify user is authenticated
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const commentId = params.id;
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Fetch the comment to verify ownership
    const comment = await client.fetch(
      `*[_type == "comment" && _id == $id][0]{
        _id,
        authorId
      }`,
      { id: commentId }
    );

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Verify the user owns this comment
    if (comment.authorId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized - you can only edit your own comments' },
        { status: 403 }
      );
    }

    // Update the comment
    const result = await client
      .patch(commentId)
      .set({
        content,
        isEdited: true,
        editedAt: new Date().toISOString(),
      })
      .commit();

    return NextResponse.json({
      success: true,
      comment: result,
    });
  } catch (error) {
    console.error('Failed to update comment:', error);
    return NextResponse.json(
      { error: 'Failed to update comment' },
      { status: 500 }
    );
  }
}