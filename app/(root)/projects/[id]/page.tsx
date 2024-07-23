import ProjectAchieve from "@/components/ProjectAchieve";
import ProjectCollaborate from "@/components/ProjectCollaborate";
import ProjectHero from "@/components/ProjectHero";
import ProjectImplement from "@/components/ProjectImplement";
import React from "react";

const page = () => {
  return (
    <>
      <ProjectHero />
      <ProjectAchieve />
      <ProjectImplement />
      <ProjectCollaborate />
    </>
  );
};

export default page;
