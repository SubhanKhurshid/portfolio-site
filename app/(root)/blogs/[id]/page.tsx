import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-medium  tracking-tight lg:text-5xl text-[#E7E7E4]">
            The Art of Minimalist Living
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#E7E7E4]">
            <div>By John Doe</div>
            <div className="h-4 w-px bg-muted" />
            <div>July 23, 2024</div>
          </div>
        </div>
        <div className="text-[#a3a3ac] mt-10">
          <p>
            In a world filled with constant distractions and material excess,
            the concept of minimalist living has emerged as a refreshing
            antidote. This blog post explores the art of simplifying one's life,
            focusing on the essentials, and finding joy in the absence of
            clutter.
          </p>
          <p>
            Minimalism is not just about decluttering your physical space; it's
            about cultivating a mindset that values experiences over
            possessions. By embracing this philosophy, individuals can free
            themselves from the burden of ownership and redirect their energy
            towards the things that truly matter – relationships, personal
            growth, and a deeper connection with the world around them.
          </p>
          <p>
            Through practical tips and personal anecdotes, this post will guide
            you on your journey towards a more intentional and fulfilling
            lifestyle. Discover the liberating power of minimalism and learn how
            to create a harmonious balance between your physical and mental
            well-being.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
