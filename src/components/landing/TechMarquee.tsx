"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants/constants";
import { TECH_ICONS } from "@/lib/techIcons";

const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#07060c] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#07060c] to-transparent sm:w-40" />

      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {MARQUEE_ITEMS.map((tech, index) => {
          const Icon = TECH_ICONS[tech.iconKey];
          return (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.08 }}
              className="flex shrink-0 items-center gap-2.5 px-2"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: tech.color }}
              >
                <Icon className="h-4 w-4" style={{ color: tech.fg }} />
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-neutral-400">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
