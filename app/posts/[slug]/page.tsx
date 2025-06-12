import { formatDate } from "@app/lib/utils"
import Link from "next/link"
import React from 'react'

const SinglePostPage = () => {
  return (
    <main className="flex flex-col gap-8 p-4">
      <Link
        href="/posts"
        className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="rotate-180 transition-transform group-hover:-translate-x-0.5"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
            clipRule="evenodd"
          />
        </svg>
        Back to posts
      </Link>
      <section>
        {/* Title */}
        <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight">
          {/* {frontmatter.title} */}
          The Awesome Title
        </h1>

        {/* Metadata - author, date, reading time */}
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <time dateTime={new Date().toString()}>
              {formatDate(new Date().toString())}
            </time>
          {/* {frontmatter.date && (
            <time dateTime={frontmatter.date}>
              {formatDate(frontmatter.date)}
            </time>
          )} */}
          <span>•</span>
          <span>{22} min read</span>
          {/* <span>{readingTime} min read</span> */}
        </div>
      </section>

      <article className="prose dark:prose-invert max-w-none">
        {/* <Component components={{ CodeBlock }} /> */}
      </article>
    </main>
  )
}

export default SinglePostPage