import { allProjects, Project } from "contentlayer/generated";

export type ProjectFilter = Partial<Project>

export class ProjectRepository {

  getAll(filters: ProjectFilter = {}): Project[] {
    return allProjects.filter(project =>
      Object.entries(filters).every(([key, value]) => {
        return project[key as keyof Project] === value;
      })
    );
  }
  
  getOne(filters: Partial<Project> = {}): Project | undefined {
    return allProjects.find(project =>
      Object.entries(filters).every(([key, value]) => {
        return project[key as keyof Project] === value;
      })
    );
  }

   
}
