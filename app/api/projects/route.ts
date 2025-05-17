import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Project from "@/models/Project"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const featured = searchParams.get("featured")

    let query = {}
    if (featured === "true") {
      query = { featured: true }
    }

    const projects = await Project.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ projects }, { status: 200 })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    // Create new project
    const project = new Project(body)
    await project.save()

    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
