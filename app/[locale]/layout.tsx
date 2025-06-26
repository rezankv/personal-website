import Head from "next/head";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Vazirmatn } from "next/font/google";

// i18n
import { Locale, localeDir, routing } from "@app/i18n/routing";

// providers
import { Providers } from "@app/providers";

// utils
import { cn } from "@app/utils";

// locals
import { Footer, Header } from "./_components";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});
// const dmSans = DM_Sans({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Reza Nikravesh | Software Developer",
  description:
    "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
  keywords: [
    "software development",
    "web development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portfolio",
    "programming blog",
  ],
  authors: [{ name: "Reza Nikravesh" }],
  creator: "Reza Nikravesh",
  metadataBase: new URL(process.env.WEBSITE_URL!),
  openGraph: {
    title: "Reza Nikravesh | Software Developer",
    description:
      "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    url: process.env.WEBSITE_URL!,
    siteName: "Reza Nikravesh | Software Developer",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 567,
        alt: "توضیح عکس",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Nikravesh | Software Developer",
    description:
      "Software developer sharing technical blog posts and showcasing personal and professional projects focused on modern web development.",
    images: ["/og.png"],
    creator: "@rezankv",
  },
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

  return (
    <html suppressHydrationWarning lang={locale} dir={localeDir[locale]}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Reza Nikravesh" />
      </Head>
      <body
        className={cn(
          "bg-background text-foreground flex min-h-screen flex-col items-center",
          vazirmatn.className,
          // dmSans.className
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
