import { postService } from "@app/contents";
import { Locale, 
  // routing
 } from "@app/i18n/routing";
import { ImageResponse } from "next/og";

// export const revalidate = 60;

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const locales = routing.locales;
//   return postService.getAll().map(({ slug }) => ({
//     slug,
//     locales,
//   }));
// }

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { slug, locale } = await params;
  const post = postService.getOne({ slug, lang: locale });
  console.log("✅✅✅✅✅✅✅",post?.title);
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post?.title}
      </div>
    ),
  );
}
