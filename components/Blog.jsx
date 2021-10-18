import React from "react";
import BlogItem from "./BlogItem";
import TagTitel from "./TagTitel";
import Fade from "react-reveal/Fade";
export default function Blog() {
  return (
    <div id="Blog" className=" bg-indigo-100 dark:bg-gray-800">
      <TagTitel titel={"Blog Section"}></TagTitel>
      <div
        id="Blog"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800"
      >
        <Fade left cascade>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 ">
            <BlogItem></BlogItem>
          </div>
        </Fade>
      </div>
    </div>
  );
}
