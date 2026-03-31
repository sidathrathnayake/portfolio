"use client";

import { PERSONAL_SKILLS } from "@/constants/constants";
import { Star, Zap } from "lucide-react";

export default function PersonalSkills() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-8 uppercase tracking-widest flex items-center gap-3 drop-shadow-lg">
          <Star className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONAL_SKILLS.map((skill, idx) => (
            <div
              key={skill}
              className="flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group/skill hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 animate-card-slide"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <Zap className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 shrink-0 mt-0.5 transition-colors" />
              <span className="text-gray-300 group-hover/skill:text-gray-100 text-md transition-colors font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
