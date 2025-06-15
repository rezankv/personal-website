import Link from "next/link";
import ProjectCard from "../_components/ProjectCard";

// constants
import { routes } from "@app/constants";

// content
import { allProjects } from "@app/.contentlayer/generated";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {allProjects.map((project, index) => {
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
    </main>
  );
};

export default ProjectsPage;
