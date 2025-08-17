"use client"

import { Button } from "@/components/ui/button"
import { Rocket, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />

      {/* Twinkling stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 5 === 0
                  ? "oklch(0.75 0.2 330)"
                  : // Cosmic Pink
                    i % 5 === 1
                    ? "oklch(0.6 0.25 280)"
                    : // Deep Cosmic Purple
                      i % 5 === 2
                      ? "oklch(0.7 0.2 50)"
                      : // Solar Orange
                        i % 5 === 3
                        ? "oklch(0.75 0.20 200)"
                        : // Stellar Cyan
                          "oklch(0.80 0.15 320)", // Nebula Pink
              boxShadow:
                i % 5 === 0
                  ? "0 0 20px oklch(0.75 0.2 330 / 0.4)"
                  : i % 5 === 1
                    ? "0 0 20px oklch(0.6 0.25 280 / 0.4)"
                    : i % 5 === 2
                      ? "0 0 20px oklch(0.7 0.2 50 / 0.4)"
                      : i % 5 === 3
                        ? "0 0 20px oklch(0.75 0.20 200 / 0.4)"
                        : "0 0 20px oklch(0.80 0.15 320 / 0.4)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 border rounded-full"
          style={{ borderColor: "oklch(0.75 0.2 330 / 0.2)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 border rounded-full"
          style={{ borderColor: "oklch(0.7 0.2 50 / 0.2)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 mb-8 glow-rainbow animate-rainbow-glow">
            <Rocket className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-card-foreground">Software Engineer Portfolio</span>
            <Star className="w-4 h-4 text-accent animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] mb-6 leading-tight"
        >
          Hi, I'm <span className="text-gradient-cosmic animate-cosmic-pulse">Sidath</span>
          <br />
          <span className="text-gradient-cosmic">Rathnayake</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Software Engineer specializing in full-stack development with React, Java, Spring Boot, and Flutter. Currently
          crafting innovative solutions at CreatIT Solutions with 3+ years of industry experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="gradient-cosmic-rainbow text-primary-foreground hover:opacity-90 transition-all duration-300 group px-8 py-6 text-lg font-semibold glow-rainbow hover:glow-pink animate-float"
          >
            Launch Projects
            <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 px-8 py-6 text-lg glow-purple hover:glow-orange transition-all duration-300"
          >
            <Zap className="mr-2 w-5 h-5" />
            View Skills
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Rocket,
              title: "Full-Stack",
              desc: "React, Java, Node.js",
              color: "text-cosmic-purple",
              glow: "glow-purple",
            },
            { icon: Star, title: "Mobile Dev", desc: "Flutter & Native", color: "text-cosmic-pink", glow: "glow-pink" },
            {
              icon: Zap,
              title: "Cloud & DevOps",
              desc: "AWS, Docker, Azure",
              color: "text-solar-orange",
              glow: "glow-orange",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className={`bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:bg-card/80 transition-all duration-300 ${feature.glow} hover:glow-rainbow animate-float`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3 animate-pulse`} />
              <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center glow-stellar"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-secondary rounded-full mt-2 glow-stellar"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
