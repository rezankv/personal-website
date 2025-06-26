import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Fragment } from "react";

// constants
import { getSocialLinks } from "@app/constants";

// utils
import { capitalizeFirstLetter } from "@app/utils";

export const Footer = async () => {
  const locale = await getLocale();
  const t = await getTranslations();

  const links = getSocialLinks(t);

  return (
    <footer className="border-border mx-4 border-t pt-8">
      <div className="text-muted-foreground flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <span>
            ©{" "}
            {new Date()
              .getFullYear()
              .toLocaleString(locale, { useGrouping: false })}{" "}
            {t("RootLayout.Footer.title")}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((link, index) => (
            <Fragment key={link.platform}>
              <Link
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="hover:text-foreground transition-colors duration-200"
              >
                <span>{capitalizeFirstLetter(link.label)}</span>
              </Link>
              {index < links.length - 1 && <span>•</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
