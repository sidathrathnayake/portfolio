"use client";

import { EXTRA_ACTIVITIES_DATA } from "@/constants/constants";
import { Zap, Trophy } from "lucide-react";

export default function ExtraActivities() {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-8 uppercase tracking-widest flex items-center gap-3 drop-shadow-lg">
          <Trophy className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Extra Activities
        </h2>
        <div className="space-y-4">
          {EXTRA_ACTIVITIES_DATA.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group/card hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 animate-card-slide"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Zap className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 shrink-0 mt-0.5 transition-colors" />
              <span className="text-gray-300 text-md group-hover/card:text-gray-100 transition-colors font-medium">{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
