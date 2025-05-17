import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              ali<span className="text-blue-500">.</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-md">
              Building exceptional digital experiences through clean code, thoughtful design, and scalable architecture.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved. Ali Malik
          </div>

          <div className="flex space-x-6">
            <Link href="/terms" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm">
              Terms
            </Link>
            <Link href="/privacy" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/cookies" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
