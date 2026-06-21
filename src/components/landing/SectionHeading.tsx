"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  eyebrowColor?: "pink" | "orange";
  title: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  eyebrowColor = "pink",
  title,
  align = "left",
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(align === "center" && "text-center", className)}
    >
      <span
        className={cn(
          "block text-xs font-semibold uppercase tracking-[0.25em] mb-3",
          eyebrowColor === "pink" ? "text-pink-400" : "text-orange-400"
        )}
      >
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      <span
        className={cn(
          "mt-4 inline-block h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
