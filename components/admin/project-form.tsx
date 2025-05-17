"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Plus, ImageIcon, LinkIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ProjectFormProps {
  project?: {
    id: string
    title: string
    description: string
    tags: string[]
    status: string
    image: string
    demoUrl: string
    codeUrl: string
    date: string
  }
  isEditing?: boolean
}

export function ProjectForm({ project, isEditing = false }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    tags: project?.tags || [],
    status: project?.status || "draft",
    image: project?.image || "",
    demoUrl: project?.demoUrl || "",
    codeUrl: project?.codeUrl || "",
  })
  const [newTag, setNewTag] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, newTag.trim()] }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isEditing ? "Project updated" : "Project created",
        description: isEditing
          ? "Your project has been updated successfully."
          : "Your project has been created successfully.",
      })

      router.push("/admin/projects")
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
        <div className="space-y-4 md:col-span-1">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter project description"
              rows={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 gap-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 p-0.5"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {tag} tag</span>
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addTag()
                  }
                }}
              />
              <Button type="button" variant="outline" size="icon" onClick={addTag}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add tag</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <Card className="border-dashed border-2 border-zinc-300 dark:border-zinc-700">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-2">
                <ImageIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </div>
              <h3 className="mb-1 text-sm font-medium">Project Image</h3>
              <p className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">Upload a cover image for your project</p>
              <Input id="image" name="image" type="file" accept="image/*" className="max-w-xs" />
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Label htmlFor="demoUrl">Demo URL</Label>
            <div className="flex">
              <div className="flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
                <LinkIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </div>
              <Input
                id="demoUrl"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="codeUrl">Code Repository URL</Label>
            <div className="flex">
              <div className="flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
                <LinkIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </div>
              <Input
                id="codeUrl"
                name="codeUrl"
                value={formData.codeUrl}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                className="rounded-l-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/projects")}>
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          {isSubmitting ? <>Saving...</> : isEditing ? <>Update Project</> : <>Create Project</>}
        </Button>
      </div>
    </form>
  )
}
