import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Registeres() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-32 py-6">
        <section>
          <div className="my-5">
            <h1 className="text-[30px] font-bold">My Items</h1>
          </div>
        </section>
        <nav className="w-100 pt-2">
          <ul className="flex list-none w-100	">
            <li className="p-1  myitems_list">
              <a
                href="/reorder"
                // className={
                //   activeLink === 0
                //     ? "active-link border-b-4 border-indigo-200"
                //     : ""
                // }
                // onClick={() => handleLinkClick(0)}
              >
                Reorder
              </a>
            </li>
            <li className="p-1  myitems_list ">
              <a
                href="/lists"
                // className={
                //   activeLink === 1
                //     ? "active-link border-b-4 border-indigo-200"
                //     : ""
                // }
                // onClick={() => handleLinkClick(1)}
              >
                lists
              </a>
            </li>
            <li className="p-1  myitems_list border-b-4 border-sky-500">
              <a
                href="/registries"
                // className={
                //   activeLink === 2
                //     ? "active-link border-b-4 border-indigo-200"
                //     : ""
                // }
                // onClick={() => handleLinkClick(2)}
              >
                Registries
              </a>
            </li>
          </ul>
        </nav>
        <hr className="mb-2" />
        <div className="flex-row mx-96 center">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-4047/k2-_20ee2089-a6f8-4200-8ec4-a8ad44742e4b.v1.svg"
            width={374}
            height={374}
            alt=""
            className=""
          />
          <p className="text-lg py-9 px-3">
            Make it easy for everyone to find the perfect gift
          </p>
          <div className="flex justify-center">
          <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Find a registry
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create a registry
            </button>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
