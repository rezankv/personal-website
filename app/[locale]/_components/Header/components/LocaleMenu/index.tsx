"use client";
import { Languages } from "lucide-react";
import { Vazirmatn } from "next/font/google";
import { useLocale } from "next-intl";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  IconButton,
} from "@app/components";

// utils
import { cn } from "@app/utils";

// i18n
import { Link, usePathname } from "@app/i18n/navigation";
import { Locale, localeLabel, routing } from "@app/i18n/routing";

const rtlFont = Vazirmatn({ subsets: ["arabic"] });

const localeClassName: Partial<Record<Locale, string>> = {
  fa: `${rtlFont.className} font-[Vazirmatn]`,
};

export const LocaleMenu = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const menuItems = routing.locales.map((locale) => ({
    locale,
    className: localeClassName[locale],
    label: localeLabel[locale],
    isActive: locale === currentLocale,
    href: pathname,
  }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="order-2 cursor-pointer">
        <IconButton>
          <Languages />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map(({ className, locale, isActive, href, label }) => (
          <DropdownMenuItem asChild key={label}>
            <Link
              className={cn(
                "text-muted-foreground inline-block w-full cursor-pointer hover:underline",
                isActive && "text-foreground font-medium underline",
                className,
              )}
              href={href}
              locale={locale}
              key={label}
            >
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
