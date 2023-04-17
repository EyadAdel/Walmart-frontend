import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export default function CustomerList() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-32 py-6">
        <h1 className="font-bold text-2xl">Customer's List</h1>
        <p className="my-5">{} items</p>
        <hr />
        <div className="flex-row">
          {/* starting map from here */}
          <div className="flex py-5">
            {/* left side */}
            <div className="">
              <img
                className=""
                src="https://i5.walmartimages.com/asr/f0b61dc8-606e-480b-9bc6-cba4e0397222.0e314b5d5f8d450712480dda95d50580.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
                alt=""
              />
              <div className="flex justify-center">
                <button className="underline hover:no-underline">Remove</button>
              </div>
            </div>
            <div className="ml-4 flex">
              <div className="">
                <a href="#fdgfs" className="hover:underline">
                  Baxton Studio Baird Mid-Century Modern Light Oak Brown
                  Finished Wood and Rattan 2-Drawer Console Table
                </a>
              </div>
              <div className="ml-20">
                <p className="mx-4 ">{}$</p>
                <button
                  type="button"
                  class=" mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
