import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown, Mail } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">About Me</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl text-lg">
              Get to know more about my background, skills, and approach to web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-8 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Developer portrait"
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/files/resume.pdf" download>
                      <FileDown className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">Professional Summary</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-lg">
                    I'm a full-stack developer with expertise in JavaScript, TypeScript, React, and Node.js. With over
                    10 years of experience in the industry, I've worked on a wide range of projects, from small business
                    websites to large-scale enterprise applications.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-lg">
                    My background includes working with diverse teams and clients across different industries, allowing
                    me to adapt quickly to new technologies and business requirements. I excel at translating complex
                    business needs into elegant technical solutions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">Education & Training</h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="font-bold">BSc Computer Science</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">University of Computer Science • 2016-2020</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="font-bold">AWS Certified Solutions Architect</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">Amazon Web Services • 2022</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="font-bold">Full-Stack Web Development Bootcamp</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">Coding Academy • 2018</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">My Approach</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-lg">
                    I believe in writing clean, maintainable code that solves real business problems. My development
                    philosophy centers around three core principles:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold text-xl">01.</span>
                      <div>
                        <h4 className="font-bold">User-Centered Design</h4>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          I start every project by understanding the end-user needs and business goals, ensuring the
                          solution addresses real problems.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold text-xl">02.</span>
                      <div>
                        <h4 className="font-bold">Performance First</h4>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          Fast-loading applications with smooth interactions are essential. I optimize for speed at
                          every level of the development process.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold text-xl">03.</span>
                      <div>
                        <h4 className="font-bold">Scalable Architecture</h4>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          I build systems that can grow with your business, utilizing modern development practices and
                          efficient code organization.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">Interests & Hobbies</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-lg">
                    Outside of coding, I enjoy hiking, photography, and experimenting with new cooking recipes. I'm also
                    an avid reader of science fiction and technology books.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-lg">
                    I regularly contribute to open-source projects and attend local tech meetups to stay connected with
                    the developer community and keep my skills sharp.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
