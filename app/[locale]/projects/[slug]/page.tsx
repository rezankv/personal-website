import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

// components
import { MdxViewer } from "@app/components";

// utils
import { cn, formatDate, formatReadingTime } from "@app/utils";

// constants
import { routes } from "@app/constants";

// content
import { projectService } from "@app/contents";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projectService.getOne({ slug });
  if (!project) notFound();

  return {
    title: project.title,
    description: project.summery,
    keywords: project.keywords,
    authors: [{ name: project.author }],
    creator: project.author,
    // openGraph: {
    //   title: t('home.title'),
    //   description: t('home.description'),
    //   locale: params.locale === 'fa' ? 'fa_IR' : 'en_US',
    //   url: baseUrl + path,
    //   siteName: 'نام سایت',
    //   images: [
    //     {
    //       url: baseUrl + '/og.jpg',
    //       width: 1200,
    //       height: 630,
    //       alt: t('home.title'),
    //     },
    //   ],
    //   type: 'website',
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: t('home.title'),
    //   description: t('home.description'),
    //   images: [baseUrl + '/og.jpg'],
    // },
    /* ------------------------------------ from layout ----------------------------------- */
    // openGraph: {
    //   title: "Reza Nikravesh | Software Developer",
    //   description:
    //     "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    //   url: process.env.WEBSITE_URL!,
    //   siteName: "Reza Nikravesh | Software Developer",
    //   images: [
    //     {
    //       url: "/og.png",
    //       width: 1200,
    //       height: 567,
    //       alt: "توضیح عکس",
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Reza Nikravesh | Software Developer",
    //   description:
    //     "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    //   images: ["/og.png"],
    //   creator: "@rezankv",
    // },
  };
}

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
  params: Promise<{ slug: string; locale: Locale }>;
}) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const project = projectService.getOne({ slug });

  if (!project) notFound();

  const t = await getTranslations(
    "RootLayout.pages.ProjectsPage.SingleProjectPage",
  );
  const readingTime = formatReadingTime(project.body.code).toLocaleString(
    locale,
    {
      useGrouping: false,
    },
  );

  const iconClassNameBasedOnLocale: Partial<Record<Locale, string>> = {
    en: "rotate-180",
  };

  return (
    <div className="animate-fade-in-up flex flex-col gap-8 p-4">
      <Link
        locale={locale}
        href={routes.PROJECTS_ROUTE}
        className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className={cn(
            "transition-transform group-hover:-translate-x-0.5",
            iconClassNameBasedOnLocale[locale],
          )}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
            clipRule="evenodd"
          />
        </svg>
        {t("back")}
      </Link>
      <section>
        <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight">
          {project.title}
        </h1>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <time dateTime={project.date}>
            {formatDate(project.date, locale)}
          </time>
          <span>•</span>
          <span>
            {readingTime} {t("readTimeLabel")}
          </span>
        </div>
      </section>

      <article className="prose dark:prose-invert">
        <MdxViewer content={project.body.code} />
      </article>
    </div>
  );
};

export default SingleProjectPage;
