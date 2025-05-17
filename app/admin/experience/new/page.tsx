"use client"

import { ExperienceForm } from "@/components/admin/experience-form"
import { motion } from "framer-motion"

export default function NewExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Add New Experience</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Add a new work experience entry to your portfolio</p>
      </div>

      <ExperienceForm />
    </motion.div>
  )
}
