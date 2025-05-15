"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
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

  const education = [
    {
      degree: "ITI Fitter Apprenticeship",
      institution: "ITI, Tarsali, Vadodara",
      year: "1996-1997",
      description: "Completed 1 year ITI Fitter Apprenticeship program",
    },
    {
      degree: "S.S.C (10th Standard)",
      institution: "Gujarat Secondary Education Board",
      year: "March 1996",
      description: "Passed S.S.C Exam with 43.00%",
    },
  ]

  return (
    <section id="education" className="py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  </div>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {edu.year}
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
