import React from "react";

export default function skillList() {
  const icon = [
    "html5-2",
    "css",
    "sass",
    "tailwindcss",
    "bootstrap-5-1",
    "material-ui-1",
    "typescript",
    "javascript",
    "react",
    "redux",
    "react-router",
    "nextjs-3",
    "graphql",
    "apollo-graphql-compact",
    "firebase-1",
    "node-js",
    "express-109",
    "mongodb-icon-1",
    "jwt-3",
    "netlify",
    "heroku-4",
    "npm",
  ];
  return (
    <div>
      <p className="mb-1 text-2xl uppercase font-bold text-gray-800 dark:text-white">
        Skils
      </p>
      <div className="flex flex-row flex-wrap items-center font-semibold transition-colors duration-200 mb-4">
        {icon.map((item) => {
          return (
            <img
              className="transition duration-200  
              p-1 rounded-full border-2 border-purple-800 hover:bg-purple-500 shadow-lg h-11 w-11 m-1 cursor-pointer hover:scale-90"
              src={`/icon/${item}.svg`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
