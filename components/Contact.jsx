import React from "react";
import ContactForm from "./ContactForm";
import TagTitel from "./TagTitel";

export default function Contact() {
  return (
    <div id="Contact" className="dark:bg-gray-900 px-4 pb-16 mb-10  sm:mb-0">
      <TagTitel titel={"Contact Section"}></TagTitel>
      <section className="mx-auto sm:max-w-xl sm:pt-6  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-indigo-50 rounded-md shadow-2xl dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Get in touch
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6  md:grid-cols-2 lg:grid-cols-2 ">
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-rows-3  lg:grid-rows-3">
            <a
              href="#Contact"
              className="flex  justify-center items-center px-4 py-3 text-gray-900 rounded-md dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
            >
              <svg
                className="w-8 h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="mt-2">Chittagong, Bangladesh</span>
            </a>

            <a
              href="#Contact"
              className="flex  justify-center items-center px-4 py-3 text-gray-900 rounded-md dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
            >
              <svg
                className="w-8 h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span className="mt-2">008801830225388</span>
            </a>

            <a
              href="#Contact"
              className="flex  justify-center items-center px-4 py-3 text-gray-900 rounded-md dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
            >
              <svg
                className="w-8 h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span className="mt-2">raselkazi080@gmail.com</span>
            </a>
          </div>

          <div className="mt-6 sm:px-6 sm:pb-4">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </div>
  );
}
