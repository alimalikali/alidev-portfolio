import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import User from "@/models/User"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const { name, email, password } = await req.json()

    // Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      role: "admin", // Default role for new users
    })

    await user.save()

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error during registration:", error)
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
