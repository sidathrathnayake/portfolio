"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import type { EducationItem } from "@/types/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as EducationItem[];

  return (
    <section id="education" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-500/15 bg-gradient-to-b from-orange-950/30 via-orange-950/10 to-transparent p-8 sm:p-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          eyebrowColor="orange"
          title={t("heading")}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl"
            >
              {edu.gpa && (
                <span className="absolute right-6 top-6 rounded-full border border-orange-500/30 bg-orange-950/40 px-3 py-1 text-xs font-medium text-orange-200">
                  {edu.gpa}
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-bold text-white">{edu.institution}</h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {edu.degree ?? edu.qualification}
                </p>
                <p className="text-sm text-neutral-500">
                  {edu.specialization ?? edu.stream}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
