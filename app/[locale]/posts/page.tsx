import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

// constants
import { routes } from "@app/constants";

// components
import { PostCard } from "@app/components";

// content
import { postService } from "@app/contents";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

// utils
import { sortDocumentByDateDesc } from "@app/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.PostsPage.METADATA");
  const globalMetadataT = await getTranslations("METADATA");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywords.1"),
      t("keywords.2"),
      t("keywords.3"),
      t("keywords.4"),
      t("keywords.5"),
      t("keywords.6"),
      t("keywords.7"),
      t("keywords.8"),
    ],
    authors: [{ name: globalMetadataT("author") }],
    creator: globalMetadataT("author"),
  };
}

const PostsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("RootLayout.pages.PostsPage");
  const posts = sortDocumentByDateDesc(postService.getAll({ lang: locale }));

  return (
    <div className="animate-fade-in-up flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">{t("title")}</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {posts.map((post) => (
          <Link
            locale={locale}
            href={routes.SINGLE_POST_ROUTE(post.slug)}
            key={post._id}
          >
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
