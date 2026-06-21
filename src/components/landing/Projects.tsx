"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Code2 } from "lucide-react";
import type { ProjectItem } from "@/types/content";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/cn";

const CATEGORY_GRADIENTS: Record<string, string> = {
  Web: "from-blue-500/30 via-cyan-500/20 to-transparent",
  Mobile: "from-emerald-500/30 via-green-500/20 to-transparent",
  "Full-Stack": "from-purple-500/30 via-pink-500/20 to-transparent",
};

const FEATURED_COUNT = 3;

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as ProjectItem[];
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? items : items.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-500/15 bg-gradient-to-b from-purple-950/40 via-purple-950/15 to-transparent p-8 sm:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            eyebrowColor="pink"
            title={t("heading")}
          />
          <motion.button
            onClick={() => setExpanded((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20"
          >
            {expanded ? t("showLess") : t("viewAll")}
            <ArrowRight className={cn("h-4 w-4 transition-transform", expanded && "rotate-90")} />
          </motion.button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl"
              >
                <div
                  className={cn(
                    "flex h-40 items-center justify-center bg-gradient-to-br",
                    CATEGORY_GRADIENTS[project.category] ??
                      "from-neutral-700/30 to-transparent"
                  )}
                >
                  <Code2 className="h-10 w-10 text-white/70" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
