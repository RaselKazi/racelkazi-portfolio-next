import React from "react";
import Image from "next/image";
import SkillList from "./SkillList";
import TagTitel from "./TagTitel";
import Fade from "react-reveal/Fade";
export default function About() {
  return (
    <div
      id="About"
      className="px-4 py-10 mx-auto bg-indigo-100 md:px-24 dark:bg-gray-900"
    >
      <TagTitel titel={"About Section"}></TagTitel>
      <div className="flex flex-col sm:max-w-xl md:max-w-full lg:max-w-screen-xl overflow-hidden dark:bg-gray-800 border-2 dark:border-gray-700 border-gray-300 rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            className=""
            src="/image/racel.jpg"
            alt="Picture of the author"
            width={650}
            height={560}
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white  dark:text-gray-800 lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>

        <div className="flex flex-col justify-center p-8 p bg-white dark:bg-gray-800 lg:p-10 lg:pl-6 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl dark:text-white ">
            I'm a Junior Web Developer.
          </h5>
          <p className="mb-5 text-gray-800 dark:text-gray-300">
            <span className="font-bold">
              I love creating new things and find solutions to real-life
              problems.
            </span>
            I am passionate about solving problems using novel ideas and
            iterating quickly on my ideas to optimize them for scalability. and
            my expertise areas are HTML, CSS, Bootstrap, JavaScript, ES6, React
            js, MongoDB, Express.js, Node JS, and Typescript. I love to learn
            new things. Now I'm learning Python, Data structure and Algorithm
            <br /> I also improve myself every day, optimizing my workflow in
            every step of my life. I'm always determined to achieve my goals.
            I'm currently seeking an opportunity to extend my web development
            skills and knowledge.
          </p>

          <div className="">
            <SkillList></SkillList>
          </div>
          <div className="flex items-center">
            <button className="h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-500 focus:shadow-outline focus:outline-none">
              Download CV
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 rounded-md py-3 px-2  bg-purple-500 hover:bg-purple-500 hover:text-white bg-opacity-25"
            >
              About More
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
