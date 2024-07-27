"use client";
import { getProjectsAll } from "@/lib/actions/route";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const AllProjectCard = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await getProjectsAll();

      if (result.success) {
        setProjects(result.data || []);
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-10 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <Card
          key={index} // Added key for each child in a list
          className="bg-[#3D3D43] text-[#E7E7E4] px-4 py-4 border-none transform transition duration-300  hover:scale-105 hover:shadow-lg"
        >
          <Link
            href={`projects/${project._id}`}
            className="group"
            prefetch={false}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                width="550"
                height="310"
                alt={project.name}
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors capitalize">
                {project.name}
              </h3>
              <p className="text-sm mt-1">{project.description}</p>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default AllProjectCard;
