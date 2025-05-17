import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Project from "@/models/Project"
import mongoose from "mongoose"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    // Check if id is a valid ObjectId or a slug
    let project
    if (mongoose.Types.ObjectId.isValid(id)) {
      project = await Project.findById(id)
    } else {
      project = await Project.findOne({ slug: id })
    }

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({ project }, { status: 200 })
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params
    const body = await req.json()

    const project = await Project.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({ project }, { status: 200 })
  } catch (error) {
    console.error("Error updating project:", error)
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    const project = await Project.findByIdAndDelete(id)

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}
