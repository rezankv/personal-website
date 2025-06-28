"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// i18n
import { Locale } from "@app/i18n/routing";

// constants
import { routes } from "@app/constants";

const NotfoundPage = () => {
  const { locale = "fa" } = useParams<{ locale: Locale }>();
  const router = useRouter();

  useEffect(() => {
    router.push(routes.NOTFOUND_ROUTE(locale));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <html>
      <body></body>
    </html>
  );
};

export default NotfoundPage;
