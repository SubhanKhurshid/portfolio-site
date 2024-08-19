import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const ResumeSection = () => {
  return (
    <section id="resume" className="w-full py-24 text-[#E7E7E4] bg-[#3D3D43]">
      <div className="container px-4 md:px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Unlock My Digital Prowess</h2>
        <p className=" mb-8 max-w-lg ">
          Curious to learn more about my expertise and qualifications? Dive into
          my resume to uncover the full scope of my digital capabilities.
        </p>

        <Link href="/Subhan-Khurshid.pdf" legacyBehavior>
          <a
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            download
          >
            Explore My Resume
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ResumeSection;
