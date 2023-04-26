import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Lists() {
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
            <li className="p-1  myitems_list ">
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
            <li className="p-1  myitems_list border-b-4 border-b-4 border-sky-500">
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
            <li className="p-1  myitems_list ">
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
        <a href="/customerlist">
        <div
          style={{ width: "18rem", marginTop: "20px" }}
          className="flex rounded-lg bg-sky-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-auto md:flex-row"
          
        >
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Customer's List
            </h5>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Favorites - {} items
            </p>
          </div>
          <div className="mr-6 my-9">
            <img
              className=""
              width={60}
              height={60}
              src="https://i5.walmartimages.com/asr/f0b61dc8-606e-480b-9bc6-cba4e0397222.0e314b5d5f8d450712480dda95d50580.jpeg?odnHeight=80&odnWidth=80&odnBg=e6f1fc"
              alt=""
            />
          </div>
        </div>
        </a>
      </div>
      <Footer />
    </>
  );
}
