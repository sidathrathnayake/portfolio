"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sidathirathnayake@gmail.com",
      href: "mailto:sidathirathnayake@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 76 056 6336",
      href: "tel:+94760566336",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mawanella, Sri Lanka",
      href: "https://maps.google.com/?q=Mawanella,Sri+Lanka",
    },
  ]

  const availability = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Available for urgent projects" },
  ]

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
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? With 3+ years of experience in full-stack development and a passion for
            innovative solutions, I'm here to help you build exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6 flex items-center gap-2">
                    <Send className="w-6 h-6 text-secondary" />
                    Send Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-input border-border/50 focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-input border-border/50 focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-input border-border/50 focus:border-primary"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-input border-border/50 focus:border-primary resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-primary-foreground hover:opacity-90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group"
                      >
                        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">{info.label}</div>
                          <div className="text-muted-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-secondary" />
                    Availability
                  </h3>

                  <div className="space-y-3">
                    {availability.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0"
                      >
                        <span className="font-medium text-card-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="font-medium text-secondary">Quick Response</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to messages within 12 hours during business days. Available for both local and
                      international projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
