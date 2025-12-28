/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PortableText as PortableTextReact } from '@portabletext/react';

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-mono font-bold text-2xl md:text-3xl uppercase text-almost-black mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-mono font-bold text-xl md:text-2xl uppercase text-almost-black mb-3 mt-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="font-sans text-base/7 text-almost-black mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[6px] border-hot-orange pl-6 my-6">
        <p className="font-serif italic text-lg text-gray">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-almost-black">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="font-serif italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="font-mono text-sm bg-chip-yellow/30 px-1 py-0.5 border border-almost-black">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-hot-orange underline hover:text-almost-black transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 font-sans text-almost-black ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 font-sans text-almost-black ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
};

interface PortableTextProps {
  value: any;
  className?: string;
}

export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <div className={className}>
      <PortableTextReact value={value} components={components} />
    </div>
  );
}