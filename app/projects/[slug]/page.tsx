import Link from "next/link";
import { notFound } from "next/navigation";

// components
import { MdxViewer } from "@app/components";

// utils
import { formatDate, formatReadingTime } from "@app/utils";

// constants
import { routes } from "@app/constants";

// content
import { projectService } from "@app/contents";

export const revalidate = 60;

export const dynamicParams = false;

export async function generateStaticParams() {
  return projectService.getAll().map(({ slug }) => ({
    slug,
  }));
}

const SingleProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projectService
    .getAll()
    .find((project) => project.slug === slug);

  if (!project) notFound();

  const readingTime = formatReadingTime(project.body.code);

  return (
    <div className="animate-fade-in flex flex-col gap-8 p-4">
      <Link
        href={routes.POSTS_ROUTE}
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
        <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight">
          {project.title}
        </h1>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <time dateTime={project.date}>{formatDate(project.date)}</time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
      </section>

      <article className="prose dark:prose-invert">
        <MdxViewer content={project.body.code} />
      </article>
    </div>
  );
};

export default SingleProjectPage;
