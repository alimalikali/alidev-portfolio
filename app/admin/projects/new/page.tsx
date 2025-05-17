"use client"

import { ProjectForm } from "@/components/admin/project-form"
import { motion } from "framer-motion"

export default function NewProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create New Project</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Add a new project to your portfolio</p>
      </div>

      <ProjectForm />
    </motion.div>
  )
}
