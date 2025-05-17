"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Eye, ArrowRight } from "lucide-react"
import { Github, Linkedin, Twitter } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useEffect } from "react"
import { useState } from "react"

export default function Hero() {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-12 ">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
              Full-Stack Engineer
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight crisp-text">
              Building digital
              <br />
              <span className="gradient-text">experiences</span>
              <br />
              that matter
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-8 text-lg leading-relaxed">
              I design and develop scalable digital products — from backend logic to pixel-perfect UI — I don&apos;t
              just write code; I craft autonomous, world-class systems — solo.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/projects">
                <Button className="flex items-center gap-2 rounded-md px-6">
                  <Eye className="h-4 w-4" />
                  Projects
                </Button>
              </Link>
              <Button variant="outline" className="flex items-center gap-2 rounded-md px-6">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className={`relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>


            <div className="glass-panel p-2 sm:p-4 w-full aspect-square max-w-md mx-auto overflow-hidden">
              <Image
                src="/assets/images/passion.jpeg"
                width={600}
                height={600}
                alt="Digital displays showcasing projects"
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-panel p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div >
    </section >
  )
}
