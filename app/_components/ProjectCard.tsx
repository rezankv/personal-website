import { ExternalLink } from 'lucide-react';
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group md:hover:bg-muted flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-1 duration-300 md:py-3">
      <div className="flex flex-row items-center gap-4">
        <Image
        width={100}
        height={100}
          src={project.image}
          alt={project.name}
          className="h-10 w-10 rounded-lg shadow"
        />
        <div className="flex flex-col">
          <h2 className="text-sm">{project.name}</h2>
          <span className="text-muted-foreground text-sm">
            {project.description}
          </span>
        </div>
      </div>
      <ExternalLink
        size={16}
        className="scale-0 transform transition-transform duration-300 md:group-hover:scale-100"
      />
    </div>
  );
}
