"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
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

  const experiences = [
    {
      company: "Marsha Pharma Pvt Ltd",
      position: "Maintenance & D.M & R.O. Plant Operator",
      period: "Feb 2017 - Present",
      description: "Working as maintenance & D.M & R.O. Plant operator and auto liquid sealing & filling M/C operator.",
      location: "Manjusar road, Vadodara",
      current: true,
    },
    {
      company: "Ker Take Healthcare Pvt Ltd",
      position: "Maintenance & Utility Operator",
      period: "Jul 2016 - Feb 2017",
      description: "Worked as Maintenance & Utility operator.",
      location: "F/33 BIDC Estate, Gorwa, Vadodara",
      current: false,
    },
    {
      company: "Lexine TechnoChem Pvt Ltd",
      position: "Maintenance & Machine Operator",
      period: "Aug 2014 - Jul 2016",
      description: "Worked as Maintenance & auto four hade sealing and filling Machine operator.",
      location: "Vadodara",
      current: false,
    },
    {
      company: "P.D. Health Care Pvt Ltd",
      position: "Plant Operator & Maintenance",
      period: "Feb 2005 - Feb 2010",
      description: "Worked as Plant operator, Maintenance & Selling Machine operator.",
      location: "F/33 BIDC Estate, Gorwa, Vadodara",
      current: false,
    },
    {
      company: "Axar Medicate Pvt Ltd",
      position: "Maintenance & D.M. Plant Operator",
      period: "Mar 2000 - Feb 2003",
      description: "Worked as Maintenance & D.M. Plant Operator.",
      location: "F/33, BIDC Estate, Gorwa, Vadodara",
      current: false,
    },
    {
      company: "Sigil (India) Service Pvt Ltd",
      position: "Trainee Fitter",
      period: "1997 - 1999",
      description: "Worked as Trainee Fitter for 2 years.",
      location: "Vadodara",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <Card className={`${exp.current ? "border-primary" : ""}`}>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{exp.position}</h3>
                          {exp.current && <Badge className="bg-primary">Current</Badge>}
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute  left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-2 md:mt-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
