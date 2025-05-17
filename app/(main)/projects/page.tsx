import AnimatedSection from "@/components/animated-section"
import PageTransition from "@/components/page-transition"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"



export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="py-20">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight ">All <span className="highlight">Projects</span></h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              A comprehensive collection of my work, showcasing various technologies and problem-solving approaches.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
