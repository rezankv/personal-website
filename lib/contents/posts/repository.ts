import { allPosts, Post } from "@app/.contentlayer/generated";

export class PostRepository {
  getAllPosts(): Post[] {
    return allPosts;
  }
  getPostBySlug(slug: string): Post | undefined {
    return allPosts.find((post) => post.slug === slug);
  }
}
