"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// i18n
import { Locale } from "@app/i18n/routing";
import { routes } from "@app/constants";

const NotfoundPage = () => {
  const { locale = "fa" } = useParams<{ locale: Locale }>();
  const router = useRouter();

  useEffect(() => {
    router.push(routes.NOTFOUND_ROUTE(locale));
  }, []);
  return (
    <html>
      <body></body>
    </html>
  );
};

export default NotfoundPage;
