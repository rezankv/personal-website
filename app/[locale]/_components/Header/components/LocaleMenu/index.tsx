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
import { usePathname, useRouter } from "@app/i18n/navigation";
import { Locale, localeLabel, routing } from "@app/i18n/routing";

const rtlFont = Vazirmatn({ subsets: ["arabic"] });

const localeClassName: Partial<Record<Locale, string>> = {
  fa: `${rtlFont.className} font-[Vazirmatn]`,
};

export const LocaleMenu = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = routing.locales.map((locale) => ({
    className: localeClassName[locale],
    label: localeLabel[locale],
    isActive: locale === currentLocale,
    callback: () => router.replace(pathname, { locale }),
  }));

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild className="order-2 cursor-pointer">
        <IconButton>
          <Languages />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map(({ className, isActive, callback, label }) => (
          <DropdownMenuItem asChild key={label}>
            <span
              onClick={callback}
              className={cn(
                "text-muted-foreground cursor-pointer inline-block w-full hover:underline",
                isActive && "text-foreground font-medium underline",
                className,
              )}
              key={label}
            >
              {label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
