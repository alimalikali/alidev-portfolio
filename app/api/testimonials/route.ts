import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Testimonial from "@/models/Testimonial"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const testimonials = await Testimonial.find().sort({ createdAt: -1 })

    return NextResponse.json({ testimonials }, { status: 200 })
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    // Create new testimonial
    const testimonial = new Testimonial(body)
    await testimonial.save()

    return NextResponse.json({ testimonial }, { status: 201 })
  } catch (error) {
    console.error("Error creating testimonial:", error)
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 })
  }
}
