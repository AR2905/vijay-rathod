"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion, useInView } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 text-center md:py-32 min-h-[calc(100vh-4rem)] flex items-center">
      <motion.div
        ref={ref}
        className="grid mx-auto grid-cols-1 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-6 order-2 md:order-1">
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{siteConfig.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{siteConfig.jobTitle}</p>
          </motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md">
            {siteConfig.description}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col md:flex  gap-8 md:gap-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="mr-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" onClick={scrollToAbout}>
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        {/* <motion.div variants={itemVariants} className="flex justify-center md:justify-end order-1 md:order-2">
          <div style={{ width: '14rem', height: '14rem' }} className="relative w-64-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile.jpg?height=320&width=320"
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}
