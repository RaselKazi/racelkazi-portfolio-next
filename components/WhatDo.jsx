import React from "react";
import { FcMultipleDevices } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import { FcMultipleSmartphones } from "react-icons/fc";

export default function WhatDo() {
  return (
    <div className=" bg-white dark:bg-gray-800">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-around p-2 items-center overflow-hidden text-left duration-200 transform lg:hover:-translate-y-2 hover:bg-green-300 dark:hover:bg-gray-500 dark:bg-gray-700  bg-indigo-100 rounded shadow-xl group hover:shadow-2xl">
            <div className="flex items-center justify-center border-2 border-yellow-500 text-3xl w-16 h-16 rounded-full bg-indigo-50">
              <FcMultipleDevices />
            </div>
            <p className="font-bold text-gray-900 dark:text-white">
              Web Development
            </p>
            <p className="text-sm leading-5  dark:text-white text-gray-800"></p>
          </div>
          <div className="flex justify-around p-2 items-center overflow-hidden text-left duration-200 transform lg:hover:-translate-y-2 hover:bg-green-300 dark:hover:bg-gray-500 dark:bg-gray-700  bg-indigo-100 rounded shadow-xl group hover:shadow-2xl">
            <div className="flex items-center justify-center border-2 border-yellow-500 text-3xl w-16 h-16 rounded-full bg-indigo-50">
              <FcStart />
            </div>
            <p className="font-bold text-gray-900 dark:text-white">YouTuber</p>
            <p className="text-sm leading-5  dark:text-white text-gray-800"></p>
          </div>
          <div className="flex justify-around p-2 items-center overflow-hidden text-left duration-200 transform lg:hover:-translate-y-2 hover:bg-green-300 dark:hover:bg-gray-500 dark:bg-gray-700  bg-indigo-100 rounded shadow-xl group hover:shadow-2xl">
            <div className="flex items-center border-2 border-yellow-500 justify-center text-3xl w-16 h-16 rounded-full bg-indigo-50">
              <FcMultipleSmartphones />
            </div>
            <p className="font-bold text-gray-900 dark:text-white">
              App Development
            </p>
            <p className="text-sm leading-5  dark:text-white text-gray-800"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
