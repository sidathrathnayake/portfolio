"use client";

import { EDUCATION_DATA } from "@/constants/constants";
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-6">
        {EDUCATION_DATA.map((education, index) => (
          <div
            key={index}
            className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="w-6 h-6 text-gray-300 group-hover:text-gray-100 shrink-0 mt-1 transition-colors" />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-200 group-hover:text-gray-100 uppercase tracking-widest transition-colors drop-shadow-lg">
                  {education.degree || education.qualification}
                </h3>
                <p className="text-gray-300 font-medium mt-1 group-hover:text-gray-100 transition-colors">{education.institution}</p>
                {education.specialization && (
                  <p className="text-gray-400 text-md mt-1 italic group-hover:text-gray-300 transition-colors">{education.specialization}</p>
                )}
                {education.stream && (
                  <p className="text-gray-400 text-md mt-1 italic group-hover:text-gray-300 transition-colors">{education.stream}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <span className="text-gray-300 text-md group-hover:text-gray-100 transition-colors">{education.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <span className="text-gray-300 text-md group-hover:text-gray-100 transition-colors">{education.location}</span>
              </div>
              {education.gpa && (
                <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
                  <Award className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  <span className="text-gray-300 text-md group-hover:text-gray-100 transition-colors">{education.gpa}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
