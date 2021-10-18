import { useState } from "react";
import ProjectButton from "./ProjectButton";
import ProjectList from "./ProjectList";
import { items } from "../public/Databasse";
import TagTitel from "./TagTitel";

const catagory = ["all", ...new Set([...items.map((i) => i.catagory)])];

export default function Portfolio() {
  const [protflio, setprotflio] = useState(items);
  const [menuItem, setmenuItem] = useState(catagory);
  const [active, setactive] = useState("all");

  //

  const filterdata = (button) => {
    if (button === "all") {
      setprotflio(items);
      setactive("all");
      return;
    }

    setactive(button);
    const filterItem = items.filter((item) => item.catagory === button);
    setprotflio(filterItem);
  };

  return (
    <div id="Portfolio" className="dark:bg-gray-800">
      <div className="px-4 bg-hero-pattern py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <TagTitel titel={"portfolio Section"}></TagTitel>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto  dark:text-white">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            My Project
          </h2>
        </div>

        <div className=" mb-6 max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-700">
          <div className=" grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5">
            <ProjectButton
              active={active}
              filter={filterdata}
              title={menuItem}
            ></ProjectButton>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   transition-all  duration-500 dark:text-gray-700">
          <ProjectList protflio={protflio}></ProjectList>
        </div>
      </div>
    </div>
  );
}
