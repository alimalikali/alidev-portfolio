import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import User from "@/models/User"
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const { email, password } = await req.json()

    // Find user by email
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Check password
    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1d" },
    )

    // Set cookie
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 },
    )

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 1 day in seconds
    })

    return response
  } catch (error) {
    console.error("Error during login:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
