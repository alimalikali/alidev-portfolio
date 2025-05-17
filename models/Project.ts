import mongoose, { Schema, type Document } from "mongoose"

export interface IProject extends Document {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  technologies: string[];
  architecture: string;
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [{ type: String }],
    images: [{ type: String }],
    technologies: [{ type: String }],
    architecture: { type: String, required: true },
    demoUrl: { type: String },
    codeUrl: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)
