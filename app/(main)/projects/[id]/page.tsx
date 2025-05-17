import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import { projects } from "@/data/projects"

const getProjectData = (id: string) => {
  const project = projects.find(project => project.id === id)
  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist", 
      image: "/placeholder.svg?height=600&width=1000",
      challenge: "",
      solution: "",
      architecture: "",
      results: [],
      technologies: [],
      images: [],
      demoUrl: "#",
      codeUrl: "#"
    }
  }
  return {
      title: project?.title || "Project Not Found",
      description: project?.description || "This project does not exist",
      image: project?.images[0] || "/placeholder.svg?height=600&width=1000",
      challenge: project?.challenge || "",
      solution: project?.solution || "",
      architecture: project?.architecture || "",
      results: project?.results || [],
      technologies: project?.technologies || [],
      images: project?.images || [],
      demoUrl: project?.demoUrl || "#",
      codeUrl: project?.codeUrl || "#",
  }
}

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {

  const params = await props.params;
  const project = getProjectData(params.id)

  return (
    <PageTransition>
      <div className="py-10">
        <div className="container">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-blue-500 hover:text-blue-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all projects
            </Link>
          </div>

          <AnimatedSection>
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-6 tracking-tight">{project.title}</h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-xl max-w-3xl">{project.description}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl overflow-hidden mb-16 border border-zinc-200 dark:border-zinc-800">
              <Image
                src={project.image || "/placeholder.svg"}
                width={1000}
                height={600}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">The Challenge</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-lg">{project.challenge}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Solution & Approach</h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-lg">{project.solution}</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">Architecture</h2>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 overflow-x-auto">
                <pre className="text-zinc-700 dark:text-zinc-300 font-mono text-sm">{project.architecture}</pre>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">Key Results</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3">↗</span>
                    <span className="text-zinc-700 dark:text-zinc-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {project.images.map((image, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    width={400}
                    height={300}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">
                <span className="highlight">Technologies</span> Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="" variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="">
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.codeUrl} target="_blank">
                  <Code className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
