import React from "react";
import Image from "next/image";

export default function ProjectList({ protflio }) {
  return protflio.map((item) => (
    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <Image
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={`/image/projects/${item.url}.png`}
        alt="Picture of the author"
        width={400}
        height={470}
      />

      <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
        <p className="mb-1 text-lg font-bold text-gray-100">{item.title}</p>
        <p className="mb-2 text-xs text-gray-100">{item.type}</p>

        {
          <div className="flex flex-wrap items-center justify-center mb-4 text-xs text-gray-100">
            <div className="flex flex-wrap">
              <p className="text-xs text-gray-100">Technology:</p>
              {item.icon.map((i) => (
                <img
                  className=" h-6 w-6 p-1 m-1 cursor-pointer hover:opacity-70  rounded-md border-2 border-purple-800 hover:bg-purple-500 shadow-md"
                  src={`/icon/${i}.svg`}
                  alt=""
                />
              ))}
            </div>
          </div>
        }

        <div className="grid gap-2 grid-cols-2">
          <a
            target="_blank"
            className=" font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-500 focus:shadow-outline focus:outline-none"
            href={item.demo}
          >
            <button>Demo</button>
          </a>
          <a
            target="_blank"
            className=" font-medium tracking-wide 
                  hover:text-white  text-purple-700 transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none"
            href={item.source}
          >
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  ));
}
