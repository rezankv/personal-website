// locals
import { ProjectRepository } from "./repository";
import { ProjectService } from "./service";
export * from "./type";

const repository = new ProjectRepository();
export const service = new ProjectService(repository);
