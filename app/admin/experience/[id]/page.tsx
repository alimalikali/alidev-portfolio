"use client"

import { useEffect, useState } from "react"
import { ExperienceForm } from "@/components/admin/experience-form"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

// Mock experience data
const mockExperience = {
  id: "1",
  title: "Junior Full Stack Developer",
  company: "Hybrid Solutions",
  period: "Jan 2023 - March 2025",
  description:
    "Leading the frontend architecture for enterprise-level solutions. Implemented frontend architecture. Mentored junior developers and established best practices for the engineering team.",
  achievements: [
    "Engineered a high-performance news website (The Current) using Vue.js and Tailwind CSS",
    "Refactored UI (Qwesty) property dealer website using Next.js improving performance by 35%",
    "Developed a responsive and user-friendly dashboard for the property dealer website using React and Tailwind CSS",
  ],
  technologies: ["Vue.js", "Next.js", "Tailwind CSS", "REST API"],
}

export default function EditExperiencePage({ params }: { params: { id: string } }) {
  const [experience, setExperience] = useState<typeof mockExperience | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This would be replaced with actual API call
    const fetchExperience = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setExperience(mockExperience)
      } catch (error) {
        console.error("Error fetching experience:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchExperience()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-10 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (!experience) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Experience Not Found</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            The experience entry you are looking for does not exist or has been removed.
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Edit Experience</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Update the details of this work experience</p>
      </div>

      <ExperienceForm experience={experience} isEditing />
    </motion.div>
  )
}
