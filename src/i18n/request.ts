import { getRequestConfig } from "next-intl/server";

export const DEFAULT_LOCALE = "en";

const NAMESPACES = [
  "common",
  "navbar",
  "footer",
  "hero",
  "about",
  "techStack",
  "experience",
  "projects",
  "education",
  "activities",
  "contact",
  "metadata",
] as const;

export default getRequestConfig(async () => {
  const locale = DEFAULT_LOCALE;

  const messages = Object.fromEntries(
    await Promise.all(
      NAMESPACES.map(async (namespace) => [
        namespace,
        (await import(`../locales/${locale}/${namespace}.json`)).default,
      ])
    )
  );

  return { locale, messages };
});
