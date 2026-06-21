"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Briefcase, Building2, Cpu, Mail } from "lucide-react";
import { TECH_STACK, YEARS_OF_EXPERIENCE } from "@/constants/constants";
import type { ExperienceItem } from "@/types/content";
import DotPattern from "./DotPattern";
import StatCounter from "./StatCounter";

export default function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");
  const tExperience = useTranslations("experience");
  const experienceItems = tExperience.raw("items") as ExperienceItem[];

  const stats = [
    {
      icon: Briefcase,
      value: YEARS_OF_EXPERIENCE,
      label: t("stats.yearsExperience"),
    },
    {
      icon: Cpu,
      value: TECH_STACK.length,
      label: t("stats.technologies"),
    },
    {
      icon: Building2,
      value: experienceItems.length,
      label: t("stats.companies"),
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07060c] pt-36 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-[-15%] h-[26rem] w-[26rem] rounded-full bg-purple-600/15 blur-3xl" />
      <DotPattern className="right-0 top-0 bottom-1/2 h-auto w-1/3" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-orange-400">
            {t("greeting")}{" "}
            <motion.span
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2 }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("headlineLine1")}
            <br />
            <span className="text-gradient-warm">{t("headlineLine2")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20"
            >
              {t("viewWork")}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("contactMe")}
              <Mail className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="mb-2 h-5 w-5 text-orange-400" />
                <p className="text-2xl font-bold text-white">
                  <StatCounter value={stat.value} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-xl"
        >
          <div className="relative">
            <Image
              src="/assets/heroImage.png"
              alt="Sidath Rathnayake"
              width={900}
              height={900}
              priority
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 650px"
              className="h-auto w-full object-contain [mask-image:radial-gradient(circle_at_center,black_45%,transparent_70%)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-white/15 bg-black/40 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-6 sm:translate-x-0"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-white">
              {tCommon("availabilityStatus")}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
