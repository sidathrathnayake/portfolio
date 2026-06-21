"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Linkedin, Mail, MapPin, User, Clock } from "lucide-react";
import { ABOUT_ME } from "@/constants/constants";
import SectionHeading from "./SectionHeading";

const skillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const skillItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");
  const personalSkills = t.raw("personalSkills") as string[];

  const infoRows = [
    { icon: User, label: t("info.name"), value: "Sidath Rathnayake", href: undefined },
    { icon: Mail, label: t("info.email"), value: ABOUT_ME.EMAIL, href: `mailto:${ABOUT_ME.EMAIL}` },
    { icon: MapPin, label: t("info.location"), value: ABOUT_ME.LOCATION, href: undefined },
    { icon: Linkedin, label: t("info.linkedin"), value: t("info.linkedinValue"), href: ABOUT_ME.LINKEDIN_URL },
  ];

  return (
    <section id="about" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-500/15 bg-gradient-to-b from-purple-950/40 via-purple-950/15 to-transparent p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              eyebrowColor="pink"
              title={t("heading")}
            />
            <p className="mt-6 leading-relaxed text-neutral-400">
              {t("description")}
            </p>

            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {personalSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={skillItem}
                  className="rounded-full border border-purple-500/20 bg-purple-950/30 px-3 py-1 text-xs font-medium text-purple-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href={ABOUT_ME.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20"
            >
              {t("moreAboutMe")}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            {infoRows.map((row) => {
              const content = (
                <>
                  <row.icon className="h-5 w-5 shrink-0 text-purple-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      {row.label}
                    </p>
                    <p className="text-sm font-medium text-white">{row.value}</p>
                  </div>
                </>
              );
              const rowClassName =
                "flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 backdrop-blur-xl transition-colors hover:border-white/25";

              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={rowClassName}
                >
                  {content}
                </a>
              ) : (
                <div key={row.label} className={rowClassName}>
                  {content}
                </div>
              );
            })}

            <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
              <Clock className="h-5 w-5 shrink-0 text-purple-400" />
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    {t("info.availability")}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {tCommon("availabilityStatus")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
