import React from "react";
import Image from "next/image";
import SkillList from "./SkillList";

export default function About() {
  return (
    <div
      id="About"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            className=""
            src="/image/racel.jpg"
            alt="Picture of the author"
            width={600}
            height={550}
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 p bg-white lg:p-10 lg:pl-6 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Your new ideal style
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </p>

          <div className="">
            <SkillList></SkillList>
          </div>
          <div className="flex items-center">
            <button className="h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-500 focus:shadow-outline focus:outline-none">
              Sign up
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-white rounded-md py-3 border-2 px-2  bg-purple-400 hover:bg-purple-500"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
