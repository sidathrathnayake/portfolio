"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TECH_STACK } from "@/constants/constants";
import { TECH_ICONS } from "@/lib/techIcons";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  const t = useTranslations("techStack");

  return (
    <section id="skills" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-500/15 bg-gradient-to-b from-purple-950/40 via-purple-950/15 to-transparent p-8 sm:p-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          eyebrowColor="pink"
          title={t("heading")}
        />

        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {TECH_STACK.map((tech, index) => {
            const Icon = TECH_ICONS[tech.iconKey];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % 7) * 0.05 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-xl transition-colors hover:border-white/25"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: tech.color }}
                >
                  <Icon className="h-6 w-6" style={{ color: tech.fg }} />
                </div>
                <span className="text-center text-xs font-medium text-neutral-300">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
