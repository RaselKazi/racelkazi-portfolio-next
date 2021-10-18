import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="relative bg-gray-800">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16  dark:bg-gray-900 text-gray-800"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="#"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="mr-4 rounded-lg border-2 border-purple-500  bg-purple-400 hover:bg-purple-700 font-bold w-8 h-8 text-white text-lg flex items-center justify-center uppercase transition duration-300">
                R
              </span>
              <span className="text-xl font-bold tracking-wide text-white hover:text-purple-700 uppercase">
                Rasel kazi
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-200">
                I'm a Junior Web Developer. I'm passionate about coding and
                problem-solving. I love creating new things and find solutions
                to real-life problems. I always looking to deliver a
                high-quality product.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-2 text-white font-bold">Phone:</p>
              <a
                href="tel:008801830225388"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-gray-200 hover:text-gray-400"
              >
                008801830225388
              </a>
            </div>
            <div className="flex">
              <p className="mr-2 text-white font-bold">Email:</p>
              <a
                href="mailto:raselkazi080@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-gray-200 hover:text-gray-400"
              >
                raselkazi080@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-2 text-white font-bold">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-gray-200 hover:text-gray-400"
              >
                Chittagong, Bangladesh
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
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
                className=" text-2xl  p-2 hover:bg-white text-gray-400   rounded-full border-2 border-gray-400  transition duration-300 hover:text-gray-900 "
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
            <p className="mt-4 text-sm text-gray-200">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex  justify-center items-center pt-5 pb-10 border-t">
          <p className="text-sm text-gray-200">© Copyright 2020 Rasel Kazi.</p>
        </div>
      </div>
    </div>
  );
}
