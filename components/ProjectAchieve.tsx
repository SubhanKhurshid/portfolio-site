import React from "react";

const ProjectAchieve = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#3D3D43] text-[#E7E7E4]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold  sm:text-3xl">
              What was Achieved?
            </h2>
            <p className="mt-4  md:text-xl">
              Describe the key features and functionalities that were
              implemented in the project, highlighting the challenges overcome
              and the impact it had.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Responsive Design</h3>
              <p className="">
                The website was designed to be fully responsive, ensuring a
                great user experience across all devices.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Dynamic Content</h3>
              <p className="">
                The project featured a content management system that allowed
                for easy updates and changes to the website's content.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Performance Optimization</h3>
              <p className="">
                Extensive optimization techniques were implemented to ensure
                fast load times and a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAchieve;
