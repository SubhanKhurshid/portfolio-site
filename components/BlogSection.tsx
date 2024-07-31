import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/actions/route";
import { Button } from "./ui/button";

const BlogSection = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getBlogs();
      console.log(result);

      if (result.success) {
        setBlogs(result.data || []);
      } else {
        console.error(result.error);
      }
    };
    getData();
  }, []);
  return (
    <section id="blogs" className="w-full py-24 bg-black text-[#E7E7E4]">
      <div className="container px-4 md:px-6">
        <div className="space-y-2">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#3D3D43]">
            Blogs
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Insights from My Digital Odyssey
          </h2>
          <p className="max-w-[600px] md:text-xl lg:text-base xl:text-xl">
            Explore some of my blogs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg overflow-hidden shadow-lg bg-[#3D3D43]"
            >
              <Image
                src={blog.imageUrl}
                width={800}
                height={450}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="mb-4 line-clamp-3">{blog.description}</p>
                <Link
                  href={`/blogs/${blog._id}`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5">
          <Link href={"/blogs"}>
            <Button className="bg-[#3D3D43] hover:bg-[#3D3D43] hover:opacity-80">
              See All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
