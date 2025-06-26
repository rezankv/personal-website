// locals
import { Post } from "./type";
import { PostFilter, PostRepository } from "./repository";

export class PostService {
  constructor(private readonly repo: PostRepository) {}

  getAll(filters: PostFilter = {}): Post[] {
    const posts = this.repo.getAll(filters);
    return posts;
  }
  getOne(filters: PostFilter): Post | undefined {
    return this.repo.getOne(filters);
  }
}
