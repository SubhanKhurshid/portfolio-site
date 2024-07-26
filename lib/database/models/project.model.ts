import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: String,
      required: true,
    },
    liveSite: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    achieved: {
      type: String,
      required: true,
    },
    implementation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
