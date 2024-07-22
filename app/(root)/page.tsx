import About from "@/components/About";
import ContactPage from "@/components/ContactPage";
import Education from "@/components/Education";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import { Contact } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Education />
      <ContactPage />
    </>
  );
};

export default page;
