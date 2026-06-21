import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { YEARS_OF_EXPERIENCE } from "@/constants/constants";
import { buildOrganizationSchema, buildPersonSchema } from "@/lib/schema";
import type { ExperienceItem } from "@/types/content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const SITE_URL = "https://sidath-portfolio.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const siteTitle = t("siteTitle");
  const siteDescription = t("siteDescription", { years: YEARS_OF_EXPERIENCE });

  return {
    metadataBase: new URL(SITE_URL),
    title: siteTitle,
    description: siteDescription,
    keywords: [
      "Software Engineer",
      "Full-Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js",
      "Web Development",
      "Mobile Development",
      "Portfolio",
      "Sri Lanka",
      "Sidath Rathnayake",
    ],
    authors: [{ name: "Sidath Rathnayake", url: SITE_URL }],
    creator: "Sidath Rathnayake",
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: "Sidath Rathnayake - Portfolio",
      title: siteTitle,
      description: siteDescription,
      images: [
        {
          url: "/assets/badge.png",
          width: 1024,
          height: 1024,
          alt: "Sidath Rathnayake",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/assets/badge.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#07060c",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  const tExperience = await getTranslations("experience");
  const tMetadata = await getTranslations("metadata");
  const experienceItems = tExperience.raw("items") as ExperienceItem[];

  const personSchema = buildPersonSchema(
    experienceItems,
    tMetadata("personDescription", { years: YEARS_OF_EXPERIENCE })
  );
  const organizationSchema = buildOrganizationSchema(
    tMetadata("organizationDescription")
  );

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-dvh bg-[#07060c] text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
