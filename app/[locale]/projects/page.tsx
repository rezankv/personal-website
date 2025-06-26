import { getTranslations, setRequestLocale } from "next-intl/server";

// constants
import { routes } from "@app/constants";

// content
import { projectService } from "@app/contents";

// components
import { ProjectCard } from "@app/components";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

const ProjectsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.ProjectsPage");

  const projects = projectService.getAll({ lang: locale });

  return (
    <div className="animate-fade-in flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">{t("title")}</h2>
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
