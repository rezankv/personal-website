import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

// i18n
import { Locale } from "@app/i18n/routing";

// components
import { SocialLinks } from "@app/components";

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: Locale }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("RootLayout.pages.LinksPage.METADATA");
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

const LinksPage = async() => {
    const t = await getTranslations("RootLayout.pages.LinksPage")
  return (
    <div className="animate-fade-in-up mx-4 flex flex-col gap-5 md:py-4">
      <h2 className="text-xl font-bold">{t('title')}</h2>
      <SocialLinks />
    </div>
  );
};

export default LinksPage;
