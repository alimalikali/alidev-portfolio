import mongoose, { Schema, type Document } from "mongoose"

export interface IExperience extends Document {
  title: string
  company: string
  location: string
  startDate: Date
  endDate?: Date
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  createdAt: Date
  updatedAt: Date
}

const ExperienceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    description: { type: String, required: true },
    achievements: [{ type: String }],
    technologies: [{ type: String }],
  },
  { timestamps: true },
)

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema)
