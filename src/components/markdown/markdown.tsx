import ReactMarkdown from 'react-markdown'

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-8 mb-4 text-heading-sm md:text-heading-lg">
            {children}
          </h2>
        ),
        a: ({ href, children }) => (
          <a className="text-blue-200 hover:underline" href={href}>
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className="mb-6 text-gray-200 leading-relaxed">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
