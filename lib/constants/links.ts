export type SocialLink = {
  platform:
  | "Github"
  | "Linkedin"
  | "Instagram"
  | "Mail"
  | "Telegram"
  | "X"
  ,
  href: string
  target?: string
  rel?: string
}
export const socialLinks: SocialLink[] = [
  {
    platform: "Github",
    href: "https://github.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Instagram",
    href: "https://instagram.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Linkedin",
    href: "https://linkedin.com/in/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Telegram",
    href: "https://t.me/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "X",
    href: "https://x.com/rezankv",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    platform: "Mail",
    href: "mailto:reza.nikravesh80@gmail.com",
  },
];
