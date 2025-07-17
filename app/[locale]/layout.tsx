import { setRequestLocale } from "next-intl/server";
import Head from "next/head";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { DM_Sans, Vazirmatn } from "next/font/google";

// i18n
import { Locale, localeDir, routing } from "@app/i18n/routing";

// providers
import { Providers } from "@app/providers";

// styles
import "@app/styles";

// utils
import { cn } from "@app/utils";

// locals
import { Footer, Header } from "./_components";
import { Metadata } from "next";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const fontClassName: Record<Locale, string> = {
  fa: vazirmatn.className,
  en: dmSans.className,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL!),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale = "fa" } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html suppressHydrationWarning lang={locale} dir={localeDir[locale]}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Reza Nikravesh" />
      </Head>
      <body
        className={cn(
          "bg-background text-foreground flex min-h-screen flex-col items-center",
          fontClassName,
        )}
      >
        <Providers>
          <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 py-8">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
