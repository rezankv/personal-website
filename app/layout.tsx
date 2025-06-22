import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Head from "next/head";

// styles
import "@app/styles";

// providers
import { Providers } from "@app/providers";

// locals
import { Footer, Header } from "./_components";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Reza Nikravesh" />
      </Head>
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center">
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
