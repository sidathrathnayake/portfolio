"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowUp, Code2, Github, Linkedin } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/constants/constants";

const SOCIAL_ICONS: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
};

export default function Footer() {
  const t = useTranslations("navbar");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-[#07060c] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold text-white">
            <Code2 className="h-5 w-5 text-orange-400" />
            {BRAND_NAME}
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {t(`links.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-orange-400 hover:text-orange-400"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
            <motion.a
              href="#home"
              aria-label={tFooter("backToTop")}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-orange-400 hover:text-orange-400"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          {tFooter("copyright", { year: new Date().getFullYear(), brand: BRAND_NAME })}
        </p>
      </div>
    </footer>
  );
}
