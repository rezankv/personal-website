import { Link } from "@app/i18n/navigation";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

// constants
import { routes } from "@app/constants";

// content
import { projectService } from "@app/contents";

// components
import { ProjectCard } from "@app/components";

// utils
import { sortDocumentByDateDesc } from "@app/utils";

// i18n
import { Locale } from "@app/i18n/routing";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.ProjectsPage.METADATA");
  const globalMetadataT = await getTranslations("METADATA");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywords.1"),
      t("keywords.2"),
      t("keywords.3"),
      t("keywords.4"),
      t("keywords.5"),
      t("keywords.6"),
      t("keywords.7"),
      t("keywords.8"),
    ],
    authors: [{ name: globalMetadataT("author") }],
    creator: globalMetadataT("author"),
  };
}

const ProjectsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.ProjectsPage");

  const projects = sortDocumentByDateDesc(projectService.getAll({ lang: locale }));

  return (
    <div className="animate-fade-in-up mx-4 flex flex-col gap-2 md:py-4">
      <h2 className="text-xl font-bold">{t("title")}</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {projects.map((project) => {
          return (
            <Link
              locale={locale}
              key={project.url}
              href={routes.SINGLE_PROJECT_ROUTE(project.slug)}
            >
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
