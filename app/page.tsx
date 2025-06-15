import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";
import { ArrowRight } from "lucide-react";
import PostCard from "./_components/PostCard";

// content
import { allPosts, allProjects } from "@app/.contentlayer/generated";

// constants
import { routes } from "@app/constants";

export default function Home() {
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return (
    <div className="mt-4 flex flex-col gap-10">
      <div className="mx-4 flex flex-col gap-2">
        <span className="font-medium">About me</span>
        <span>
          {`Hi, I'm Reza. I'm based in Los Angeles, California. In addition to
          coding, I also make YouTube videos, sharing my knowledge and
          experience on web & mobile development.`}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="mx-4 font-medium">Featured Projects</span>
        <div className="flex flex-col gap-4 md:gap-1">
          {featuredProjects.map((project) => (
            <Link key={project._id} href={project.liveLink} target="_blank">
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className="mx-4 flex justify-end">
          <Link
            href={routes.PROJECTS_ROUTE}
            className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
          >
            <p className="group-hover:text-foreground transition-all duration-200">
              View all projects
            </p>
            <ArrowRight
              size={18}
              className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-1">
        <span className="mx-4 font-medium">Latest Posts</span>
        {allPosts.slice(0, 3).map((post) => {
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
    </div>
  );
}
