import { useTranslations } from "next-intl";

// components
import { ShowMore, Timeline } from "@app/components";

export const ExperienceSection = () => {
  const t = useTranslations("RootLayout.pages.HomePage.ExperienceSection");

  return (
    <ShowMore>
      <div className="flex flex-col gap-4 px-2">
        <span className="font-medium">{t("title")}</span>
        <Timeline
          items={[
            {
              title: t("list.3.title"),
              description: t("list.3.description"),
              date: t("list.3.date"),
            },
            {
              title: t("list.2.title"),
              description: t("list.2.description"),
              date: t("list.2.date"),
            },
            {
              title: t("list.1.title"),
              description: t("list.1.description"),
              date: t("list.1.date"),
            },
          ]}
        />
      </div>
    </ShowMore>
  );
};
