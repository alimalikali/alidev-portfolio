"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ImageIcon } from "lucide-react"

interface TestimonialFormProps {
  testimonial?: {
    id: string
    content: string
    name: string
    title: string
    avatar: string
  }
  isEditing?: boolean
}

export function TestimonialForm({ testimonial, isEditing = false }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    content: testimonial?.content || "",
    name: testimonial?.name || "",
    title: testimonial?.title || "",
    avatar: testimonial?.avatar || "",
  })
  const [previewImage, setPreviewImage] = useState<string | null>(testimonial?.avatar || null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isEditing ? "Testimonial updated" : "Testimonial created",
        description: isEditing
          ? "The testimonial has been updated successfully."
          : "The testimonial has been created successfully.",
      })

      router.push("/admin/testimonials")
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title/Position</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title or position"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Testimonial</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter testimonial content"
              rows={6}
              required
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <Card className="border-dashed border-2 border-zinc-300 dark:border-zinc-700">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              {previewImage ? (
                <div className="mb-4 relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800">
                    <Image
                      src={previewImage || "/placeholder.svg"}
                      alt="Avatar preview"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute bottom-0 right-0"
                    onClick={() => setPreviewImage(null)}
                  >
                    Change
                  </Button>
                </div>
              ) : (
                <div className="mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-4">
                  <ImageIcon className="h-8 w-8 text-zinc-500 dark:text-zinc-400" />
                </div>
              )}
              <h3 className="mb-1 text-sm font-medium">Profile Picture</h3>
              <p className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">
                Upload a profile picture for the testimonial
              </p>
              <Input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="max-w-xs"
                onChange={handleImageChange}
              />
            </CardContent>
          </Card>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-medium mb-2">Preview</h3>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <div className="text-xl text-blue-500 mb-2">&ldquo;</div>
              <p className="text-zinc-700 dark:text-zinc-300 italic text-sm mb-4">
                {formData.content || "Testimonial content will appear here..."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                  {previewImage ? (
                    <Image
                      src={previewImage || "/placeholder.svg"}
                      alt="Avatar preview"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm font-medium">{formData.name || "Name"}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{formData.title || "Title"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/testimonials")}>
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          {isSubmitting ? <>Saving...</> : isEditing ? <>Update Testimonial</> : <>Create Testimonial</>}
        </Button>
      </div>
    </form>
  )
}
