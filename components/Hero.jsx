import React from "react";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
// import Resumepdf from "../public/racel-kazi-resume.pdf";

export default function Hero() {
  return (
    <div id="Home" className="relative bg-indigo-100 dark:bg-gray-900">
      <div className="absolute inset-x-0 bottom-0 dark:bg-gray-900 ">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 dark:text-gray-800 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative">
          <div className="px-4 py-16 mx-auto grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <div className="bg-gray-900 dark:bg-white w-28 px-4 py-2 rounded-bl-none rounded-full">
                <h3 className=" flex text-white dark:text-gray-700 font-extrabold ">
                  Hello I'm
                </h3>
              </div>
              <h5 className="mb-2 text-7xl text-purple-600 uppercase font-extrabold leading-none">
                Rasel Kazi
              </h5>
              <h5 className="text-4xl mb-2 font-extrabold text-purple-400">
                web devloper
              </h5>
              <p className="mb-6 text-gray-900 text-justify dark:text-white">
                I'm a Junior Web Developer. I'm passionate about coding and
                problem-solving. I love creating new things and find solutions
                to real-life problems. I always looking to deliver a
                high-quality product.
              </p>
              <hr className="mb-5 border-gray-400" />
              <div className="flex items-center space-x-4">
                <a
                  className=" text-2xl  p-2 dark:hover:bg-white text-blue-600  rounded-full border-2 border-blue-600 transition duration-300 dark:hover:text-blue-600 hover:text-white hover:bg-blue-600"
                  target="_blank"
                  href="https://www.facebook.com/freelancer.raselkazi"
                >
                  <ImFacebook2 />
                </a>
                <a
                  className=" text-2xl  p-2 dark:hover:bg-white text-red-600  rounded-full border-2 border-red-600 transition duration-300 dark:hover:text-red-600 hover:text-white hover:bg-red-600"
                  target="_blank"
                  href="https://www.facebook.com/freelancer.raselkazi"
                >
                  <BsYoutube />
                </a>
                <a
                  className=" text-2xl  p-2 dark:hover:bg-white text-blue-800  rounded-full border-2 border-blue-800 transition duration-300 dark:hover:text-blue-800 hover:text-white hover:bg-blue-800"
                  target="_blank"
                  href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
                >
                  <BsLinkedin />
                </a>
                <a
                  className=" text-2xl  p-2 dark:hover:bg-white dark:text-gray-400  text-gray-900  rounded-full border-2 dark:border-gray-400 border-gray-900 transition duration-300 dark:hover:text-gray-900 hover:text-white hover:bg-gray-900"
                  target="_blank"
                  href="https://github.com/RaselKazi"
                >
                  <BsGithub />
                </a>
                <a
                  className=" text-2xl  p-2 dark:hover:bg-white text-green-600  rounded-full border-2 border-green-600 transition duration-300 dark:hover:text-green-600 hover:text-white hover:bg-green-600"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
                >
                  <IoLogoWhatsapp />
                </a>
              </div>

              <div className=" my-6">
                <button className="h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none mr-4">
                  {/* <span onClick={() => window.open(Resumepdf)}> */}
                  Download CV
                </button>

                <a
                  href="#About"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-white rounded-md py-3 px-2 bg-purple-400 hover:bg-purple-500"
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

            <div className="flex items-center justify-center">
              <div className="relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 top-0"></span>
                <span class="animate-ping absolute top-0 inline-flex h-full w-full rounded-full bg-purple-500 opacity-90"></span>
                <span class=" animate-ping absolute top-0 inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
                <Image
                  className=" rounded-full"
                  src="/image/kazi.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <a
            href="#About"
            aria-label="Scroll down"
            className="flex animate-bounce items-center justify-center w-10 h-10 mx-auto text-purple-500 duration-300 transform border-2  text-extrabold border-purple-600 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
