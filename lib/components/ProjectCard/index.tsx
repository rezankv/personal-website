import { getLocale } from "next-intl/server";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// content
import { Project } from "@app/contents";

// i18n
import { Locale } from "@app/i18n/routing";

// utils
import { cn } from "@app/utils";

export const ProjectCard = async ({ project }: { project: Project }) => {
  const locale = (await getLocale()) as Locale;

  const iconClassNameBasedOnLocale: Partial<Record<Locale, string>> = {
    fa: "rotate-y-180",
  };
  
  return (
    <div className="group md:hover:bg-muted flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-1 duration-300 md:py-3">
      <div className="flex flex-row items-center gap-4">
        <Image
          width={100}
          height={100}
          src={project.icon}
          alt={project.title}
          className="h-10 w-10 rounded-lg shadow"
        />
        <div className="flex flex-col">
          <h2 className="text-sm">{project.title}</h2>
          <span className="text-muted-foreground text-sm">
            {project.description}
          </span>
        </div>
      </div>
      <ExternalLink
        size={16}
        className={cn(
          "scale-0 transform transition-transform duration-300 md:group-hover:scale-100",
          iconClassNameBasedOnLocale[locale],
        )}
      />
    </div>
  );
};
