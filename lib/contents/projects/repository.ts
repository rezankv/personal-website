import { allProjects, Project } from "contentlayer/generated";

export class ProjectRepository {
  getAllProjects(): Project[] {
    return allProjects;
  }
  getProjectBySlug(slug: string): Project | undefined {
    return allProjects.find((project) => project.slug === slug);
  }
}
