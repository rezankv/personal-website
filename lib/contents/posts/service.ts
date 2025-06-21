import { Post } from "@app/.contentlayer/generated"

// locals
import { PostRepository } from "./repository"

type GetAllOptions = {
    sort?: (posts: Post[]) => Post[]
    filter?: (post: Post) => boolean
}

export class PostService {


    constructor(private readonly repo: PostRepository) { }

    getAll(options?: GetAllOptions): Post[] {
        let posts = this.repo.getAllPosts()

        if (options?.filter) {
            posts = posts.filter(options.filter)
        }

        if (options?.sort) {
            posts = options.sort(posts)
        }

        return posts
    }
    getBySlug(slug: string): Post | undefined {
        return this.repo.getPostBySlug(slug)
    }
}