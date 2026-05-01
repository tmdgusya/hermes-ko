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
            <h1 className="text-2xl font-bold text-foreground mt-10 mb-3 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm font-semibold text-foreground mt-4 mb-2">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
              {children}
            </p>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),

          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1.5 mb-4 text-[15px] text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1.5 mb-4 text-[15px] text-muted-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.7]">{children}</li>
          ),

          code: CodeComponent,
          pre: PreComponent,

          blockquote: ({ children }) => (
            <blockquote className="border-l-[3px] border-primary bg-primary/[0.04] pl-4 py-1 my-4 rounded-r-[var(--radius-sm)]">
              <div className="text-muted-foreground text-[15px]">{children}</div>
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto mb-6 rounded-[var(--radius-md)] border border-border">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-secondary">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left px-3 py-2 text-xs font-semibold text-foreground border-b border-border">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-sm text-muted-foreground border-b border-border">
              {children}
            </td>
          ),

          hr: () => <hr className="border-border my-8" />,

          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-muted-foreground">{children}</em>
          ),

          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-[var(--radius-md)] border border-border my-4 max-w-full"
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
      <code className="px-1.5 py-0.5 rounded-[var(--radius-sm)] text-[13px] font-mono bg-muted text-foreground border border-border">
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
    <div className="relative group my-4 rounded-[var(--radius-md)] overflow-hidden bg-card border border-border">
      <pre
        ref={preRef}
        className="p-4 overflow-x-auto text-[13px] leading-[1.6] font-mono"
        style={{ background: "transparent", margin: 0 }}
      >
        {children}
      </pre>
      <button
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] px-2 py-1 rounded-[var(--radius-sm)] bg-secondary text-muted-foreground hover:text-foreground border border-border"
        onClick={handleCopy}
      >
        복사
      </button>
    </div>
  );
}
