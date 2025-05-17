"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Pencil, Trash } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for testimonials
const initialTestimonials = [
  {
    id: "1",
    content:
      "I gave him two web projects, and he delivered with professionalism and skill. Solid understanding of MERN stack workflows and great communication throughout.",
    name: "Kashif",
    title: ".NET Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    content:
      "We worked together on a news channel and a real estate app. He took ownership of core modules and delivered top-notch work. Impressive collaboration.",
    name: "Saad",
    title: "Team Lead",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "3",
    content:
      "He built two websites under my supervision. His frontend skills and attention to detail made the final products feel premium and production-ready.",
    name: "Zain",
    title: "Senior Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/testimonials/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Testimonial
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Input
            placeholder="Search testimonials..."
            className="pl-8 bg-white dark:bg-zinc-950"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTestimonials.length === 0 ? (
          <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center h-40">
            <p className="text-zinc-500 dark:text-zinc-400">No testimonials found.</p>
          </div>
        ) : (
          filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-zinc-200 dark:border-zinc-800">
                <CardHeader className="relative pb-0">
                  <div className="absolute right-4 top-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/admin/testimonials/${testimonial.id}`}
                            className="flex items-center cursor-pointer"
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600 dark:text-red-500 dark:focus:text-red-500"
                          onClick={() => deleteTestimonial(testimonial.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="text-3xl text-blue-500 mb-4">&ldquo;</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-zinc-700 dark:text-zinc-300 italic line-clamp-4">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}
