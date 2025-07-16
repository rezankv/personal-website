import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

// i18n
import { routes } from "@app/constants";
import { Link } from "@app/i18n/navigation";
import { Locale } from "@app/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RootLayout.pages.NotFoundPage.METADATA");
  const globalMetadataT = await getTranslations("METADATA");

  return {
    title: t("title"),
    description: t("description"),
    authors: [{ name: globalMetadataT("author") }],
    creator: globalMetadataT("author"),
  };
}

const NotfoundPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("RootLayout.pages.NotFoundPage");

  return (
    <div className="bg-background fixed inset-0 z-10 flex flex-col items-center justify-center gap-2 px-2 py-4 text-center">
      <span className="text-2xl font-bold md:text-4xl">{t("title")}</span>
      <p className="text-muted-foreground max-w-xs md:max-w-none">
        {t("description")}
      </p>
      <Link locale={locale} href={routes.HOME_ROUTE} className="mt-8 underline">
        {t("back")}
      </Link>
    </div>
  );
};

export default NotfoundPage;
