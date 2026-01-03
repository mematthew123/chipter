'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Comment from './Comment';
import CommentForm from './CommentForm';
import type { PortableTextBlock } from '@portabletext/types';

interface CommentType {
  _id: string;
  authorName: string;
  authorEmail?: string;
  authorId: string;
  authorImage?: string;
  content: PortableTextBlock[];
  publishedAt: string;
  isEdited?: boolean;
  editedAt?: string;
}

interface CommentsProps {
  parentId: string;
  parentType: 'post' | 'chipReview';
  initialComments?: CommentType[];
}

export default function Comments({
  parentId,
  parentType,
  initialComments = [],
}: CommentsProps) {
  const { user } = useUser();
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [isLoading, setIsLoading] = useState(false);

  // Refresh comments after a successful submission
  const refreshComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/comments?parentId=${parentId}&parentType=${parentType}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Failed to refresh comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle comment deletion
  const handleDelete = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setComments(comments.filter(c => c._id !== commentId));
      } else {
        alert('Failed to delete comment');
      }
    } catch (error) {
      console.error('Failed to delete comment:', error);
      alert('Failed to delete comment');
    }
  };

  // Handle comment editing (future implementation)
  const handleEdit = async (commentId: string) => {
    // TODO: Implement edit functionality
    console.log('Edit comment:', commentId);
  };

  return (
    <section className="mt-12">
      {/* Comments Header */}
      <div className="mb-8 pb-4 border-b-[3px] border-almost-black">
        <h2 className="text-headline text-almost-black uppercase">
          Discussion
          <span className="ml-3 text-2xl font-mono">
            ({comments.length})
          </span>
        </h2>
        <p className="font-serif italic text-lg text-gray mt-2">
          "Where chip opinions collide."
        </p>
      </div>

      {/* Comment Form */}
      <CommentForm
        parentId={parentId}
        parentType={parentType}
        onSubmitSuccess={refreshComments}
      />

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">
            <p className="font-mono text-sm text-gray uppercase">Loading comments...</p>
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              currentUserId={user?.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="text-center py-12 card-brutal">
            <p className="font-mono text-lg uppercase text-gray">No comments yet</p>
            <p className="font-serif italic text-sm text-gray mt-2">
              "Be the first to share your wisdom."
            </p>
          </div>
        )}
      </div>
    </section>
  );
}