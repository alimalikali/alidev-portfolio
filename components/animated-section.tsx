"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const { ref, isInView, scrollDirection } = useScrollAnimation(threshold)

  const variants = {
    hidden: {
      y: scrollDirection === "up" ? -50 : 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
