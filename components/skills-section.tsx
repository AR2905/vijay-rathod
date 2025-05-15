"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, useInView } from "framer-motion"
import { Wrench, Cpu, Cog, Gauge, Shield, Lightbulb } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const skillCategories = [
    {
      category: "Maintenance",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Equipment Maintenance", level: 95 },
        { name: "Troubleshooting", level: 90 },
        { name: "Preventive Maintenance", level: 85 },
        { name: "Repair & Overhaul", level: 80 },
      ],
    },
    {
      category: "Plant Operation",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: [
        { name: "D.M. Plant Operation", level: 95 },
        { name: "R.O. Plant Operation", level: 90 },
        { name: "Utility Management", level: 85 },
        { name: "Process Monitoring", level: 80 },
      ],
    },
    {
      category: "Machine Operation",
      icon: <Cog className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Filling Machine Operation", level: 90 },
        { name: "Sealing Machine Operation", level: 85 },
        { name: "Machine Setup & Calibration", level: 80 },
        { name: "Production Line Management", level: 75 },
      ],
    },
    {
      category: "Technical Skills",
      icon: <Gauge className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Mechanical Aptitude", level: 90 },
        { name: "Technical Documentation", level: 75 },
        { name: "Quality Control", level: 85 },
        { name: "Equipment Inspection", level: 80 },
      ],
    },
    {
      category: "Safety & Compliance",
      icon: <Shield className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Safety Protocols", level: 90 },
        { name: "GMP Compliance", level: 85 },
        { name: "Risk Assessment", level: 80 },
        { name: "Environmental Compliance", level: 75 },
      ],
    },
    {
      category: "Problem Solving",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Critical Thinking", level: 85 },
        { name: "Decision Making", level: 80 },
        { name: "Analytical Skills", level: 75 },
        { name: "Adaptability", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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
