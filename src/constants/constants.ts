import { getYearsOfExperience } from "@/helpers/date.helpers";

export const EXPERIENCE_START_DATE = "2021-12-27";

export const YEARS_OF_EXPERIENCE = getYearsOfExperience(EXPERIENCE_START_DATE);

export const ABOUT_ME = {
  FULL_NAME: "Sirimal Wattage Rathnayake Sidath Iroshana Rathnayake",
  BIRTH_DATE: "May 5, 1996",
  GENDER: "Male",
  COUNTRY: "Sri Lanka",
  NATIONALITY: "Sinhala",
  LANGUAGES: "English, Sinhala",
  ADDRESS: "F'67, Weligalle Road, Siyambalapitiya, Mawanella, Sri Lanka",
  LOCATION: "Mawanella, Sri Lanka",
  PHONE: "+94 76 056 6336",
  EMAIL: "sidathirathnayake@gmail.com",
  LINKEDIN_URL: "https://www.linkedin.com/in/sidath-rathnayake-757a68216",
  GITHUB_URL: "https://github.com/sidathrathnayake",
};

export const TECHNICAL_SKILLS = {
  FRONTEND: [
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "TypeScript",
    "Tailwind CSS",
  ],
  BACKEND: [
    "Node.js",
    "Express.js",
    "Java",
    "Spring Boot",
    "GraphQL",
    "RESTful APIs",
  ],
  DATABASES: ["MongoDB", "MySQL", "Firebase"],
  CLOUD: ["AWS", "Docker", "GitHub Actions", "DeployGate"],
  TOOLS: ["Git", "GitHub", "Bitbucket", "JIRA", "Azure", "VS Code"],
};

export const BRAND_NAME = "Sidath Rathnayake";

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#education" },
  { key: "activities", href: "#activities" },
  { key: "contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: "linkedin", href: ABOUT_ME.LINKEDIN_URL },
  { label: "GitHub", icon: "github", href: ABOUT_ME.GITHUB_URL },
];

type TechIconMeta = { iconKey: string; color: string; fg: string };

export const TECH_ICON_META: Record<string, TechIconMeta> = {
  React: { iconKey: "react", color: "#0b1120", fg: "#61DAFB" },
  "Next.js": { iconKey: "nextjs", color: "#000000", fg: "#FFFFFF" },
  "React Native": { iconKey: "reactNative", color: "#0b1120", fg: "#61DAFB" },
  Flutter: { iconKey: "flutter", color: "#0b1120", fg: "#54C5F8" },
  TypeScript: { iconKey: "typescript", color: "#3178C6", fg: "#FFFFFF" },
  "Tailwind CSS": { iconKey: "tailwind", color: "#0b1120", fg: "#38BDF8" },
  "Node.js": { iconKey: "nodejs", color: "#0b1120", fg: "#5FA04E" },
  "Express.js": { iconKey: "express", color: "#0b1120", fg: "#FFFFFF" },
  Java: { iconKey: "java", color: "#0b1120", fg: "#E76F00" },
  "Spring Boot": { iconKey: "spring", color: "#0b1120", fg: "#6DB33F" },
  GraphQL: { iconKey: "graphql", color: "#0b1120", fg: "#E535AB" },
  "RESTful APIs": { iconKey: "restApi", color: "#0b1120", fg: "#9CA3AF" },
  MongoDB: { iconKey: "mongodb", color: "#0b1120", fg: "#47A248" },
  MySQL: { iconKey: "mysql", color: "#0b1120", fg: "#4479A1" },
  Firebase: { iconKey: "firebase", color: "#0b1120", fg: "#FFCA28" },
  AWS: { iconKey: "aws", color: "#0b1120", fg: "#FF9900" },
  Docker: { iconKey: "docker", color: "#0b1120", fg: "#2496ED" },
  "GitHub Actions": { iconKey: "githubActions", color: "#0b1120", fg: "#2088FF" },
  DeployGate: { iconKey: "deploygate", color: "#0b1120", fg: "#14B8A6" },
  Git: { iconKey: "git", color: "#0b1120", fg: "#F05032" },
  GitHub: { iconKey: "github", color: "#0b1120", fg: "#FFFFFF" },
  Bitbucket: { iconKey: "bitbucket", color: "#0b1120", fg: "#2684FF" },
  JIRA: { iconKey: "jira", color: "#0b1120", fg: "#0052CC" },
  Azure: { iconKey: "azure", color: "#0b1120", fg: "#0078D4" },
  "VS Code": { iconKey: "vscode", color: "#0b1120", fg: "#007ACC" },
};

export const TECH_STACK = Object.values(TECHNICAL_SKILLS)
  .flat()
  .map((name) => ({ name, ...TECH_ICON_META[name] }));
