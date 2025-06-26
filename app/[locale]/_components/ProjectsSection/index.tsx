import { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight } from "lucide-react";

// content
import { projectService } from "@app/contents";

// constants
import { routes } from "@app/constants";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

// components
import { ProjectCard } from "@app/components";

export const ProjectSection = async () => {
  const t = await getTranslations("RootLayout.pages.HomePage.ProjectsSection");
  const locale = (await getLocale()) as Locale;

  const featuredProjects = projectService.getAll({ lang: locale }).slice(0, 3);

  const arrowIconBasedOnLocale: Record<Locale, ReactNode> = {
    en: <ArrowRight size={18} />,
    fa: <ArrowLeft size={18} />,
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{t("title")}</span>
      <div className="flex flex-col gap-4 md:gap-1">
        {featuredProjects.map((project) => (
          <Link
            locale={locale}
            key={project._id}
            href={routes.SINGLE_PROJECT_ROUTE(project.slug)}
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href={routes.PROJECTS_ROUTE}
          className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
        >
          <p className="group-hover:text-foreground transition-all duration-200">
            {t("more")}
          </p>
          {arrowIconBasedOnLocale[locale]}
        </Link>
      </div>
    </div>
  );
};
