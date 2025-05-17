"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Bell, User } from "lucide-react"
import { DashboardNav } from "@/components/admin/dashboard-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  const pathname = usePathname()

  // Get the current page title based on the pathname
  const getPageTitle = () => {
    if (pathname === "/admin") return "Dashboard"
    if (pathname.includes("/admin/projects")) return "Projects"
    if (pathname.includes("/admin/testimonials")) return "Testimonials"
    if (pathname.includes("/admin/experience")) return "Experience"
    if (pathname.includes("/admin/settings")) return "Settings"
    return "Admin"
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="container flex h-14 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px] pr-0">
              <DashboardNav />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            ali<span className="text-blue-500">.</span>
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400 text-sm hidden md:inline-block">/ Admin</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <h1 className="text-sm font-medium mr-4 hidden md:block">{getPageTitle()}</h1>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
          </Button>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
