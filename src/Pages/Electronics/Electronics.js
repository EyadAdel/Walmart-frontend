import React from "react";
import { BsWallet2, BsTruckFront, BsBoxArrowInDown } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image from "../../assets/Electronics/bbb.png";
import image2 from "../../assets/Electronics/bbb2.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Electronics = () => {
  return (
    <>
      <Navbar />
      <div className="shopByCategory">
        <div className="p-5 mx-8 flex justify-between">
          <h5 className="font-bold text-lg">Shop by category</h5>
          <h1 className="text-right underline">see less</h1>
        </div>
        <div className="flex container justify-center ">
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-7e7b/k2-_c2d8c877-fc64-48c4-aaae-a8855fc7547c.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="133px"
              height="200px"
            />
            <p className="text-slate-600 ">Savings</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-300c/k2-_ed487013-2869-4183-9b1a-39fb82e07501.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Computers</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d372/k2-_06b5f526-343a-4eac-8ce9-5870fbf46cb6.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">TVs & home theater</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-9065/k2-_adb96eb5-dce4-46e9-8644-80690169d2fe.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Cameras & drones</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-204c/k2-_7957b599-db05-404b-b1ce-221d5f115133.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Cell phones & accessories</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-4189/k2-_63c67a27-5b07-4b86-bd12-07575b3d1247.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Video games</p>
          </div>
        </div>
        <div className="flex container justify-center ">
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-b1f2/k2-_ac0b2975-60e9-4de3-afc7-f26ab3a44dbc.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Headphones</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-8013/k2-_8c99be94-7eac-477e-81b6-507c49cbe0d7.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">iPads & tablets</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-140f/k2-_ab978d59-5263-4f6d-a120-4dc31636919e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">PC gaming</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-8465/k2-_4d69033f-f8d4-498a-994d-f8c00495764b.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Wearable tech</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-29ff/k2-_94cea3ab-936c-42d7-b0ee-f2cac87151e1.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Smart home & security</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-1c6d/k2-_8bc79c80-cd04-42d0-bd6c-0a82d1c80805.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
              className="w-100 h-auto"
              width="200px"
              height="200px"
            />
            <p className="text-slate-600">Wifi & networking</p>
          </div>
        </div>
      </div>
      <div className="trending">
        <h5 className="p-5 mx-8 font-bold text-lg">Trending tech we love</h5>

        <div className=" flex flex-auto justify-center gap-6 mb-8">
          <div className="card_left ">
            <div class="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-31c6/k2-_b5b822b6-9cad-467e-885f-ada38bdb1cdd.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Capture every moment
                  </h5>
                </a>
                <p class="mb-8 font-normal text-gray-500 dark:text-gray-400">
                  Tech finds for your spring adventures.
                </p>
                <a
                  href="#"
                  class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                >
                  Shop travel tech
                </a>
              </div>
            </div>
          </div>
          <div className="card_right ">
            <div class="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-bae7/k2-_a850c6ac-617e-4dae-8ea1-0a8bebd7eea9.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gadgets galore
                  </h5>
                </a>
                <p class="mb-8 font-normal text-gray-500 dark:text-gray-400">
                  Top gear for your tech-loving some-bunny.
                </p>
                <a
                  href="#"
                  class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                >
                  Shop Easter gifts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured_shops flex ">
        <div className="sideBar flex flex-col w-1/3  p-5 mx-8">
          <h5 className="font-bold text-xl py-5">Featured shops</h5>
          <hr />
          {/* <IoIosArrowUp/> */}
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-base py-3 ">Deals</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-base py-3">Walmart Restored</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-base py-3">Premium Tech</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-base py-3">New From Apple</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <h5 className="font-bold text-xl py-6">Categories</h5>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-b035/k2-_9c76b273-177b-485f-a2c4-7be90ce92515.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">TV & Video</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8a61/k2-_7d4a890b-3898-416a-973d-ab1af53fba7a.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">
              Computers & Tablets
            </h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4f82/k2-_b2e6d1a6-e1a6-4810-9202-d0ce004c5b33.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">Video Games</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6a08/k2-_ff910472-3448-4df9-8dfd-b5c32ce4ab38.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">PC Gaming</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3073/k2-_92f8217b-8684-4ce7-927c-c29d1e40fc3f.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">Audio</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3817/k2-_299964db-052f-4043-a962-f0bc13e6ce34.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">Cell Phones</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4440/k2-_9c8285f3-7706-46a5-a8ef-ebff00597a4b.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">
              Wearable Technology
            </h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d689/k2-_f7c9db6f-09d8-4100-a5d6-f350fd00c988.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">Smart Home & Wifi</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5790/k2-_5c3bf977-1991-4d3c-b92c-251bffe8fe4b.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF" />
            <h5 className="font-semibold text-base py-5 ">Cameras</h5>
            <IoIosArrowDown />
          </div>
          <hr />
          <h5 className="font-bold text-xl py-5">Featured Brands</h5>
          <hr />
          {/* <IoIosArrowUp/> */}
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-base py-3 ">Shop Brands</h5>
            <IoIosArrowDown />
          </div>
          <hr />
        </div>
        <div className="value_tech w-full">
          <div className="px-5 mx-8 flex justify-between">
            <h5 className="font-bold text-lg">Tech value picks</h5>
            <h1 className="text-right underline">shop all</h1>
          </div>
          <p class="px-5 mx-8 font-normal text-gray-500 dark:text-gray-400">
            Upgrade your computer system for less.
          </p>
          <div className="flex w-full">
            <div class="relative max-w-sm w-60 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
              <div class="overflow-x-hidden rounded-2xl relative">
                <img
                  class="h-40 rounded-2xl"
                  src="https://i5.walmartimages.com/asr/72ecc1f4-1a21-4391-b455-cd03dfb82359.92c30e086a8a81a77f70eea348ca06e8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 group-hover:opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </p>
              </div>
              <div class="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                  <p class="text-lg font-semibold text-gray-900 mb-0">
                    $317.00
                  </p>
                  <p class="text-md text-gray-800 mt-0">
                    current price $317.00 Restored HP Gaming PC Tower G1 Intel
                    Core i3 Processor 16GB
                  </p>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="bg-sky-200 text-blue-600 text-sm max-w-fit mt-1">
                    3+ day shipping
                  </p>
                </div>
              </div>
            </div>
            <div class="relative max-w-sm w-60 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
              <div class="overflow-x-hidden rounded-2xl relative">
                <img
                  class="h-40 rounded-2xl"
                  src="https://i5.walmartimages.com/asr/bcfff815-06cd-46c3-a255-1dc5ad539b16.0dc8c2b77deaae1ad4842591969418a5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 group-hover:opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </p>
              </div>
              <div class="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-0">
                    $789.99
                  </p>
                  <p className="line-through text-gray-800">$1200.99</p>
                  <p class="text-md text-gray-800 mt-0">
                    current price $789.99 Lenovo IdeaPad Gaming 3 15IAH7 82S9 -
                    Intel Core i7 12700H / 2.3 GHz{" "}
                  </p>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="bg-sky-200 text-blue-600 text-sm max-w-fit mt-1">
                    3+ day shipping
                  </p>
                </div>
              </div>
            </div>
            <div class="relative max-w-sm w-60 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
              <div class="overflow-x-hidden rounded-2xl relative">
                <img
                  class="h-40 rounded-2xl"
                  src="https://i5.walmartimages.com/asr/fe50da6b-3915-4ac3-ad49-010fc1b721f9.75053958ffd5d16738faa5bbb05d4af4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 group-hover:opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </p>
              </div>
              <div class="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                  <p class="text-lg font-semibold text-gray-900 mb-0">
                    $349.00
                  </p>
                  <p class="text-md text-gray-800 mt-0">
                    Was $349.00 Apple MacBook Air, 13.3 inch, Intel Core i5, 4GB
                    RAM, 128GB SSD.
                  </p>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="bg-sky-200 text-blue-600 text-sm max-w-fit mt-1">
                    3+ day shipping
                  </p>
                </div>
              </div>
            </div>
            <div class="relative max-w-sm w-60 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
              <div class="overflow-x-hidden rounded-2xl relative">
                <img
                  class="h-40 rounded-2xl"
                  src="https://i5.walmartimages.com/asr/765e28f4-97e0-4fb0-bec5-d6abfedf2132.b105208406ffb6f222692e460aa00722.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 group-hover:opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </p>
              </div>
              <div class="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                  <p class="text-lg font-semibold text-gray-900 mb-0">
                    $349.00
                  </p>
                  <p class="text-md text-gray-800 mt-0">
                    Was $349.00 Apple MacBook Air, 13.3 inch, Intel Core i5, 4GB
                    RAM, 128GB SSD.
                  </p>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-black-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="bg-sky-200 text-blue-600 text-sm max-w-fit mt-1">
                    3+ day shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 cursor-pointer max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={image} />
          </div>
          <h5 className="py-5 mx-4 font-bold text-lg">Shop TVs by size</h5>
          <div className="flex container justify-between ">
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-708d/k2-_79d64fb0-dd9f-4307-b9ec-936c0a453830.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">All TV sizes</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-eeaa/k2-_29bb5e15-675d-4e3a-8e9a-7be04078765f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">75+ "TVs</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-2267/k2-_9a0d0793-4621-4534-acc5-c631005ff963.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">65" TVs </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-1319/k2-_8b103254-36ef-4d44-85e2-7d443a9494b1.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">55" TVs</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-5b78/k2-_4e4017b3-3d0b-45b6-9132-f559158f9e26.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">50" TVs</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-46b7/k2-_aca1a9ec-ff47-4f33-9409-2c9016d64f50.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className=""
                width="133px"
                height="133px"
              />
              <p className="text-slate-600">32" TVs</p>
            </div>
          </div>
          <div className="mt-8 py-5 cursor-pointer max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={image2} />
          </div>
          <h5 className="py-5 mx-4 font-bold text-lg">Explore more</h5>
          <div className=" flex justify-around gap-6 mb-8">
            <div className="card_left ">
              <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-3818/k2-_59064259-2a90-4a93-b79e-3c6d9efd45a2.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Walmart Restored
                    </h5>
                  </a>
                  <p class="mb-8 font-normal text-gray-500 dark:text-gray-400">
                    Tech finds for your spring adventures.
                  </p>
                  <a
                    href="#"
                    class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                  >
                    shop now
                  </a>
                </div>
              </div>
            </div>
            <div className="card_right ">
              <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-7cef/k2-_8965f6f9-9746-42fb-b4e0-7ae734eef2a5.v1.gif?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Top Tech Smart Prices
                    </h5>
                  </a>
                  <p class="mb-8 font-normal text-gray-500 dark:text-gray-400">
                    Top gear for your tech-loving some-bunny.
                  </p>
                  <a
                    href="#"
                    class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                  >
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5  flex justify-between">
            <h5 className="font-bold text-lg">Shop by brand</h5>
            <h1 className="text-right underline">see less</h1>
          </div>
          <div className="flex container justify-evenly ">
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-4b25/k2-_53bd6725-148a-42d4-bc39-ed691754f8d4.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Apple</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-de8a/k2-_04aa2056-2c2d-4477-a5f4-e4cdcf3c7833.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Sumsung</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-d25e/k2-_734d41db-54e4-4e5a-a148-638300152f77.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Sonos</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-16e2/k2-_2646b9c0-3500-4909-9949-47a9addfafff.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Bose</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-b87e/k2-_62c61043-524a-4b21-bc54-922756b51704.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Microsoft</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-f76b/k2-_c2ee3700-19b9-4a00-a3f5-aff7477f1262.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Canon</p>
            </div>
          </div>
          <div className="flex container justify-evenly ">
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-f403/k2-_f0628b22-3b52-47fd-a228-c93b3a33f9ac.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">LG</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-2c70/k2-_16f04f9c-b85c-4198-bb7d-088c453ac40a.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">GoPro</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-5db4/k2-_10203a81-57cb-45d2-b47b-e55538c727f4.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Sony</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-3168/k2-_b2440daf-cdf2-4033-81e9-cfc8d6f76ab9.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">VAIO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-3bae/k2-_c39d28a2-2f4e-42be-8461-597cc10def9b.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Fitbit</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-a569/k2-_a3017117-b53e-418d-975d-37512ad87ce2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                className="w-100 h-auto"
                width="133px"
                height="200px"
              />
              <p className="text-slate-600 ">Onn.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="About_Electronics w-full">
        <div className="px-14 mx-14 flex items-start flex-col">
          <h5 className="font-bold text-xl mt-9 mb-5">About Electronics</h5>
          <h1 className="text-right underline mb-8">show more</h1>
        </div>
        {/* <div className="bg-sky-200 flex items-center flex-col">
          <h5 className=" py-8">We'd love to hear what you think!</h5>
          <button className="rounded-full bg-white p-2 border border-black">
            Give feedback
          </button>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Electronics;
