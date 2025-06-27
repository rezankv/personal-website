// i18n
import { Locale, routing } from "@app/i18n/routing";

// locals
import {
  AboutSection,
  ExperienceSection,
  PostsSection,
  ProjectSection,
} from "./_components";
import { setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

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
