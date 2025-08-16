import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

// i18n
import { Locale, routing } from "@app/i18n/routing";

// locals
import {
  AboutSection,
  ExperienceSection,
  PostsSection,
  ProjectSection,
} from "./_components";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.HomePage.METADATA");
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

export async function generateStaticParams() {
  const locales = routing.locales;
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="animate-fade-in-up mx-4 mt-4 flex flex-col gap-10">
      <AboutSection />
      <ProjectSection />
      <PostsSection />
      <ExperienceSection />
    </div>
  );
}
