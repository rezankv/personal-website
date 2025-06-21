import { ArrowRight } from "lucide-react";
import Link from "next/link";

// content
import { allProjects } from "@app/.contentlayer/generated";

// constants
import { routes } from "@app/constants";

// components
import { ProjectCard } from "@app/components";

export const ProjectSection = () => {
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return (
    <div className="flex flex-col gap-2">
      <span className="mx-4 font-medium">Featured Projects</span>
      <div className="flex flex-col gap-4 md:gap-1">
        {featuredProjects.map((project) => (
          <Link key={project._id} href={project.liveLink} target="_blank">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      <div className="mx-4 flex justify-end">
        <Link
          href={routes.PROJECTS_ROUTE}
          className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
        >
          <p className="group-hover:text-foreground transition-all duration-200">
            View all projects
          </p>
          <ArrowRight
            size={18}
            className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
};
