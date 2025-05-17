"use client"

import { useEffect, useState } from "react"
import { ProjectForm } from "@/components/admin/project-form"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

// Mock project data
const mockProject = {
  id: "1",
  title: "Real Estate Dashboard",
  description:
    "A real-time analytics dashboard for real estate agents with complex data visualization and property management.",
  tags: ["Vue.js", "TypeScript", "Google Maps API", "Tailwind CSS"],
  status: "published",
  image: "/placeholder.svg?height=300&width=500",
  demoUrl: "https://example.com",
  codeUrl: "https://github.com/username/repo",
  date: "2023-10-15",
}

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<typeof mockProject | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This would be replaced with actual API call
    const fetchProject = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProject(mockProject)
      } catch (error) {
        console.error("Error fetching project:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProject()
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
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            The project you are looking for does not exist or has been removed.
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
        <h2 className="text-3xl font-bold tracking-tight">Edit Project</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Update the details of your project</p>
      </div>

      <ProjectForm project={project} isEditing />
    </motion.div>
  )
}
