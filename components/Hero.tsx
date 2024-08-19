"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "@/public/very-thin-face-pakistani-guy-with-few-beard.png";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-20 md:px-20 md:py-24 lg:py-32 text-[#E7E7E4] mt-10 md:mt-0 mb-10">
      <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.5,
          }}
          className="flex flex-col justify-center space-y-4"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-tight sm:text-5xl xl:text-6xl/none">
              Subhan Khurshid
            </h1>
            <p className="max-w-[600px] md:text-xl font-light">
              Software Engineer specializing in AI and full-stack web
              development, currently pursuing a B.S. in AI with a robust
              portfolio in React, Next.js, and machine learning projects.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/projects" prefetch={false}>
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                View Projects
              </Button>
            </Link>
            <Link href="#contact" prefetch={false}>
              <Button className="bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                Contact Me
              </Button>
            </Link>
            <Link href="https://github.com/SubhanKhurshid">
              <Button className="gap-3 bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80">
                Visit Github
                <Github className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="relative flex justify-center items-center">
          <Image
            src={image}
            alt="Hero"
            className="hidden md:block mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square lg:w-[300px] lg:h-[300px]"
          />
          {/* Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-[80%] left-[50%] transform -translate-x-1/2 p-3 bg-white text-black rounded-lg shadow-lg text-sm font-medium hidden md:block"
          >
            👋 Hi there!
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-white border-x-[6px] border-x-transparent"></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
