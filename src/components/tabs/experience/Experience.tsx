"use client";

import { EXPERIENCE_DATA } from "@/constants/constants";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((experience, index) => (
          <div
            key={index}
            className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-6 h-6 text-gray-300 group-hover:text-gray-100 shrink-0 mt-1 transition-colors" />
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-xl font-bold text-gray-200 group-hover:text-gray-100 uppercase tracking-widest transition-colors drop-shadow-lg">
                  {experience.position}
                </h3>
                <p className="text-gray-300 font-medium mt-1 group-hover:text-gray-100 transition-colors">{experience.company}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ml-10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <span className="text-gray-300 text-md group-hover:text-gray-100 transition-colors">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <span className="text-gray-300 text-md group-hover:text-gray-100 transition-colors">{experience.location}</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 ml-10 text-md sm:text-base group-hover:text-gray-100 transition-colors">
              {experience.description}
            </p>

            <div className="ml-10 space-y-2">
              {experience.responsibilities.map((responsibility, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-gray-300 shrink-0 mt-0.5 transition-colors" />
                  <span className="text-gray-300 text-md sm:text-base group-hover:text-gray-100 transition-colors">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
