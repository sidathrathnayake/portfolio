"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ABOUT_ME, SOCIAL_LINKS } from "@/constants/constants";
import SectionHeading from "./SectionHeading";

const SOCIAL_ICONS: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
};

export default function Contact() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");

  const contactRows = [
    { icon: Mail, value: ABOUT_ME.EMAIL, href: `mailto:${ABOUT_ME.EMAIL}` },
    { icon: Phone, value: ABOUT_ME.PHONE, href: `tel:${ABOUT_ME.PHONE.replace(/\s+/g, "")}` },
    { icon: MapPin, value: ABOUT_ME.LOCATION, href: undefined },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/Sidath Rathnayake - CV.pdf";
    link.download = "Sidath Rathnayake - CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-500/15 bg-gradient-to-b from-orange-950/30 via-orange-950/10 to-transparent p-8 sm:p-12">
        <div className="bg-grid-dots pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-30" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              eyebrowColor="orange"
              title={t("heading")}
            />
            <p className="mt-6 max-w-md leading-relaxed text-neutral-400">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href={`mailto:${ABOUT_ME.EMAIL}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20"
              >
                {t("sayHello")}
              </motion.a>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {tCommon("downloadCv")}
                <Download className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {contactRows.map((row) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 backdrop-blur-xl transition-colors hover:border-white/25 mb-4">
                  <row.icon className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="text-sm font-medium text-white">
                    {row.value}
                  </span>
                </div>
              );
              return row.href ? (
                <a key={row.value} href={row.href}>
                  {content}
                </a>
              ) : (
                <div key={row.value}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-orange-400 hover:text-orange-400"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
