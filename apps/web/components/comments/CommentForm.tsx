'use client';

import { useState } from 'react';
import { useUser, SignInButton } from '@clerk/nextjs';
import CommentEditor from './CommentEditor';
import type { PortableTextBlock } from '@portabletext/types';

interface CommentFormProps {
  parentId: string;
  parentType: 'post' | 'chipReview';
  onSubmitSuccess?: () => void;
}

export default function CommentForm({
  parentId,
  parentType,
  onSubmitSuccess,
}: CommentFormProps) {
  const { isSignedIn, user } = useUser();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
      setError('You must be signed in to comment');
      return;
    }

    if (!content.trim()) {
      setError('Please enter a comment');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Convert markdown-style content to portable text blocks
      const blocks: PortableTextBlock[] = content.split('\n\n').map((paragraph) => ({
        _type: 'block',
        _key: crypto.randomUUID(),
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: crypto.randomUUID(),
            text: paragraph.trim(),
            marks: [],
          },
        ],
      }));

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: blocks,
          parentId,
          parentType,
          authorName: user.fullName || user.username || 'Anonymous',
          authorEmail: user.emailAddresses[0]?.emailAddress,
          authorId: user.id,
          authorImage: user.imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      // Clear form and call success callback
      setContent('');
      onSubmitSuccess?.();
    } catch (err) {
      setError('Failed to post comment. Please try again.');
      console.error('Comment submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is not signed in, show sign-in prompt
  if (!isSignedIn) {
    return (
      <div className="card-brutal p-8 text-center">
        <h3 className="font-mono font-bold uppercase text-lg mb-4">
          Join the Discussion
        </h3>
        <p className="font-serif italic text-gray mb-6">
          "Every chip deserves a debate."
        </p>
        <SignInButton mode="modal">
          <button className="button-brutal">
            Sign In to Comment
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-brutal p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={user.imageUrl}
          alt={user.fullName || user.username || 'User'}
          className="size-10 border-[3px] border-almost-black"
        />
        <div>
          <h3 className="font-mono font-bold uppercase text-sm">
            Posting as {user.fullName || user.username}
          </h3>
          <p className="font-mono text-xs text-gray">
            {user.emailAddresses[0]?.emailAddress}
          </p>
        </div>
      </div>

      <CommentEditor
        value={content}
        onChange={setContent}
        placeholder="Share your hot take on this chip..."
      />

      {error && (
        <div className="mt-4 p-3 border-[3px] border-hot-orange bg-hot-orange/10">
          <p className="font-mono text-xs text-hot-orange uppercase">{error}</p>
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <p className="font-mono text-xs text-gray">
          Be respectful. Chips have feelings too.
        </p>
        <button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className={`
            px-6 py-3 border-[3px] border-almost-black
            font-mono font-bold uppercase tracking-wide
            transition-all duration-200
            ${isSubmitting || !content.trim()
              ? 'bg-gray text-warm-white cursor-not-allowed'
              : 'bg-hot-orange text-warm-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]'
            }
          `}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
}