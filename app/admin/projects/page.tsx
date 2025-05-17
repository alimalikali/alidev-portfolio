"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Pencil, Trash, Eye } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for projects
const initialProjects = [
  {
    id: "1",
    title: "Real Estate Dashboard",
    description:
      "A real-time analytics dashboard for real estate agents with complex data visualization and property management.",
    tags: ["Vue.js", "TypeScript", "Google Maps API", "Tailwind CSS"],
    status: "published",
    date: "2023-10-15",
  },
  {
    id: "2",
    title: "News Platform",
    description: "A high-performance, responsive and dynamic news platform with real-time data.",
    tags: ["Vue.js", "Tailwind CSS", "PHP", "MySQL"],
    status: "published",
    date: "2023-09-22",
  },
  {
    id: "3",
    title: "E-commerce Application",
    description: "A modern e-commerce platform with product management, user authentication, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    status: "draft",
    date: "2023-11-05",
  },
  {
    id: "4",
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates, notifications, and team workspaces.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "published",
    date: "2023-08-30",
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const deleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Input
            placeholder="Search projects..."
            className="pl-8 bg-white dark:bg-zinc-950"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-zinc-50 dark:bg-zinc-900">
              <TableHead className="w-[250px]">Project</TableHead>
              <TableHead className="hidden md:table-cell">Tags</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No projects found.
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1 md:hidden mt-1">
                      {project.tags.join(", ")}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge
                      className={
                        project.status === "published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{new Date(project.date).toLocaleDateString()}</TableCell>
                  <TableCell>
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
                          <Link href={`/projects/${project.id}`} className="flex items-center cursor-pointer">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/projects/${project.id}`} className="flex items-center cursor-pointer">
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600 dark:text-red-500 dark:focus:text-red-500"
                          onClick={() => deleteProject(project.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  )
}
