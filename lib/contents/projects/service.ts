import { Project } from "contentlayer/generated";

// locals
import { ProjectFilter, ProjectRepository } from "./repository";

export class ProjectService {
  constructor(private readonly repo: ProjectRepository) {}

  getAll(filters: ProjectFilter = {}): Project[] {
    const projects = this.repo.getAll(filters);
    return projects;
  }
  getOne(filters: ProjectFilter): Project | undefined {
    return this.repo.getOne(filters);
  }
}
