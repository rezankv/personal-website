import { useTranslations } from "next-intl";

// components
import { ShowMore, Timeline } from "@app/components";
import Link from "next/link";

export const ExperienceSection = () => {
  const t = useTranslations("RootLayout.pages.HomePage.ExperienceSection");

  return (
    <ShowMore>
      <div className="flex flex-col gap-4 px-2">
        <span className="font-medium">{t("title")}</span>
        <Timeline
          items={[
            {
              title: (
                <>
                  {t("list.4.title")}{" "}
                  {
                    <Link target="_blank" href={t("list.4.link")}>
                      <span className="text-muted-foreground-2 hover:text-foreground hover:underline">
                        (+)
                      </span>
                    </Link>
                  }
                </>
              ),
              description: t("list.4.description"),
              date: t("list.4.date"),
            },
            {
              title: (
                <>
                  {t("list.3.title")}{" "}
                  {
                    <Link target="_blank" href={t("list.3.link")}>
                      <span className="text-muted-foreground-2 hover:text-foreground hover:underline">
                        (+)
                      </span>
                    </Link>
                  }
                </>
              ),
              description: t("list.3.description"),
              date: t("list.3.date"),
            },
            {
              title: (
                <>
                  {t("list.2.title")}{" "}
                  {
                    <Link target="_blank" href={t("list.2.link")}>
                      <span className="text-muted-foreground-2 hover:text-foreground hover:underline">
                        (+)
                      </span>
                    </Link>
                  }
                </>
              ),
              description: t("list.2.description"),
              date: t("list.2.date"),
            },
            {
              title: (
                <>
                  {t("list.1.title")}{" "}
                  {
                    <Link target="_blank" href={t("list.1.link")}>
                      <span className="text-muted-foreground-2 hover:text-foreground hover:underline">
                        (+)
                      </span>
                    </Link>
                  }
                </>
              ),
              description: t("list.1.description"),
              date: t("list.1.date"),
            },
          ]}
        />
      </div>
    </ShowMore>
  );
};
