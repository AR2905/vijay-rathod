"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { User, MapPin, Calendar, Languages } from "lucide-react"

export function AboutSection() {
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

  return (
    <section id="about" className="py-16 scroll-mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Professional Summary</h3>
              <p className="text-muted-foreground">
                Experienced Maintenance & Plant Operator with over 20 years of hands-on expertise in industrial plant
                operations and maintenance. Skilled in operating and maintaining D.M. (Deionized Water) plants,
                R.O. (Reverse Osmosis) systems, and automated filling and sealing machinery. Proven ability to ensure
                smooth, efficient, and safe plant operations across various industrial settings.


              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm">Rathod Vijaybhai Chandubhai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">August 18, 1979</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Vadodara, Gujarat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Languages className="h-4 w-4 text-primary" />
                  <span className="text-sm">Gujarati, Hindi, English</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Plant Operation</Badge>
                <Badge>Maintenance</Badge>
                <Badge>D.M. Plant Operation</Badge>
                <Badge>R.O. Plant Operation</Badge>
                <Badge>Machine Operation</Badge>
                <Badge>Filling Machine</Badge>
                <Badge>Sealing Machine</Badge>
                <Badge>Pharmaceutical Industry</Badge>
                <Badge>Troubleshooting</Badge>
                <Badge>Equipment Maintenance</Badge>
                <Badge>Quality Control</Badge>
                <Badge>Safety Protocols</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
