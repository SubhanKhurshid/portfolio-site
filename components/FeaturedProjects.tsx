import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import image from "@/public/pexels-markusspiske-177598.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Github, MoveRight } from "lucide-react";
import { getProjects } from "@/lib/actions/route";
import Link from "next/link";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getProjects();

      if (result.success) {
        setProjects(result.data || []);
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, []);
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#3D3D43] text-[#E7E7E4]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcasing My Work
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the web applications I've built to showcase my
              skills and experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#18181B] text-[#E7E7E4] border-2 border-[#1b1b1c]"
            >
              <CardHeader>
                <Image
                  src={project.imageUrl}
                  width="550"
                  height="310"
                  alt={project.name}
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start justify-start space-y-3">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="line-clamp-3">{project.description}</p>
                  <div className="flex items-start justify-start gap-3">
                    <Link href={`projects/${project._id}`}>
                      <Button className="bg-zinc-300 text-black hover:bg-zinc-300 hover:opacity-80 gap-2">
                        Show Details
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={project.liveSite}>
                      <Button className="bg-zinc-300 text-black hover:bg-zinc-300 hover:opacity-80 font-medium">
                        Live Site
                      </Button>
                    </Link>
                    <Link href={project.github}>
                      <Button className="gap-3 bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                        Github <Github className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href={"/projects"}>
            <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80 max-w-xs">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
