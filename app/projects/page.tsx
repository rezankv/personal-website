import Link from "next/link";

// constants
import { routes } from "@app/constants";

// content
import { projectService} from "@app/contents";

// components
import { ProjectCard } from "@app/components";

const ProjectsPage = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {projectService.getAll().map((project, index) => {
          return (
            <Link
              key={index}
              href={routes.SINGLE_PROJECT_ROUTE(project.slug)}
              target="_blank"
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
