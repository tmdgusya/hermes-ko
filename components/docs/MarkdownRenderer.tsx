"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { useRef } from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-hermes">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-3 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold text-[var(--text-primary)] mt-6 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mt-4 mb-2">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] mb-4">
              {children}
            </p>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[var(--hermes-primary)] hover:text-[var(--hermes-primary-hover)] underline underline-offset-2 decoration-[var(--hermes-primary)]/40 hover:decoration-[var(--hermes-primary)] transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),

          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1.5 mb-4 text-[15px] text-[var(--text-secondary)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1.5 mb-4 text-[15px] text-[var(--text-secondary)]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.7]">{children}</li>
          ),

          code: CodeComponent,
          pre: PreComponent,

          blockquote: ({ children }) => (
            <blockquote className="border-l-[3px] border-[var(--hermes-primary)] bg-[var(--hermes-primary)]/[0.04] pl-4 py-1 my-4 rounded-r-[var(--radius-sm)]">
              <div className="text-[var(--text-secondary)] text-[15px]">{children}</div>
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto mb-6 rounded-[var(--radius-md)] border border-[var(--border-default)]">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[var(--surface-dark-alt)]">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left px-3 py-2 text-xs font-semibold text-[var(--text-primary)] border-b border-[var(--border-default)]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-sm text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              {children}
            </td>
          ),

          hr: () => <hr className="border-[var(--border-default)] my-8" />,

          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[var(--text-secondary)]">{children}</em>
          ),

          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-[var(--radius-md)] border border-[var(--border-default)] my-4 max-w-full"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CodeComponent({ className, children, ...props }: any) {
  const isInline = !className;
  if (isInline) {
    return (
      <code className="px-1.5 py-0.5 rounded-[var(--radius-sm)] text-[13px] font-mono bg-[var(--surface-dark-alt)] text-[var(--text-primary)] border border-[var(--border-muted)]">
        {children}
      </code>
    );
  }
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

function PreComponent({ children }: any) {
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (preRef.current) {
      const code = preRef.current.textContent || "";
      navigator.clipboard.writeText(code);
    }
  };

  return (
    <div className="relative group my-4 rounded-[var(--radius-md)] overflow-hidden bg-[var(--code-bg)] border border-[var(--code-border)]">
      <pre
        ref={preRef}
        className="p-4 overflow-x-auto text-[13px] leading-[1.6] font-mono"
        style={{ background: "transparent", margin: 0 }}
      >
        {children}
      </pre>
      <button
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] px-2 py-1 rounded-[var(--radius-sm)] bg-[var(--surface-dark-alt)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-muted)]"
        onClick={handleCopy}
      >
        복사
      </button>
    </div>
  );
}
