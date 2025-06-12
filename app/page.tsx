import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";
import { ArrowRight } from "lucide-react";
import PostCard from "./_components/PostCard";
import config from "@app/lib/config";

export default function Home() {
  return (
    <div className="mt-4 flex flex-col gap-10">
      <div className="mx-4 flex flex-col gap-2">
        <span className="font-medium">About me</span>
        <span>{config.description}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="mx-4 font-medium">Featured Projects</span>
        <div className="  flex flex-col gap-4 md:gap-1">
          {config.projects.map((project, idx) => {
            if (project.featured) {
              return (
                <Link key={idx} href={project.link} target="_blank">
                  <ProjectCard project={project} />
                </Link>
              );
            }
          })}
        </div>
        <div className="mx-4 flex justify-end">
          <Link
            href="/projects"
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
        {[{slug:'/dsa',title:'say my naem',date:new Date().toString()},
          {slug:'/d2sa',title:'say my naem2',date:new Date().toString()},
          {slug:'/d33sa',title:'say my naem3',date:new Date().toString()}

        ].slice(0, 3).map((post) => {
          return (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          );
        })}
        <div className="mx-4 flex justify-end">
          <Link
            href="/posts"
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
