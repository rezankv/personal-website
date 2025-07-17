import { ImageResponse } from "next/og";

export const contentType = "image/png";

export const alt = "Reza Nikravesh";

export const size = {
  width: 1200,
  height: 630,
};

export const dynamic = 'force-static'

// Image generation
export default async function Image() {
  const avatarUrl = `${process.env.WEBSITE_URL}/avatar.png`;
  const res = await fetch(avatarUrl);
  const logoArrayBuffer = await res.arrayBuffer();
  const logoSrc = `data:image/png;base64,${Buffer.from(logoArrayBuffer).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          direction: "ltr",
          display: "flex",
          gap: "16px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          alt="reza nikravesh"
          width={220}
          height={220}
          src={logoSrc}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "900",
              fontSize: "42px",
              lineHeight: "48.5px",
            }}
          >
            Reza Nikravesh
          </span>
          <span style={{ color: "#9e9e9e", fontSize: "32px" }}>
            Web Developer
          </span>
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-coffee"
            aria-hidden="true"
            font-size="16px"
          >
            <path d="M10 2v2"></path>
            <path d="M14 2v2"></path>
            <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
            <path d="M6 2v2"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-code"
            aria-hidden="true"
          >
            <path d="m16 18 6-6-6-6"></path>
            <path d="m8 6-6 6 6 6"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-laptop"
            aria-hidden="true"
          >
            <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
            <path d="M20.054 15.987H3.946"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-rss"
            aria-hidden="true"
          >
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
