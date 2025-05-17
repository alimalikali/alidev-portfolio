import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

// Paths that require authentication
const protectedPaths = ["/admin", "/admin/projects", "/admin/testimonials", "/admin/experience", "/admin/settings"]

// Paths that are public
const publicPaths = ["/admin/login"]

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((prefix) => path.startsWith(prefix))
  const isPublicPath = publicPaths.some((prefix) => path.startsWith(prefix))

  // If it's a public path, allow access
  if (isPublicPath) {
    return NextResponse.next()
  }

  // If it's not a protected path, allow access
  if (!isProtectedPath) {
    return NextResponse.next()
  }

  // Get the token from the cookies
  const token = request.cookies.get("token")?.value

  // If there's no token, redirect to login
  if (!token) {
    const url = new URL("/admin/login", request.url)
    url.searchParams.set("from", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  try {
    // Verify the token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

    await jwtVerify(token, secret)

    // If the token is valid, allow access
    return NextResponse.next()
  } catch (error) {
    // If the token is invalid, redirect to login
    const url = new URL("/admin/login", request.url)
    url.searchParams.set("from", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
