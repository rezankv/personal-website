import { cookies } from "next/headers";
import { getTranslations, setRequestLocale } from "next-intl/server";

// styles
import "@app/styles";

// constants
import { routes } from "@app/constants";

// i18n
import { Link } from "@app/i18n/navigation";
import { Locale } from "@app/i18n/routing";

// providers
import { Providers } from "@app/providers";

const NotfoundPage = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value as Locale;

  setRequestLocale(locale);

  const t = await getTranslations("RootLayout.pages.NotFoundPage");

  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
};

export default NotfoundPage;
