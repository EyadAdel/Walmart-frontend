import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
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
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { countTotalPrice } from "../../Services/Services";
import { BsBoxArrowDown } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import "./Navbar.css"
import axiosConfig from "../../axiosConfig/axiosConfig";



function Navbar() {

  let prod = useSelector((state) => state.cartItems);
  let [totalPrice, Quantity] = countTotalPrice(prod)
  const [inputdata, setInputData] = useState('')
  const [searchDataResult, setSearchDataResult] = useState([])
  const navigate = useNavigate();

  const FetchDataSearch = (value) => {
    axiosConfig.get('/product').then((res) => {
      //console.log(res)
      const ReturnedData = res.data.products.filter((product) => {
        return (product && product.name.en && product.name.en.toLowerCase().includes(value));
      })
      //console.log(ReturnedData)
      setSearchDataResult(ReturnedData)
    }).catch((err) => {
      console.log(err);
    })

  }

  const handleChange = (value) => {
    console.log(value);
    setInputData(value);
    FetchDataSearch(value);
  }
  return (
    <div className="bg-[#017cc2] sticky top-0 z-10">
      <div className="text-white grid grid-cols-3">
        {/* Left */}
        <div className="col-span-1 items-center gap-x-4 flex flex-left">
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="" className="h-24" />
          </div>

          <div
            onClick={() => {
              navigate("/electronics");
            }}
            className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer"
          >
            <TiThLargeOutline />
            <p>Departments</p>
          </div>
          <div className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer">
            <TiPointOfInterest />
            <p>Services</p>
          </div>
        </div>
        {/* Middle */}
        <div className="col-span-1 flex justify-center flex-col">
          <div className="flex">
            <input
              type="search"
              className="rounded-full text-black w-full focus:rounded-none outline-1 h-auto"
              placeholder="Search everything at Walmart online and in store"
              onChange={(e) => { handleChange(e.target.value) }}
              value={inputdata}
            />
            <div className="bg-[#ffc220] rounded-full w-7 h-7 relative right-9 top-2">
              <BsSearch className="text-black relative top-1 left-1.5"/>
            </div>
          </div>
          <div>
            {inputdata && <div id="SearchResultList">
              {searchDataResult.map((result) => {
                return <div className='flex justify-between'>
                  <NavLink to={`/search/${result.departmentID}`} className='no-underline searchListResult'>
                    <div key={result._id} className=''>
                      <span>{result.name.en}</span>
                    </div>
                  </NavLink>
                </div>
              })}
            </div> 
          }
          </div>
        </div>
        {/* Right */}
        <div className="col-span-1 flex justify-end mr-7">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            type="button"
            className="flex items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer"
          >
            <AiOutlineHeart />
            <div className="">
              <p className="text-xs font-semibold">Reorder</p>
              <h5 className="text-base">My Items</h5>
            </div>
          </button>
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
          >
            <ul
              class=" text-center ps-6 py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li className="text-lg flex">
                <BsBoxArrowDown className=" mt-3" />
                <a
                  href="/reorder"
                  class="block px-4 py-2 hover:underline dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reorder
                </a>
              </li>
              <li className="text-lg flex ">
                <AiOutlineHeart className=" mt-3" />
                <a
                  href="/lists"
                  class="block px-4 py-2 hover:underline dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  lists
                </a>
              </li>
              <li className="text-lg flex ">
                <GiPresent className=" mt-3" />
                <a
                  href="/registries"
                  class="block px-4 py-2 hover:underline dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Registries
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center mx-8 gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] px-3 rounded-full cursor-pointer">
            <AiOutlineUser />
            <div
              className=""
              onClick={() => {
                navigate("/login");
              }}
            >
              <p className="text-xs font-semibold">Sign In</p>
              <h5 className="text-base">Account</h5>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/order");
            }}
            className="relative flex flex-col items-center gap-x-1 font-semibold	text-[18px] hover:bg-[#155e89] p-3 rounded-full cursor-pointer"
          >
            <CgShoppingCart className="mt-5"/>
            <p className="text-xs">{totalPrice}</p>
            <p className="absolute h-5 w-5 right-2 top-4 text-xs text-black border-black border-2  border-solid	 text-center bg-[#ffc220] rounded-full">
              {Quantity}
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
