import { CheckIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/public/pexels-pixabay-247791.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4]"
    >
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#3D3D43]">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              My Skills and Experience
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a software engineer, I have a strong background in building
              modern web applications using the latest technologies and best
              practices. I specialize in full-stack development and machine
              learning, with a particular focus on creating scalable and
              efficient solutions.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>Proficient in React, Next.js, and TypeScript</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Experienced in building scalable and performant web applications
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>Proficient in modern CSS frameworks like Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Skilled in backend development using Node.js, Flask, and
                Express.js
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Experienced with databases such as PostgreSQL, MySQL, and
                MongoDB
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Knowledgeable in machine learning and NLP using TensorFlow and
                HuggingFace
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5" />
              <span>
                Experienced in agile development and project management
              </span>
            </li>
          </ul>
        </div>
        <Image
          src={image}
          width="550"
          height="550"
          alt="About"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
};

export default About;
