import config from "@app/lib/config";
import Link from "next/link";
import React from "react";
import ProjectCard from "../_components/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {config.projects.map((project, idx) => {
          return (
            <Link key={idx} href={`/projects/${project.slug}`} target="_blank">
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectsPage;
