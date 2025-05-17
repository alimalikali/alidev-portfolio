import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Setting from "@/models/Setting"

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const settings = await Setting.find()

    // Convert to key-value object
    const settingsObject = settings.reduce(
      (acc, setting) => {
        acc[setting.key] = setting.value
        return acc
      },
      {} as Record<string, any>,
    )

    return NextResponse.json({ settings: settingsObject }, { status: 200 })
  } catch (error) {
    console.error("Error fetching settings:", error)
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const body = await req.json()

    // Update or create settings
    const updates = Object.entries(body).map(async ([key, value]) => {
      return Setting.findOneAndUpdate({ key }, { key, value }, { upsert: true, new: true })
    })

    await Promise.all(updates)

    return NextResponse.json({ message: "Settings updated successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error updating settings:", error)
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
