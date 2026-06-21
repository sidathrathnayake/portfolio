"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import type { ExperienceItem } from "@/types/content";
import SectionHeading from "./SectionHeading";

const AVATAR_COLORS = [
  "from-orange-500 to-pink-600",
  "from-purple-500 to-pink-600",
  "from-blue-500 to-cyan-500",
];

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/Sidath Rathnayake - CV.pdf";
    link.download = "Sidath Rathnayake - CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-500/15 bg-gradient-to-b from-orange-950/30 via-orange-950/10 to-transparent p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              eyebrowColor="orange"
              title={t("heading")}
            />
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-950/30 px-6 py-3 text-sm font-semibold text-orange-200 transition-colors hover:bg-orange-950/50"
            >
              {t("viewResume")}
              <Download className="h-4 w-4" />
            </motion.button>
          </div>

          <ol className="relative space-y-10 border-l border-orange-500/20 pl-8">
            {items.map((exp, index) => (
              <motion.li
                key={exp.company}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-2 border-orange-400 bg-[#07060c]" />

                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[index % AVATAR_COLORS.length]} text-sm font-bold text-white`}
                      >
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{exp.position}</h3>
                        <p className="text-sm text-neutral-400">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-neutral-500">{exp.duration}</span>
                  </div>

                  <p className="mt-4 leading-relaxed text-neutral-400">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-orange-500/20 bg-orange-950/30 px-3 py-1 text-xs font-medium text-orange-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
