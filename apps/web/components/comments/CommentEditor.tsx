'use client';

import { useState } from 'react';
import type { PortableTextBlock } from '@portabletext/types';

interface CommentEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CommentEditor({
  value,
  onChange,
  placeholder = "Share your thoughts..."
}: CommentEditorProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div className="mb-2 flex gap-2">
        {/* Simple formatting toolbar */}
        <button
          type="button"
          className="px-3 py-1 border-[3px] border-almost-black bg-chip-yellow hover:bg-hot-orange hover:text-warm-white transition-colors font-mono text-xs uppercase font-bold"
          onClick={() => {
            // Add bold markdown
            const selection = window.getSelection()?.toString() || '';
            if (selection) {
              onChange(value.replace(selection, `**${selection}**`));
            }
          }}
        >
          Bold
        </button>
        <button
          type="button"
          className="px-3 py-1 border-[3px] border-almost-black bg-chip-yellow hover:bg-hot-orange hover:text-warm-white transition-colors font-mono text-xs uppercase font-bold"
          onClick={() => {
            // Add italic markdown
            const selection = window.getSelection()?.toString() || '';
            if (selection) {
              onChange(value.replace(selection, `*${selection}*`));
            }
          }}
        >
          Italic
        </button>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full min-h-[120px] px-4 py-3
          border-[3px] border-almost-black bg-warm-white
          text-almost-black font-inter placeholder-gray
          focus:outline-none transition-all resize-y
          ${isFocused ? 'shadow-[4px_4px_0px_rgba(26,26,26,1)]' : ''}
        `}
        required
      />

      <div className="mt-2 font-mono text-xs text-gray">
        {value.length} characters • Markdown supported
      </div>
    </div>
  );
}