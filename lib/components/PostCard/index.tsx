import { getLocale } from "next-intl/server";
import { ExternalLink } from "lucide-react";

// utils
import { cn, formatDate } from "@app/utils";

// content
import { Post } from "@app/contents";

// i18n
import { Locale } from "@app/i18n/routing";

export const PostCard = async ({ post }: { post: Post }) => {
  const locale = (await getLocale()) as Locale;

  const iconClassNameBasedOnLocale: Partial<Record<Locale, string>> = {
    fa: "rotate-y-180",
  };

  return (
    <div className="group md:hover:bg-muted flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-1 duration-300 md:py-3">
      <div className="flex flex-col">
        <h2 className="text-sm">{post.title}</h2>
        <time className="text-muted-foreground text-sm">
          {formatDate(post.date, locale)}
        </time>
      </div>
      <ExternalLink
        size={16}
        className={cn(
          "scale-0 transform transition-transform duration-300 md:block md:group-hover:scale-100",
          iconClassNameBasedOnLocale[locale],
        )}
      />
    </div>
  );
};
