"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  IconButton,
} from "@app/components";

// constants
import { routes } from "@app/constants";

// utils
import { cn } from "@app/utils";

// i18n
import { Link } from "@app/i18n/navigation";

export const NavigationMenu = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("RootLayout.Header.Navigation");

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <IconButton className="cursor-pointer">
            <MenuIcon />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {navItems.map(({ isActive, href, label }) => (
            <DropdownMenuItem asChild key={href}>
              <Link
                className={cn(
                  "text-muted-foreground hover:text-foreground w-full",
                  isActive && "text-foreground font-medium underline",
                )}
                locale={locale}
                href={href}
                key={href}
              >
                {label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  );
};
