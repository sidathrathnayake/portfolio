"use client";

import { PROJECTS_DATA } from "@/constants/constants";
import { Code2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-6">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={index}
            className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-gray-300 group-hover:text-gray-100 transition-colors hidden lg:block" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-200 group-hover:text-gray-100 uppercase tracking-widest transition-colors drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
                <p className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-gray-300 text-md font-medium uppercase tracking-widest hover:border-white/20 hover:text-gray-100 hover:bg-white/10 transition-all hover:-translate-y-1">
                  {project.category}
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-md sm:text-base group-hover:text-gray-100 transition-colors">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-gray-300 text-md font-medium group-hover:border-white/20 group-hover:text-gray-100 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
