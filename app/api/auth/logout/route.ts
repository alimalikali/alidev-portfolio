import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const response = NextResponse.json({ message: "Logout successful" }, { status: 200 })

    // Clear the token cookie
    response.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
    })

    return response
  } catch (error) {
    console.error("Error during logout:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
