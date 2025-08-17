"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, Plane, ArrowUp, Heart, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/alexjohnson", color: "hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/alexjohnson", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/alexjohnson", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:alex@example.com", color: "hover:text-primary" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf" },
  ]

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Consulting", href: "#services" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold font-[var(--font-heading)] text-foreground">Alex Johnson</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Full-stack developer passionate about creating innovative web applications and AI-powered solutions.
                Let's build something amazing together.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">Available for Projects</Badge>
                <Badge variant="outline" className="border-border/50">
                  Remote Friendly
                </Badge>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-card/60 hover:bg-card/80 border border-border/50 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold font-[var(--font-heading)] text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold font-[var(--font-heading)] text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Alex Johnson. Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-border/50 hover:bg-card/80 bg-transparent"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
