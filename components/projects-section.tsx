"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Star, Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "AI Travel Planner",
      description:
        "A comprehensive travel planning platform that uses AI to create personalized itineraries based on user preferences, budget, and interests.",
      image: "/ai-travel-planner-preview.png",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Live",
      stats: { stars: 124, users: "2.5K", date: "2024" },
      links: {
        live: "https://ai-travel-planner.demo",
        github: "https://github.com/alexjohnson/ai-travel-planner",
      },
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
      image: "/ecommerce-dashboard-preview.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Material-UI"],
      category: "Dashboard",
      status: "Live",
      stats: { stars: 89, users: "1.2K", date: "2024" },
      links: {
        live: "https://ecommerce-dashboard.demo",
        github: "https://github.com/alexjohnson/ecommerce-dashboard",
      },
      featured: false,
    },
    {
      id: 3,
      title: "Social Media Analytics",
      description:
        "Comprehensive social media analytics platform that tracks engagement, growth metrics, and provides actionable insights.",
      image: "/social-analytics-preview.png",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "D3.js"],
      category: "Analytics",
      status: "Live",
      stats: { stars: 156, users: "3.1K", date: "2023" },
      links: {
        live: "https://social-analytics.demo",
        github: "https://github.com/alexjohnson/social-analytics",
      },
      featured: true,
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      image: "/task-management-preview.png",
      technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
      category: "Mobile",
      status: "In Development",
      stats: { stars: 67, users: "800", date: "2024" },
      links: {
        github: "https://github.com/alexjohnson/task-management",
      },
      featured: false,
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis.",
      image: "/crypto-tracker-preview.png",
      technologies: ["Svelte", "Node.js", "WebSocket", "MongoDB", "TradingView"],
      category: "Finance",
      status: "Live",
      stats: { stars: 203, users: "4.7K", date: "2023" },
      links: {
        live: "https://crypto-tracker.demo",
        github: "https://github.com/alexjohnson/crypto-tracker",
      },
      featured: true,
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "Complete LMS platform for online education with course creation, student progress tracking, and interactive assessments.",
      image: "/lms-preview.png",
      technologies: ["Next.js", "Prisma", "Stripe", "AWS S3", "Mux"],
      category: "Education",
      status: "Live",
      stats: { stars: 178, users: "1.8K", date: "2024" },
      links: {
        live: "https://lms-platform.demo",
        github: "https://github.com/alexjohnson/lms-platform",
      },
      featured: false,
    },
  ]

  const categories = ["All", "Full-Stack", "Dashboard", "Analytics", "Mobile", "Finance", "Education"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
    <section id="projects" className="py-20 px-4">
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
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">
            Projects & <span className="text-gradient">Innovations</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A showcase of my recent work, featuring full-stack applications, mobile apps, and innovative solutions that
            solve real-world problems.
          </motion.p>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gradient-primary text-primary-foreground"
                    : "border-border/50 hover:bg-card/80"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "gradient-primary text-primary-foreground" : ""}
                    >
                      {project.status === "Live" && <Play className="w-3 h-3 mr-1" />}
                      {project.status}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold font-[var(--font-heading)] group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="border-border/50 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-border/50">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.stats.users}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.stats.date}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <Button size="sm" className="gradient-primary text-primary-foreground hover:opacity-90 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/50 hover:bg-card/80 flex-1 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-card/60 backdrop-blur-sm border-border/50 p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-4">Interested in Working Together?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities and exciting projects. Let's create something amazing
                  together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="gradient-primary text-primary-foreground hover:opacity-90">Start a Project</Button>
                  <Button variant="outline" className="border-border/50 hover:bg-card/80 bg-transparent">
                    View All Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
