"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// constants
import { routes } from "@app/constants";

// utils
import { cn } from "@app/utils";

// i18n
import { Link } from "@app/i18n/navigation";

export const NavigationList = () => {
  const t = useTranslations("RootLayout.Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    {
      href: routes.PROJECTS_ROUTE,
      label: t("projects"),
      isActive: pathname.endsWith(routes.PROJECTS_ROUTE),
    },
    {
      href: routes.POSTS_ROUTE,
      label: t("blog"),
      isActive: pathname.endsWith(routes.POSTS_ROUTE),
    },
  ];
  return (
    <ul className="hidden items-center gap-3 sm:gap-4 md:flex">
      {navItems.map((navItem) => (
        <li key={navItem.href}>
          <Link
            locale={locale}
            href={navItem.href}
            className={cn(
              "hover:text-foreground text-sm transition-colors sm:text-base",
              navItem.isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground",
            )}
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
