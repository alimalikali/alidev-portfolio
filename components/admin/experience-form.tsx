"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

interface ExperienceFormProps {
  experience?: {
    id: string
    title: string
    company: string
    period: string
    description: string
    achievements: string[]
    technologies: string[]
  }
  isEditing?: boolean
}

export function ExperienceForm({ experience, isEditing = false }: ExperienceFormProps) {
  const [formData, setFormData] = useState({
    title: experience?.title || "",
    company: experience?.company || "",
    period: experience?.period || "",
    description: experience?.description || "",
    achievements: experience?.achievements || [],
    technologies: experience?.technologies || [],
  })
  const [newAchievement, setNewAchievement] = useState("")
  const [newTechnology, setNewTechnology] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setFormData((prev) => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement.trim()],
      }))
      setNewAchievement("")
    }
  }

  const removeAchievement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }))
  }

  const addTechnology = () => {
    if (newTechnology.trim() && !formData.technologies.includes(newTechnology.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()],
      }))
      setNewTechnology("")
    }
  }

  const removeTechnology = (techToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((tech) => tech !== techToRemove),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isEditing ? "Experience updated" : "Experience created",
        description: isEditing
          ? "Your experience entry has been updated successfully."
          : "Your experience entry has been created successfully.",
      })

      router.push("/admin/experience")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Senior Frontend Developer"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Inc."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="period">Time Period</Label>
            <Input
              id="period"
              name="period"
              value={formData.period}
              onChange={handleChange}
              placeholder="e.g. Jan 2020 - Dec 2022"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your role and responsibilities"
              rows={4}
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Key Achievements</Label>
            <div className="space-y-2">
              {formData.achievements.length > 0 ? (
                <ul className="space-y-2 mb-4">
                  {formData.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-900 p-2 rounded-md"
                    >
                      <span className="bg-blue-500 rounded-full h-1.5 w-1.5 mt-2 shrink-0"></span>
                      <span className="flex-1">{achievement}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 shrink-0 text-zinc-500 hover:text-red-500"
                        onClick={() => removeAchievement(index)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove achievement</span>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  No achievements added yet. Add some key accomplishments from this role.
                </p>
              )}
              <div className="flex gap-2">
                <Input
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder="Add an achievement"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addAchievement()
                    }
                  }}
                />
                <Button type="button" variant="outline" size="icon" onClick={addAchievement}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Add achievement</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Technologies Used</Label>
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 gap-1">
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(tech)}
                    className="ml-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 p-0.5"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {tech}</span>
                  </button>
                </Badge>
              ))}
              {formData.technologies.length === 0 && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  No technologies added yet. Add the key technologies you used in this role.
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                placeholder="Add a technology"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addTechnology()
                  }
                }}
              />
              <Button type="button" variant="outline" size="icon" onClick={addTechnology}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add technology</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/experience")}>
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          {isSubmitting ? <>Saving...</> : isEditing ? <>Update Experience</> : <>Create Experience</>}
        </Button>
      </div>
    </form>
  )
}
