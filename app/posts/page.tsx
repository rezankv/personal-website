import Link from "next/link";
import { compareDesc } from "date-fns";

// constants
import { routes } from "@app/constants";

// components
import { PostCard } from "@app/components";

// content
import { postService } from "@app/contents";

const PostsPage = () => {
  const posts = postService.getAll().sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="animate-fade-in flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Posts</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {posts.map((post) => (
          <Link href={routes.SINGLE_POST_ROUTE(post.slug)} key={post._id}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
