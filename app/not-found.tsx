import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

// styles
import "@app/styles";

// constants
import { routes } from "@app/constants";

// i18n
import { Link } from "@app/i18n/navigation";
import { Locale } from "@app/i18n/routing";

const NotfoundPage = async () => {
  const t = await getTranslations("RootLayout.pages.NotFoundPage");
  const locale = (await getLocale()) as Locale;

  return (
    <html suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <div className="bg-background fixed inset-0 z-10 flex flex-col items-center justify-center gap-2 px-2 py-4 text-center">
            <span className="text-2xl font-bold md:text-4xl">{t("title")}</span>
            <p className="text-muted-foreground">{t("description")}</p>
            <Link
              locale={locale}
              href={routes.HOME_ROUTE}
              className="mt-8 underline"
            >
              {t("back")}
            </Link>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default NotfoundPage;
