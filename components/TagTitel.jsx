import React from "react";

export default function TagTitel({ titel }) {
  return (
    <div className=" flex justify-center items-center ">
      <p className=" my-10 bg-purple-400 bg-opacity-25 font-bold uppercase rounded-md text-purple-700 px-4 py-2">
        {titel}
      </p>
    </div>
  );
}
