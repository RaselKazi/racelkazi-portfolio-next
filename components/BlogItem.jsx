import React from "react";
import { Blogitems } from "../public/BlogData";

export default function BlogItem() {
  return Blogitems?.map((item) => {
    return (
      <div className="overflow-hidden transition duration-300  transform lg:hover:-translate-y-2 bg-white dark:bg-gray-900 rounded-t-xl shadow-lg  border-2 hover:shadow-2xl border-gray-300">
        <img src={item.ing} className="object-cover w-full h-64" alt="" />
        <div className="p-5 border dark:border-gray-800 rounded-b-lg border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              target="_blank"
              href={item.url}
              className="transition-colors duration-200 dark:text-gray-100 text-gray-900 hover:text-purple-700 dark:hover:text-purple-700"
            >
              {item.catagory}
            </a>
            <span className=" dark:text-gray-300 text-gray-600">
              — {item.date}
            </span>
          </p>
          <a
            target="_blank"
            href={item.url}
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-700 dark:text-white"
          >
            {item.title}
          </a>
          <p className="mb-2  dark:text-gray-300 text-justify text-gray-700">
            {item.type}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src={item.AuthorIng}
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div className="">
                <a
                  target="_blank"
                  href={item.AuthorUrl}
                  className="font-semibold text-gray-800  dark:text-gray-200 transition-colors duration-200 hover:text-purple-400 dark:hover:text-purple-400"
                >
                  {item.AuthorName}
                </a>
                <p className="text-sm font-medium leading-4  dark:text-gray-400 text-gray-600">
                  Author
                </p>
              </div>
            </div>

            <a
              target="_blank"
              href={item.url}
              className="inline-flex items-center font-semibold
              transition-colors duration-200 text-purple-500
              hover:text-purple-900"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  });
}
