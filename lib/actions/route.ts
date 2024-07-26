"use server";
import Blog from "../database/models/blog.model";
import * as z from "zod";
import { blogSchema } from "../validator";
import { connectToDatabase } from "../database";
import Project from "../database/models/project.model";

interface CreateBlogParams {
  title: string;
  description: string;
}

interface CreateProjectParams {
  name: string;
  description: string;
  techStack: string;
  liveSite: string;
  github: string;
  achieved: string;
  implementation: string;
}

export async function createBlog({ title, description }: CreateBlogParams) {
  try {
    await connectToDatabase();

    const newBlog = await Blog.create({
      title,
      description,
    });

    return {
      success: true,
      data: { newBlog },
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function createProject({
  name,
  description,
  techStack,
  liveSite,
  github,
  achieved,
  implementation,
}: CreateProjectParams) {
  try {
    await connectToDatabase();
    const newProject = await Project.create({
      name,
      description,
      techStack,
      liveSite,
      github,
      achieved,
      implementation,
    });
    return {
      success: true,
      data: newProject, 
    };
  } catch (error:any) {
    console.error('Error creating project:', error);
    return { success: false, error: error.message || "Something went wrong" };
  }
}