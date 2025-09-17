import { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight } from "lucide-react";

// content
import { postService } from "@app/contents";

// constants
import { routes } from "@app/constants";

// components
import { PostCard } from "@app/components";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

// utils
import { sortDocumentByDateDesc } from "@app/utils";

export const PostsSection = async () => {
  const t = await getTranslations("RootLayout.pages.HomePage.PostsSection");
  const locale = (await getLocale()) as Locale;
  const posts = sortDocumentByDateDesc(postService.getAll({ lang: locale })).slice(0,3);
  const arrowIconBasedOnLocale: Record<Locale, ReactNode> = {
    en: (
      <ArrowRight
        size={18}
        className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
      />
    ),
    fa: (
      <ArrowLeft
        size={18}
        className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
      />
    ),
  };

  return (
    <div className="flex flex-col gap-4 md:gap-1">
      <span className="font-medium">{t("title")}</span>
      {posts.map((post) => {
        return (
          <Link
            locale={locale}
            key={post.slug}
            href={routes.SINGLE_POST_ROUTE(post.slug)}
          >
            <PostCard post={post} />
          </Link>
        );
      })}
      <div className="flex justify-end">
        <Link
          href={routes.POSTS_ROUTE}
          className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
        >
          <p className="group-hover:text-foreground transition-all duration-200">
            {t("more")}
          </p>
          {arrowIconBasedOnLocale[locale]}
        </Link>
      </div>
    </div>
  );
};
