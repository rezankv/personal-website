"use client"; // Error boundaries must be Client Components

import { useLocale, useTranslations } from "next-intl";

// constants
import { routes } from "@app/constants";

// i18n
import { Locale } from "@app/i18n/routing";
import { Link } from "@app/i18n/navigation";

export default function Error() {
  const t = useTranslations("RootLayout.pages.ErrorPage");
  const locale = useLocale() as Locale;

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
}
