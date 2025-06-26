import { allPosts } from "contentlayer/generated";

// locals
import { Post } from "./type";

export type PostFilter = Partial<Post>;
export class PostRepository {
  getAll(filters: PostFilter = {}): Post[] {
    return allPosts.filter((post) =>
      Object.entries(filters).every(([key, value]) => {
        return post[key as keyof Post] === value;
      }),
    );
  }

  getOne(filters: Partial<Post> = {}): Post | undefined {
    return allPosts.find((post) =>
      Object.entries(filters).every(([key, value]) => {
        return post[key as keyof Post] === value;
      }),
    );
  }
}
