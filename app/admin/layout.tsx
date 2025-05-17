import type React from "react"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { DashboardNav } from "@/components/admin/dashboard-nav"
import { DashboardHeader } from "@/components/admin/dashboard-header"
import { AdminAuthProvider } from "@/components/admin/admin-auth-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Admin Dashboard | Portfolio",
  description: "Admin dashboard for portfolio management",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This would be replaced with actual auth check in a real app
  const isAuthenticated = true

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <AdminAuthProvider>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-zinc-200 dark:border-zinc-800 md:sticky md:block">
            <DashboardNav />
          </aside>
          <main className="flex w-full flex-col overflow-hidden pt-4 md:pt-8">{children}</main>
        </div>
        <Toaster />
      </div>
    </AdminAuthProvider>
  )
}
