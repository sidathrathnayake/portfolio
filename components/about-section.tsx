"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Globe, Smartphone, Cloud, Zap, Users, Award, Calendar, Download } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const skills = [
    { name: "JavaScript & React", level: 95, icon: Code2, category: "Frontend" },
    { name: "Java & Spring Boot", level: 90, icon: Code2, category: "Backend" },
    { name: "Node.js & Next.js", level: 88, icon: Database, category: "Full-Stack" },
    { name: "Flutter & Mobile Dev", level: 85, icon: Smartphone, category: "Mobile" },
    { name: "AWS & Docker", level: 82, icon: Cloud, category: "DevOps" },
    { name: "MongoDB & MySQL", level: 80, icon: Database, category: "Database" },
    { name: "PHP & GraphQL", level: 75, icon: Code2, category: "Backend" },
    { name: "Azure & Git", level: 78, icon: Cloud, category: "DevOps" },
  ]

  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "15+", icon: Award },
    { label: "Companies Worked", value: "3", icon: Users },
    { label: "Technologies", value: "15+", icon: Zap },
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
    <section id="about" className="py-20 px-4 bg-card/30">
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
              <Globe className="w-4 h-4 mr-2" />
              About Me
            </Badge>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">
            Full-Stack Developer & <span className="text-gradient">Mobile Engineer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A self-driven, hardworking software engineer with a passion for efficiency and problem-solving. With four
            years of academic training and more than three years of industrial experience, I thrive on challenges and am
            motivated to make meaningful contributions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <img
                        src="/professional-developer-avatar.png"
                        alt="Developer Avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-[var(--font-heading)]">Sidath Rathnayake</h3>
                      <p className="text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>

                  <p className="text-card-foreground leading-relaxed mb-6">
                    Currently working at CreatIT Solutions, I specialize in developing solutions using ReactJS, NextJS,
                    and NodeJS. Previously contributed to healthcare applications, mobile development with Flutter, and
                    backend systems with Java and Spring Boot at hSenid Software Lanka and Virtusa.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Java",
                      "Spring Boot",
                      "Flutter",
                      "Node.js",
                      "MongoDB",
                      "AWS",
                      "Docker",
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button className="gradient-primary text-primary-foreground hover:opacity-90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:bg-card/80 transition-colors"
                  >
                    <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-[var(--font-heading)] text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">Technical Skills</h3>
            </motion.div>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-card-foreground">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs border-border/50">
                      {skill.category}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>

                <div className="w-full bg-muted/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="gradient-primary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-8">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold font-[var(--font-heading)] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-secondary" />
                    Currently Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Microservices", "Kubernetes", "TypeScript"].map((tech) => (
                      <Badge key={tech} className="gradient-primary text-primary-foreground">
                        {tech}
                      </Badge>
                    ))}
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
