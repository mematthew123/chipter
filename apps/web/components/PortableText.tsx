/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PortableText as PortableTextReact } from '@portabletext/react';

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-headline text-3xl md:text-4xl text-almost-black mb-6 mt-8 border-l-[3px] border-hot-orange pl-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-headline text-2xl md:text-3xl text-almost-black mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-jetbrains font-bold text-xl md:text-2xl text-almost-black mb-3 mt-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="font-inter text-base/7 text-almost-black mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[6px] border-hot-orange pl-6 my-8 bg-chip-yellow/10 py-4 pr-6">
        <p className="text-accent text-lg text-almost-black">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-hot-orange">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="text-accent">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="font-jetbrains text-sm bg-chip-yellow px-2 py-1 border-[2px] border-almost-black">
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
          className="text-hot-orange font-bold underline decoration-2 underline-offset-2 hover:bg-hot-orange hover:text-warm-white hover:no-underline transition-all px-0.5"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="font-inter text-almost-black ml-6 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="font-inter text-almost-black ml-6 mb-6">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2 relative before:content-['▪'] before:absolute before:left-[-20px] before:text-hot-orange before:font-bold">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2 relative list-decimal list-inside">
        {children}
      </li>
    ),
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