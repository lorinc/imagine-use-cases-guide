'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-foreground mb-6 mt-8">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-foreground mb-2 mt-4">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-foreground leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="ml-4">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-4 italic my-4 text-secondary">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-sidebar border border-border rounded-lg p-4 overflow-x-auto mb-4">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-accent hover:text-highlight underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => (
            <hr className="my-8 border-border" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
