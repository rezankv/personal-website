import { useTranslations } from "next-intl";

// locals
import { SocialLinks } from "./components";

export const AboutSection = () => {
  const t = useTranslations("RootLayout.pages.HomePage.AboutSection");

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{t("title")}</span>
      <p className="rtl:font-light">{t("description")}</p>
      <SocialLinks />
    </div>
  );
};
