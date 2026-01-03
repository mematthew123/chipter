'use client';

import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { formatDistanceToNow } from 'date-fns';

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

interface CommentProps {
  comment: CommentType;
  currentUserId?: string;
  onDelete?: (commentId: string) => void;
  onEdit?: (commentId: string) => void;
}

export default function Comment({
  comment,
  currentUserId,
  onDelete,
  onEdit,
}: CommentProps) {
  const isOwner = currentUserId === comment.authorId;

  return (
    <div className="card-brutal p-6 mb-4 hover:shadow-[4px_4px_0px_rgba(26,26,26,1)] transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {comment.authorImage ? (
            <img
              src={comment.authorImage}
              alt={comment.authorName}
              className="size-10 border-[3px] border-almost-black"
            />
          ) : (
            <div className="size-10 border-[3px] border-almost-black bg-chip-yellow flex items-center justify-center">
              <span className="font-mono font-bold text-lg uppercase">
                {comment.authorName.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <span className="font-mono font-bold uppercase text-sm block">
              {comment.authorName}
            </span>
            <time className="font-mono text-xs text-gray">
              {formatDistanceToNow(new Date(comment.publishedAt), { addSuffix: true })}
              {comment.isEdited && (
                <span className="italic"> (edited)</span>
              )}
            </time>
          </div>
        </div>

        {isOwner && (
          <div className="flex gap-2">
            <button
              onClick={() => onEdit?.(comment._id)}
              className="font-mono text-xs uppercase text-gray hover:text-hot-orange transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete?.(comment._id)}
              className="font-mono text-xs uppercase text-gray hover:text-hot-orange transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="prose prose-sm max-w-none">
        <PortableText value={comment.content} />
      </div>
    </div>
  );
}