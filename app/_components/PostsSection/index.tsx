import { ArrowRight } from "lucide-react";
import Link from "next/link";

// content
import { postService } from "@app/contents";

// constants
import { routes } from "@app/constants";

// components
import { PostCard } from "@app/components";

export const PostsSection = () => {
  const posts = postService.getAll().slice(0, 3)

  return (
    <div className="flex flex-col gap-4 md:gap-1">
      <span className="mx-4 font-medium">Latest Posts</span>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={routes.SINGLE_POST_ROUTE(post.slug)}>
            <PostCard post={post} />
          </Link>
        );
      })}
      <div className="mx-4 flex justify-end">
        <Link
          href={routes.POSTS_ROUTE}
          className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
        >
          <p className="group-hover:text-foreground transition-all duration-200">
            View all posts
          </p>
          <ArrowRight
            size={18}
            className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
};
