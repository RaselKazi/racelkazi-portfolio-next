import React from "react";
import BlogItem from "./BlogItem";

export default function Blog() {
  return (
    <div
      id="Blog"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <BlogItem></BlogItem>
      </div>
    </div>
  );
}
