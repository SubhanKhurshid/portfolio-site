import React from "react";

const ProjectImplement = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-[#E7E7E4]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Implementation Details
            </h2>
            <p className="mt-4  md:text-xl">
              Provide more in-depth information about the technical
              implementation of the project, including any unique approaches or
              challenges that were faced.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Serverless Architecture</h3>
              <p className="">
                The project utilized a serverless architecture, leveraging cloud
                functions and managed services to reduce infrastructure
                complexity and improve scalability.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Microservices</h3>
              <p className="">
                The application was designed using a microservices architecture,
                allowing for independent development and deployment of
                individual components.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Progressive Web App</h3>
              <p className="">
                The website was built as a Progressive Web App, providing an
                app-like experience with offline capabilities and improved
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectImplement;
