import mongoose, { Schema, type Document } from "mongoose"

export interface ITestimonial extends Document {
  name: string
  position: string
  company: string
  content: string
  imageUrl?: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String },
    content: { type: String, required: true },
    imageUrl: { type: String },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true },
)

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema)
