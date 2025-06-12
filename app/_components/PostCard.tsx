import { formatDate } from "@app/lib/utils";
import { ExternalLink } from 'lucide-react';



type Post = {
  title: string;
  date: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="group md:hover:bg-muted flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-1 duration-300 md:py-3">
      <div className="flex flex-col">
        <h2 className="text-sm">{post.title}</h2>
        <time className="text-muted-foreground text-sm">
          {formatDate(post.date)}
        </time>
      </div>
      <ExternalLink
        size={16}
        className="scale-0 transform transition-transform duration-300 md:block md:group-hover:scale-100"
      />
    </div>
  );
}
