import { compareDesc } from "date-fns";

// content
import { Document } from "contentlayer/core";

// i18n
import { Locale } from "@app/i18n/routing";

export const formatDate = (dateString: string, locale: Locale): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

export const formatReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const sortDocumentByDateDesc = <T extends Document>(
  document: T[],
): T[] => {
  return [...document].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
};
