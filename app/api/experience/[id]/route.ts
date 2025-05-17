import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Experience from "@/models/Experience"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    const experience = await Experience.findById(id)

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json({ experience }, { status: 200 })
  } catch (error) {
    console.error("Error fetching experience:", error)
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params
    const body = await req.json()

    const experience = await Experience.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json({ experience }, { status: 200 })
  } catch (error) {
    console.error("Error updating experience:", error)
    return NextResponse.json({ error: "Failed to update experience" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    const experience = await Experience.findByIdAndDelete(id)

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Experience deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting experience:", error)
    return NextResponse.json({ error: "Failed to delete experience" }, { status: 500 })
  }
}
