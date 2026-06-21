"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  BookOpen,
  Dumbbell,
  Film,
  Gamepad2,
  type LucideIcon,
  Music2,
  Plane,
  Sprout,
  Trophy,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const ICONS: LucideIcon[] = [
  Plane,
  BookOpen,
  Trophy,
  Gamepad2,
  Sprout,
  Dumbbell,
  Film,
  Music2,
];

export default function ExtraActivities() {
  const t = useTranslations("activities");
  const items = t.raw("items") as string[];

  return (
    <section id="activities" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          eyebrowColor="pink"
          title={t("heading")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((activity, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={activity}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {activity}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
