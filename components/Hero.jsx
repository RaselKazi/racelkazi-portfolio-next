import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="Home" className="relative bg-indigo-200">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative">
          <div className="px-4 py-16 mx-auto grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <div className="bg-gray-900 w-28 px-4 py-2 rounded-bl-none rounded-full">
                <h3 className=" flex text-white  font-extrabold ">Hello I'm</h3>
              </div>
              <h5 className="mb-2 text-7xl text-purple-600 uppercase font-extrabold leading-none">
                Rasel Kazi
              </h5>
              <h5 className="text-4xl mb-2 font-extrabold text-purple-400">
                web devloper
              </h5>
              <p className="mb-6 text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
              </p>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-purple-600 hover:scale-125"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-purple-600"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-purple-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-purple-600 hover:scale-100"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                  </svg>
                </a>
              </div>

              <div className=" my-6">
                <button className="h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none mr-4">
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

            <div className="flex items-center justify-center">
              <div className="relative border-double border-purple-500">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-90"></span>
                <span class=" animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
                <Image
                  className="rounded-full  border-8 border-yellow-500"
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
