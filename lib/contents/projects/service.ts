import { Project } from "contentlayer/generated";

// locals
import { ProjectRepository } from "./repository";

type GetAllOptions = {
  sort?: (projects: Project[]) => Project[];
  filter?: (project: Project) => boolean;
};

export class ProjectService {
  constructor(private readonly repo: ProjectRepository) {}

  getAll(options?: GetAllOptions): Project[] {
    let projects = this.repo.getAllProjects();

    if (options?.filter) {
      projects = projects.filter(options.filter);
    }

    if (options?.sort) {
      projects = options.sort(projects);
    }

    return projects;
  }
  getBySlug(slug: string): Project | undefined {
    return this.repo.getProjectBySlug(slug);
  }
}
