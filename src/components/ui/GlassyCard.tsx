"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/cn"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function GlassyCard({
  children,
  className = "",
  delay = 0,
}: Props) {
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

    rotateX.set(((y - centerY) / centerY) * -3)
    rotateY.set(((x - centerX) / centerX) * 3)
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const tacticalLight = useMotionTemplate`
    radial-gradient(
      260px circle at ${mouseX}px ${mouseY}px,
      rgba(186, 168, 120, 0.08),
      rgba(120, 120, 120, 0.04) 28%,
      transparent 72%
    )
  `

  const edgeGlow = useMotionTemplate`
    radial-gradient(
      420px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.05),
      transparent 60%
    )
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group perspective-[1400px]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className={cn("relative w-full max-w-6xl", className)}
      >
        <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-black/40 blur-2xl opacity-70 transition duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] p-px">
          <div className="absolute inset-[-150%] animate-[spin_14s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_130deg,rgba(255,255,255,0.12)_165deg,rgba(184,153,92,0.18)_190deg,transparent_230deg,transparent_360deg)]" />
          <div className="absolute inset-px rounded-[27px] bg-[#0a0c0d]/95" />
        </div>

        <motion.div
          style={{ background: tacticalLight }}
          className="pointer-events-none absolute inset-px rounded-[27px] opacity-0 transition duration-300 group-hover:opacity-100"
        />

        <motion.div
          style={{ background: edgeGlow }}
          className="pointer-events-none absolute inset-px rounded-[27px] opacity-0 mix-blend-screen transition duration-300 group-hover:opacity-100"
        />

        <div className="pointer-events-none absolute inset-px overflow-hidden rounded-[27px]">
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute inset-x-0 top-[18%] h-px bg-white/3" />
          <div className="absolute inset-x-0 top-[62%] h-px bg-white/2.5" />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
          <span className="absolute left-[10%] top-[18%] h-0.5 w-0.5 rounded-full bg-[#b8995c]/30 animate-pulse" />
          <span className="absolute left-[24%] top-[72%] h-px w-px rounded-full bg-white/25 animate-pulse [animation-delay:1.1s]" />
          <span className="absolute left-[78%] top-[22%] h-0.5 w-0.5 rounded-full bg-white/20 animate-pulse [animation-delay:0.5s]" />
          <span className="absolute left-[86%] top-[68%] h-px w-px rounded-full bg-[#7f8c74]/30 animate-pulse [animation-delay:1.6s]" />
          <span className="absolute left-[58%] top-[12%] h-px w-px rounded-full bg-white/20 animate-pulse [animation-delay:0.9s]" />
        </div>

        <div
          className={cn(
            "relative z-10 rounded-[28px]",
            "border border-white/10",
            "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]",
            "backdrop-blur-md",
            "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
            "transition-all duration-300",
            "group-hover:border-[#b8995c]/25",
            "group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.7)]",
            "before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px]",
            "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,transparent_70%,rgba(184,153,92,0.04))]",
            "p-8 md:p-12",
            "flex flex-col lg:flex-row items-center gap-12"
          )}
        >
          <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#b8995c]/45" />
          <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-[#b8995c]/45" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#b8995c]/45" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#b8995c]/45" />

          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}