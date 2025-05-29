"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { Badge } from "./ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 ">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="glass-panel p-2 sm:p-4 max-w-md mx-auto">
                <Image
                  src="/assets/svg/ali2.svg"
                  alt="Developer working"
                  width={600}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="absolute -top-6 -left-6 glass-panel p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400 backdrop-blur-sm border-0">
                    2 + Years Experience
                  </Badge>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-4xl font-bold mb-6 tracking-tight crisp-text">
              About <span className="gradient-text">Me</span>
            </h2>

              <p className="text-lg text-muted-foreground mb-4">
                I'm a senior web developer with over 3 years of experience building enterprise-level applications, 
                specializing in creating scalable and maintainable solutions that solve complex business problems.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-zinc-500 dark:text-zinc-400 uppercase text-sm tracking-wider mb-4 font-semibold">
                  LANGUAGES
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Python
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-zinc-500 dark:text-zinc-400 uppercase text-sm tracking-wider mb-4 font-semibold">
                  SPECIALTIES
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Performance Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    System Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    UI/UX Implementation
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/assets/pdf/ali_zulfiqar_cv.pdf" target="_blank">
                <Button  className="gap-2  rounded-md px-6">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" className="gap-2  rounded-md px-6">Contact Me</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
