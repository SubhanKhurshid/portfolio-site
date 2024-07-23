import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "@/public/pexels-danny-meneses-340146-943096.jpg";

const BlogSection = () => {
  return (
    <section id="blogs" className="w-full py-24 bg-black text-[#E7E7E4]">
      <div className="container px-4 md:px-6">
        <div className="space-y-2">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#3D3D43]">
            Blogs
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Insights from My Digital Odyssey
          </h2>
          <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore some of my blogs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg bg-[#3D3D43]">
            <Image
              src={image}
              width={800}
              height={450}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Mastering React Hooks: A Comprehensive Guide
              </h3>
              <p className="mb-4">
                Dive into the world of React Hooks and learn how to leverage
                them to build powerful and efficient web applications.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-[#3D3D43]">
            <Image
              src={image}
              width={800}
              height={450}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Optimizing Next.js Applications for Performance
              </h3>
              <p className=" mb-4">
                Learn how to optimize your Next.js applications for
                lightning-fast performance and improved user experience.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden shadow-lg bg-[#3D3D43]">
            <Image
              src={image}
              width={800}
              height={450}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Building a Real-Time Chat App with Next.js and WebSockets
              </h3>
              <p className="mb-4">
                Discover how to create a real-time chat application using
                Next.js and WebSockets, and learn about the benefits of this
                powerful combination.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
