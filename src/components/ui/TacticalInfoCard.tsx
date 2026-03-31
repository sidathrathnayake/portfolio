"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/cn"

type InfoRow = {
  label: string
  value: string
  href?: string
  external?: boolean
}

type Props = {
  title: string
  activeTab: "personal" | "contact"
  onTabChange: (tab: "personal" | "contact") => void
  personalRows: InfoRow[]
  contactRows: InfoRow[]
  className?: string
  delay?: number
}

function TacticalRow({ label, value, href, external = false }: InfoRow) {
  const content = href ? (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block wrap-break-word transition-colors duration-200 group-hover:text-white"
    >
      {value}
    </Link>
  ) : (
    <span className="block wrap-break-word transition-colors duration-200 group-hover:text-white">
      {value}
    </span>
  )

  return (
    <div
      className={cn(
        "group relative border-b border-white/5 bg-[#121416]/70 transition-all duration-200",
        "hover:bg-[#1a1d20] hover:shadow-[inset_0_0_0_1px_rgba(166,176,120,0.15)]",
        "grid grid-cols-1 md:grid-cols-[1.15fr_1fr]"
      )}
    >
      <div className="px-4 py-3 md:px-5 md:py-4">
        <span className="block text-[14px] sm:text-[15px] md:text-base font-medium tracking-[0.04em] text-[#e2e2dc]">
          {label}
        </span>
      </div>

      <div
        className={cn(
          "relative px-4 py-3 md:px-5 md:py-4",
          "bg-[#0c0e10]/90 transition-all duration-200 group-hover:bg-[#181b14]",
          "flex items-center gap-3",
          "border-t border-white/5 md:border-t-0 md:border-l md:border-l-white/10",
          "justify-between"
        )}
      >
        <div className="min-w-0 flex-1 text-left md:text-right text-[14px] sm:text-[15px] md:text-base font-medium text-[#f2f3ee]">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function TacticalInfoCard({
  title,
  activeTab,
  onTabChange,
  personalRows,
  contactRows,
  className,
  delay = 0.3,
}: Props) {
  const rows = activeTab === "personal" ? personalRows : contactRows

  const cardRef = React.useRef<HTMLDivElement | null>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = width / 2
    const centerY = height / 2

    mouseX.set(x)
    mouseY.set(y)

    // very subtle tilt only
    rotateX.set(((y - centerY) / centerY) * -1.5)
    rotateY.set(((x - centerX) / centerX) * 1.5)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const spotlight = useMotionTemplate`
    radial-gradient(
      260px circle at ${mouseX}px ${mouseY}px,
      rgba(184, 153, 92, 0.08),
      rgba(255,255,255,0.025) 30%,
      transparent 72%
    )
  `

  return (
    <motion.section
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group w-full perspective-[1400px]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -4, scale: 1.006 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className={cn("relative w-full", className)}
      >
        {/* outer glow */}
        <div className="pointer-events-none absolute -inset-px rounded-[26px] bg-linear-to-r from-[#b8995c]/0 via-[#b8995c]/10 to-[#b8995c]/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

        {/* glass shell */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[26px]",
            "border border-white/10",
            "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
            "transition-all duration-300",
            "group-hover:border-[#b8995c]/20",
            "group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.68)]"
          )}
        >
          {/* top sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,transparent_70%,rgba(184,153,92,0.04))]" />

          {/* mouse-follow light */}
          <motion.div
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition duration-300 group-hover:opacity-100"
          />

          {/* subtle ambient light */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,153,92,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_24%)]" />

          {/* HUD corners */}
          <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#b8995c]/40" />
          <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-[#b8995c]/40" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#b8995c]/40" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#b8995c]/40" />

          <div className="relative z-10 border-b border-white/10 px-4 py-5 sm:px-5 md:px-7">
            <div className="flex flex-col gap-4">
              {title &&
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-[0.04em] text-[#f2f3ee]">
                    {title}
                  </h3>
                  <div className="mt-2 h-0.75 w-24 md:w-28 bg-[#799d38]" />
                </div>
              }

              <div className="mt-2 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  onClick={() => onTabChange("personal")}
                  className={cn(
                    "px-4 py-2.5 text-sm md:text-base font-medium tracking-[0.04em] border transition-all duration-200",
                    activeTab === "personal"
                      ? "border-[#799d38] bg-[#5c8120] text-white shadow-[inset_0_0_0_1px_rgba(166,205,95,0.18)]"
                      : "border-white/10 bg-[#101214]/80 text-white/75 hover:border-[#799d38]/40 hover:bg-[#171a14] hover:text-white"
                  )}
                >
                  Personal Info
                </button>

                <button
                  type="button"
                  onClick={() => onTabChange("contact")}
                  className={cn(
                    "px-4 py-2.5 text-sm md:text-base font-medium tracking-[0.04em] border transition-all duration-200",
                    activeTab === "contact"
                      ? "border-[#799d38] bg-[#5c8120] text-white shadow-[inset_0_0_0_1px_rgba(166,205,95,0.18)]"
                      : "border-white/10 bg-[#101214]/80 text-white/75 hover:border-[#799d38]/40 hover:bg-[#171a14] hover:text-white"
                  )}
                >
                  Contact Info
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-3 sm:p-4 md:p-6">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0b0d0f]/70 backdrop-blur-md">
              {rows.map((row) => (
                <TacticalRow
                  key={row.label}
                  label={row.label}
                  value={row.value}
                  href={row.href}
                  external={row.external}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}