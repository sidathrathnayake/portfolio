export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sidath-portfolio.vercel.app",
  name: "Sidath Rathnayake",
  url: "https://sidath-portfolio.vercel.app",
  email: "sidathirathnayake@gmail.com",
  telephone: "+94 76 056 6336",
  jobTitle: "Software Engineer",
  image: "https://sidath-portfolio.vercel.app/profile.jpg",
  description:
    "Full-stack software engineer with 3+ years experience building high-performance web and mobile applications",
  sameAs: [
    "https://www.linkedin.com/in/sidath-rathnayake-757a68216",
    "https://github.com/sidathrathnayake",
  ],
  location: {
    "@type": "Place",
    name: "Sri Lanka",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "CreatIT Solutions",
      jobTitle: "Software Engineer",
      startDate: "2024-06",
    },
    {
      "@type": "Organization",
      name: "hSenid Software Lanka",
      jobTitle: "Software Engineer",
      startDate: "2023-05",
      endDate: "2024-05",
    },
    {
      "@type": "Organization",
      name: "Virtusa Pvt. Ltd",
      jobTitle: "Software Engineer",
      startDate: "2021-06",
      endDate: "2023-04",
    },
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Express.js",
    "Java",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Three.js",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sidath-portfolio.vercel.app",
  name: "Sidath Rathnayake Portfolio",
  url: "https://sidath-portfolio.vercel.app",
  description:
    "Full-stack software engineer portfolio showcasing projects and experience",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-76-0566336",
    contactType: "Professional",
    email: "sidathirathnayake@gmail.com",
  },
};
