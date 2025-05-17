"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    type: "project",
    action: "added",
    title: "Real Estate Dashboard",
    timestamp: "2 hours ago",
    user: {
      name: "Ali",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 2,
    type: "testimonial",
    action: "updated",
    title: "Testimonial from Saad",
    timestamp: "5 hours ago",
    user: {
      name: "Ali",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 3,
    type: "experience",
    action: "deleted",
    title: "Internship at Tech Co",
    timestamp: "1 day ago",
    user: {
      name: "Ali",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 4,
    type: "project",
    action: "updated",
    title: "E-commerce Application",
    timestamp: "2 days ago",
    user: {
      name: "Ali",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 5,
    type: "settings",
    action: "updated",
    title: "Portfolio Settings",
    timestamp: "3 days ago",
    user: {
      name: "Ali",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
]

export function RecentActivity() {
  return (
    <Card className="border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions performed in the admin dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.image || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  <span className="text-zinc-500 dark:text-zinc-400">{activity.action}</span>{" "}
                  <span>{activity.title}</span>
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{activity.timestamp}</p>
              </div>
              <Badge
                variant="outline"
                className={`
                  ${activity.type === "project" ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400" : ""}
                  ${activity.type === "testimonial" ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/50 dark:text-green-400" : ""}
                  ${activity.type === "experience" ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900 dark:bg-purple-950/50 dark:text-purple-400" : ""}
                  ${activity.type === "settings" ? "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-400" : ""}
                `}
              >
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
