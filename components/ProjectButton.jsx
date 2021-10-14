import React from "react";

export default function button({ filter, title }) {
  return title.map((t) => {
    return (
      <button
        type="button"
        onClick={() => filter(t)}
        className="px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200"
      >
        {t}
      </button>
    );
  });
}
