import { useTranslations } from "next-intl";
import Image from "next/image";

export const Avatar =  () => {
  const t = useTranslations("RootLayout.Header.Avatar");


  return (
    <div className="group flex items-center gap-3 sm:gap-4">
      <div className="relative">
        <Image
          width={48}
          height={48}
          src="/avatar.webp"
          alt="Reza Nikravesh"
          className="rounded-full transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
          unoptimized
        />
        {/* <OnlineIndicator /> */}
      </div>
      <div className="flex flex-col">
        <p className="font-medium">{t("title")}</p>
        <p className="text-muted-foreground font-light">{t("subtitle")}</p>
      </div>
    </div>
  );
};
