import Link from "next/link";

// constants
import { routes } from "@app/constants";

// components
import { PostCard } from "@app/components";

// content
import { postService } from "@app/contents";

// utils
import { sortPostsByDateDesc } from "@app/utils";

const PostsPage = () => {
  const posts = postService.getAll();
  const sortedPosts = sortPostsByDateDesc(posts);

  return (
    <div className="animate-fade-in flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Posts</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {sortedPosts.map((post) => (
          <Link href={routes.SINGLE_POST_ROUTE(post.slug)} key={post._id}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
