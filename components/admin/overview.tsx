"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    total: 167,
  },
  {
    name: "Feb",
    total: 245,
  },
  {
    name: "Mar",
    total: 321,
  },
  {
    name: "Apr",
    total: 289,
  },
  {
    name: "May",
    total: 403,
  },
  {
    name: "Jun",
    total: 356,
  },
  {
    name: "Jul",
    total: 420,
  },
  {
    name: "Aug",
    total: 470,
  },
  {
    name: "Sep",
    total: 512,
  },
  {
    name: "Oct",
    total: 573,
  },
  {
    name: "Nov",
    total: 0,
  },
  {
    name: "Dec",
    total: 0,
  },
]

export function Overview() {
  return (
    <Card className="border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle>Portfolio Traffic Overview</CardTitle>
        <CardDescription>Monthly portfolio views for the current year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-blue-600 dark:fill-blue-500"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
