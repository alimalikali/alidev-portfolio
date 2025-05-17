import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Testimonial from "@/models/Testimonial"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    const testimonial = await Testimonial.findById(id)

    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }

    return NextResponse.json({ testimonial }, { status: 200 })
  } catch (error) {
    console.error("Error fetching testimonial:", error)
    return NextResponse.json({ error: "Failed to fetch testimonial" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params
    const body = await req.json()

    const testimonial = await Testimonial.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })

    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }

    return NextResponse.json({ testimonial }, { status: 200 })
  } catch (error) {
    console.error("Error updating testimonial:", error)
    return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const { id } = params

    const testimonial = await Testimonial.findByIdAndDelete(id)

    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Testimonial deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting testimonial:", error)
    return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 })
  }
}
