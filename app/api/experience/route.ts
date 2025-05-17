import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Experience from "@/models/Experience"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const experiences = await Experience.find().sort({ startDate: -1 })

    return NextResponse.json({ experiences }, { status: 200 })
  } catch (error) {
    console.error("Error fetching experiences:", error)
    return NextResponse.json({ error: "Failed to fetch experiences" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    // Create new experience
    const experience = new Experience(body)
    await experience.save()

    return NextResponse.json({ experience }, { status: 201 })
  } catch (error) {
    console.error("Error creating experience:", error)
    return NextResponse.json({ error: "Failed to create experience" }, { status: 500 })
  }
}
