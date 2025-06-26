"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// i18n
import { Locale } from "@app/i18n/routing";

// constants
import { routes } from "@app/constants";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith("NEXT_LOCALE=")) || "";
    const locale = (cookie.split("=")[1] as Locale) || "fa";

    router.replace(`/${locale}/${routes.HOME_ROUTE}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html>
      <body></body>
    </html>
  );
};

export default RootPage;
