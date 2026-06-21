import { ABOUT_ME, TECHNICAL_SKILLS } from "@/constants/constants";
import type { ExperienceItem } from "@/types/content";

const SITE_URL = "https://sidath-portfolio.vercel.app";

export function buildPersonSchema(
  experienceItems: ExperienceItem[],
  personDescription: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SITE_URL,
    name: "Sidath Rathnayake",
    url: SITE_URL,
    email: ABOUT_ME.EMAIL,
    telephone: ABOUT_ME.PHONE,
    jobTitle: experienceItems[0].position,
    image: `${SITE_URL}/assets/badge.png`,
    description: personDescription,
    sameAs: [ABOUT_ME.LINKEDIN_URL, ABOUT_ME.GITHUB_URL],
    location: {
      "@type": "Place",
      name: "Sri Lanka",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
    },
    worksFor: experienceItems.map((item) => ({
      "@type": "Organization",
      name: item.company,
      jobTitle: item.position,
      startDate: item.startDate,
      ...(item.endDate ? { endDate: item.endDate } : {}),
    })),
    knowsAbout: Object.values(TECHNICAL_SKILLS).flat(),
  };
}

export function buildOrganizationSchema(organizationDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SITE_URL,
    name: "Sidath Rathnayake Portfolio",
    url: SITE_URL,
    description: organizationDescription,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ABOUT_ME.PHONE,
      contactType: "Professional",
      email: ABOUT_ME.EMAIL,
    },
  };
}
