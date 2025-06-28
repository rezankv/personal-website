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
import { getTranslations, setRequestLocale } from "next-intl/server";

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
    metadataBase: new URL(process.env.WEBSITE_URL!),
    // openGraph: {
    //   title: t('home.title'),
    //   description: t('home.description'),
    //   locale: params.locale === 'fa' ? 'fa_IR' : 'en_US',
    //   url: baseUrl + path,
    //   siteName: 'نام سایت',
    //   images: [
    //     {
    //       url: baseUrl + '/og.jpg',
    //       width: 1200,
    //       height: 630,
    //       alt: t('home.title'),
    //     },
    //   ],
    //   type: 'website',
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: t('home.title'),
    //   description: t('home.description'),
    //   images: [baseUrl + '/og.jpg'],
    // },
    /* ------------------------------------ from layout ----------------------------------- */
    // openGraph: {
    //   title: "Reza Nikravesh | Software Developer",
    //   description:
    //     "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    //   url: process.env.WEBSITE_URL!,
    //   siteName: "Reza Nikravesh | Software Developer",
    //   images: [
    //     {
    //       url: "/og.png",
    //       width: 1200,
    //       height: 567,
    //       alt: "توضیح عکس",
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Reza Nikravesh | Software Developer",
    //   description:
    //     "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    //   images: ["/og.png"],
    //   creator: "@rezankv",
    // },
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
