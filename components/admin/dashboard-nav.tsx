"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ImageIcon, Users, Briefcase, Settings, LogOut } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  variant: "default" | "ghost"
}

export function DashboardNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Overview",
      href: "/admin",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      variant: pathname === "/admin" ? "default" : "ghost",
    },
    {
      title: "Projects",
      href: "/admin/projects",
      icon: <ImageIcon className="mr-2 h-4 w-4" />,
      variant: pathname.includes("/admin/projects") ? "default" : "ghost",
    },
    {
      title: "Testimonials",
      href: "/admin/testimonials",
      icon: <Users className="mr-2 h-4 w-4" />,
      variant: pathname.includes("/admin/testimonials") ? "default" : "ghost",
    },
    {
      title: "Experience",
      href: "/admin/experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
      variant: pathname.includes("/admin/experience") ? "default" : "ghost",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      variant: pathname.includes("/admin/settings") ? "default" : "ghost",
    },
  ]

  return (
    <ScrollArea className="h-full py-6 pl-3 pr-1">
      <div className="flex flex-col gap-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant={item.variant}
            size="sm"
            className={cn(
              "justify-start",
              item.variant === "default" &&
                "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700",
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <Button
          variant="ghost"
          size="sm"
          className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 w-full"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </ScrollArea>
  )
}
