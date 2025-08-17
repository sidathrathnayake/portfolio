"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Rocket, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 glow-cosmic" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-cosmic rounded-lg flex items-center justify-center glow-cosmic animate-pulse-glow">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-[var(--font-heading)] text-foreground">
              Space<span className="text-gradient">Dev</span>
            </span>
            <Star className="w-4 h-4 text-accent animate-pulse ml-1" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-foreground/80 hover:text-foreground transition-all duration-300 font-medium hover:glow-stellar relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-cosmic group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-foreground/80 hover:text-foreground hover:glow-stellar transition-all duration-300"
            >
              Resume
            </Button>
            <Button className="gradient-cosmic text-primary-foreground hover:opacity-90 glow-cosmic hover:glow-stellar transition-all duration-300 animate-float">
              <Rocket className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:glow-stellar transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 glow-cosmic"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-foreground/80 hover:text-foreground transition-all duration-300 font-medium py-2 hover:glow-stellar rounded px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start hover:glow-stellar transition-all duration-300">
                  Resume
                </Button>
                <Button className="w-full gradient-cosmic text-primary-foreground glow-cosmic hover:glow-stellar transition-all duration-300">
                  <Rocket className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
