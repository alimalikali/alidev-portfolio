"use client"

import { useEffect, useState } from "react"
import { TestimonialForm } from "@/components/admin/testimonial-form"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

// Mock testimonial data
const mockTestimonial = {
  id: "1",
  content:
    "I gave him two web projects, and he delivered with professionalism and skill. Solid understanding of MERN stack workflows and great communication throughout.",
  name: "Kashif",
  title: ".NET Developer",
  avatar: "/placeholder.svg?height=60&width=60",
}

export default function EditTestimonialPage({ params }: { params: { id: string } }) {
  const [testimonial, setTestimonial] = useState<typeof mockTestimonial | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This would be replaced with actual API call
    const fetchTestimonial = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setTestimonial(mockTestimonial)
      } catch (error) {
        console.error("Error fetching testimonial:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonial()
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
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (!testimonial) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Testimonial Not Found</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            The testimonial you are looking for does not exist or has been removed.
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
        <h2 className="text-3xl font-bold tracking-tight">Edit Testimonial</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Update the details of this testimonial</p>
      </div>

      <TestimonialForm testimonial={testimonial} isEditing />
    </motion.div>
  )
}
