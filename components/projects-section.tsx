"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      title: "D.M. Plant Optimization",
      description:
        "Implemented process improvements that increased D.M. plant efficiency by 15% and reduced maintenance downtime.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Process Optimization", "Efficiency", "Maintenance"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Automated Filling Line Setup",
      description:
        "Set up and calibrated a new automated filling line, resulting in 20% increased production capacity.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Automation", "Production", "Calibration"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Preventive Maintenance Program",
      description:
        "Developed and implemented a comprehensive preventive maintenance program that reduced equipment failures by 30%.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Maintenance", "Planning", "Reliability"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
