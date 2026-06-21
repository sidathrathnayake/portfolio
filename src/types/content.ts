export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  startDate: string;
  endDate?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  category: "Web" | "Mobile" | "Full-Stack";
};

export type EducationItem = {
  institution: string;
  degree?: string;
  qualification?: string;
  specialization?: string;
  stream?: string;
  duration: string;
  location: string;
  gpa?: string;
};
