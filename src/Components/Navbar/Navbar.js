import React from "react";
import logo from "../../assets/logo.png";
import headerLogo from "../../assets/header-img.png";
import { TiThLargeOutline } from "react-icons/ti";
import { TiPointOfInterest } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiHome } from "react-icons/bi";

function Navbar() {
  return (
    <div className="bg-[#017cc2] w-screen fixed  z-10">
      <div className=" text-white flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-x-4">
          <div className="cursor-pointer">
            <img src={logo} alt="" className="h-24" />
          </div>

          <div className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer">
            <TiThLargeOutline />
            <p className="">Departments</p>
          </div>
          <div className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer">
            <TiPointOfInterest />
            <p className="">Services</p>
          </div>
        </div>
        {/* Middle */}
        <div className="relative  flex flex-1 items-center mx-6">
          <input
            type="search"
            className="rounded-full py-1.5  text-black w-full pl-3 focus:rounded-none outline-1"
            placeholder="Search everything at Walmart online and in store"
          />
          <div className="absolute p-1.5 bg-[#ffc220] right-1.5 rounded-full">
            <BsSearch className="text-black" />
          </div>
        </div>
        {/* Right */}
        <div className="flex mr-7">
          <div className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer">
            <AiOutlineHeart />
            <div className="">
              <p className="text-xs font-semibold">Reorder</p>
              <h5 className="text-base">My Items</h5>
            </div>
          </div>
          <div className="flex items-center mx-8 gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] px-3 rounded-full cursor-pointer">
            <AiOutlineUser />
            <div className="">
              <p className="text-xs font-semibold">Sign In</p>
              <h5 className="text-base">Account</h5>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer">
            <CgShoppingCart />
            <p className="text-xs">$0.00</p>
            <p className="absolute  h-5 w-5 right-2 top-1 text-xs text-black border-black border-2  border-solid	 text-center bg-[#ffc220] rounded-full">
              0
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center cursor-pointer bg-[#017cc2] mt-[1px] text-white px-3 py-2 border-t border-white border-solid ">
        <div className="flex items-center text-[14px]">
          <img src={headerLogo} alt="" className="h-6 w-6" />
          <p className="flex items-center ml-3">
            <span className="font-bold">How do you want your items?</span>{" "}
            <IoIosArrowDown className="ml-3" /> <span className="ml-3">|</span>{" "}
            <CiLocationOn className="mx-3" />
            Sacramento,
            <BiHome className="mx-3" /> 95829 Sacramento Supercenter
          </p>
        </div>
        <div className=" font-semibold text-[14px]">
          <ul className="flex">
            <li className="mx-2.5">
              <a href="/">Deals</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Easter</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Deals</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Grocery & essentials</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Home</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Tech</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Fashion</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Auto</a>
            </li>
            <li className="mx-2.5">
              <a href="/">Walmart+</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;