"use client";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

// components
import { DropdownMenu, IconButton } from "@app/components";

// utils
import { cn } from "@app/utils";

// i18n
import { usePathname, useRouter } from "@app/i18n/navigation";
import { localeLabel, routing } from "@app/i18n/routing";

export const LocaleMenu = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = routing.locales.map((locale) => ({
    label: localeLabel[locale],
    isActive: locale === currentLocale,
    callback: () => router.replace(pathname, { locale }),
  }));

  return (
    <DropdownMenu
      trigger={
        <IconButton asChild className="cursor-pointer">
          <span>
            {" "}
            {/* do not remove this span element :)  */}
            <Languages />
          </span>
        </IconButton>
      }
      items={menuItems.map(({ callback, label, isActive }) => ({
        label: (
          <span
            onClick={callback}
            className={cn(
              "text-muted-foreground inline-block w-full hover:underline",
              isActive && "text-foreground font-medium underline",
            )}
            key={label}
          >
            {label}
          </span>
        ),
      }))}
      align="end"
      direction="bottom"
    />
  );
};
