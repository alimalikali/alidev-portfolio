import PageTransition from "@/components/page-transition"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProjects from "@/components/featured-projects"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import { testimonials } from "@/data/testmonials"
import { experiences } from "@/data/experience"
import { projects } from "@/data/projects"
import { techStack } from "@/data/tech-stack"

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <FeaturedProjects featuredProjects={projects}/>
      <TechStack techStack={techStack}/>
      <Experience experiences={experiences}/>
      <Testimonials testimonials={testimonials} />
      <Contact />
    </PageTransition>
  )
}
