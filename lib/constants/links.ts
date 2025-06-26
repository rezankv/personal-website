export type SocialLink = {
  platform: "Github" | "Linkedin" | "Instagram" | "Mail" | "Telegram" | "X";
  label: string;
  href: string;
  target?: string;
  rel?: string;
};
export const getSocialLinks = (t?: (key: string) => string): SocialLink[] => [
  {
    platform: "Github",
    label: `${t && t("platforms.github")}`,
    href: "https://github.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Instagram",
    label: `${t && t("platforms.instagram")}`,
    href: "https://instagram.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Linkedin",
    label: `${t && t("platforms.linkedin")}`,
    href: "https://linkedin.com/in/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Telegram",
    label: `${t && t("platforms.telegram")}`,
    href: "https://t.me/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "X",
    label: `${t && t("platforms.x")}`,
    href: "https://x.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Mail",
    label: `${t && t("platforms.mail")}`,
    href: "mailto:reza.nikravesh80@gmail.com",
  },
];
