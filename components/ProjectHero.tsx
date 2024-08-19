"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "@/public/pexels-divinetechygirl-1181675.jpg";
import { Button } from "./ui/button";
import { CodeIcon, Github } from "lucide-react";

const ProjectHero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4] mt-5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-medium  lg:text-5xl text-[#E7E7E4] md:text-5xl">
              Project Name
            </h1>
            <p className="mt-4 md:text-xl">
              A brief description of the project, highlighting the key features
              and technologies used.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <div className="inline-flex items-center rounded-md  px-3 py-1 text-sm font-medium bg-[#3D3D43] ">
                <CodeIcon className="mr-2 h-4 w-4" />
                React
              </div>
              <div className="inline-flex items-center rounded-md  px-3 py-1 text-sm font-medium bg-[#3D3D43] ">
                <CodeIcon className="mr-2 h-4 w-4" />
                Lorem ipsum
              </div>
              <div className="inline-flex items-center rounded-md  px-3 py-1 text-sm font-medium bg-[#3D3D43] ">
                <CodeIcon className="mr-2 h-4 w-4" />
                Node.js
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                Live Site
              </Button>
              <Button className="gap-3 bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                Github <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Image
            src={image}
            width="550"
            height="310"
            alt="Project Screenshot"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
