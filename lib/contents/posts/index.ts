// locals
import { PostRepository } from "./repository"
import { PostService } from "./service"
export * from './type'

const repository = new PostRepository()
export const postService = new PostService(repository)