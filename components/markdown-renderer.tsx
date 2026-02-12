"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4 tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-3 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg md:text-xl font-semibold text-white mt-5 mb-2">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-semibold text-white mt-4 mb-2">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-semibold text-white/80 mt-4 mb-2 uppercase tracking-wide">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="text-white/70 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/60 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white/90">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-white/60">{children}</em>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-white/70 pl-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-white/70 pl-2">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-white/70 leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-white/20 pl-4 py-1 my-4 text-white/60 italic">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="text-sm font-mono text-white/80">{children}</code>
      );
    }
    return (
      <code className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/80 text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="rounded-xl bg-white/[0.04] border border-white/10 p-4 overflow-x-auto my-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-4 rounded-lg border border-white/10">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-white/5 text-white/80 text-xs uppercase tracking-wider">
      {children}
    </thead>
  ),
  th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
  td: ({ children }) => (
    <td className="px-4 py-3 text-white/60 border-t border-white/5">
      {children}
    </td>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      className="rounded-xl border border-white/10 my-4 max-w-full"
    />
  ),
};

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={`max-w-none ${className || ""}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
