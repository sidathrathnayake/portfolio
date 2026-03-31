"use client";

import { TECHNICAL_SKILLS } from "@/constants/constants";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const SkillCategory = ({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[] }) => (
  <div className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-gray-300 group-hover:text-gray-100 transition-colors" />
      <h3 className="text-lg font-bold text-gray-200 group-hover:text-gray-100 uppercase tracking-widest drop-shadow-lg transition-colors">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-gray-300 text-md font-medium hover:border-white/20 hover:text-gray-100 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function TechnicalSkills() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-6">
        <SkillCategory icon={Code2} title="Frontend" skills={TECHNICAL_SKILLS.FRONTEND} />
        <SkillCategory icon={Wrench} title="Backend" skills={TECHNICAL_SKILLS.BACKEND} />
        <SkillCategory icon={Database} title="Databases" skills={TECHNICAL_SKILLS.DATABASES} />
        <SkillCategory icon={Cloud} title="Cloud & DevOps" skills={TECHNICAL_SKILLS.CLOUD} />
        <SkillCategory icon={Wrench} title="Tools & Platforms" skills={TECHNICAL_SKILLS.TOOLS} />
      </div>
    </div>
  );
}
