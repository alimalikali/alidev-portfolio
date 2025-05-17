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
import { Plus, Search, MoreHorizontal, Pencil, Trash } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for experience entries
const initialExperiences = [
  {
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
  },
  {
    id: "2",
    title: "Front-End Engineer",
    company: "Cybil Tech",
    period: "Jul 2023 - Dec 2024",
    description: "Designed and developed responsive web applications for clients in various industries.",
    achievements: [],
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "3",
    title: "Senior Full Stack Developer",
    company: "Algo Tech",
    period: "2025 - 2025",
    description: "Led a team of developers building a fintech platform used by thousands of users.",
    achievements: [],
    technologies: ["Node.js", "Express", "MongoDB", "React"],
  },
]

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState(initialExperiences)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredExperiences = experiences.filter(
    (experience) =>
      experience.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter((experience) => experience.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/admin/experience/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Experience
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Input
            placeholder="Search experience entries..."
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
              <TableHead className="w-[250px]">Position</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="hidden md:table-cell">Period</TableHead>
              <TableHead className="hidden lg:table-cell">Technologies</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredExperiences.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No experience entries found.
                </TableCell>
              </TableRow>
            ) : (
              filteredExperiences.map((experience) => (
                <TableRow key={experience.id}>
                  <TableCell>
                    <div className="font-medium">{experience.title}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 md:hidden mt-1">
                      {experience.company} • {experience.period}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{experience.company}</TableCell>
                  <TableCell className="hidden md:table-cell">{experience.period}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                          {tech}
                        </Badge>
                      ))}
                      {experience.technologies.length > 2 && (
                        <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                          +{experience.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
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
                          <Link
                            href={`/admin/experience/${experience.id}`}
                            className="flex items-center cursor-pointer"
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600 dark:text-red-500 dark:focus:text-red-500"
                          onClick={() => deleteExperience(experience.id)}
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
