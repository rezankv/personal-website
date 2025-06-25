import { defineRouting } from 'next-intl/routing';


export type Locale = "en" | "fa"
export type LocaleDir = "ltr" | "rtl"

export const localeLabel: Record<Locale, string> = {
    en: "English",
    fa: "فارسی",
} 
export const localeDir: Record<Locale, LocaleDir> = {
    en: "ltr",
    fa: "rtl",
}
const locales: Locale[] = ["en", "fa"]

export const routing = defineRouting({
    locales,
    defaultLocale: 'fa'
});