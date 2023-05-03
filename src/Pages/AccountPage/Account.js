import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiReceipt } from "react-icons/bi";
import { BsWallet2, BsTruckFront, BsBoxArrowInDown } from "react-icons/bs";
import { TbBrandWalmart, TbShieldChevron } from "react-icons/tb";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineGift,
  AiOutlineLock,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TiHeartHalfOutline } from "react-icons/ti";
import { CiPill } from "react-icons/ci";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { VscNotebook } from "react-icons/vsc";
import { GiChoice } from "react-icons/gi";
import { IoReceiptOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { BsBoxArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { ReactComponent as CreditCardImg } from "../../assets/AccountPage-Images/credit.svg";
import { ReactComponent as EBTcard } from "../../assets/AccountPage-Images/EBT.svg";
import GiftImage from "../../assets/AccountPage-Images/gift card.png";
import BenefitImage from "../../assets/AccountPage-Images/benefit card.png";
import ListImage from "../../assets/AccountPage-Images/lists.webp";
import { RiStore2Line } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import StoreImage from "../../assets/AccountPage-Images/walmart store.png";
import pharmacy from "../../assets/AccountPage-Images/pharmacy.png";
import autocare from "../../assets/AccountPage-Images/autocare center.png";
import customCake from "../../assets/AccountPage-Images/custom cake.png";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AddAddressForm from "../../Components/addressForm/addressForm";
import axios from "axios";

function Account() {
  const customer = JSON.parse(localStorage.getItem("CustomerDetails"));

  const [isAddAddressFormOpen, setIsAddAddressFormOpen] = useState(false);

  const handleAddAddress = async (values) => {
    try {
      const token = localStorage.getItem("Token");

      console.log(token);
      console.log(values);
      // const address = JSON.stringify(values);
      const response = await axios.post(
        "http://localhost:5000/customer/address",
        values,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data); // Do something with the response data
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <>
      <Navbar />
      <section className="mb-10">
        {/* container */}
        <div className="p-4 ml-20 mb-6">
          <Link to="/account" className="text-sm m-2">
            My account
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/home" className="font-bold text-sm m-2">
            Home
          </Link>
        </div>
        <div className="grid grid-cols-4 ml-20">
          <div className="col-span-1 ml-6">
            {/* Sidebar */}
            <div>
              <h1 className="font-bold text-2xl mb-2">
                Hi, {customer.firstName}
              </h1>
              <p className="w-64 text-xs mb-2">
                Thanks for being a Walmart customer for 1 month
              </p>
              <div className="p-1 border-b"></div>
            </div>
            <div>
              <ul className="py-4">
                <li className="pb-5">
                  <BiReceipt className="inline-block" />
                  <a href="" className="pl-3 text-sm">
                    Purchase history
                  </a>
                </li>
                <li className="pb-5">
                  <BsWallet2 className="inline-block" />
                  <a href="" className="pl-3 text-sm">
                    Wallet
                  </a>
                </li>
                <li>
                  <TbBrandWalmart className="inline-block" />
                  <a href="" className="pl-3 text-sm">
                    Walmart+
                  </a>
                </li>
              </ul>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">Manage Account</h2>
                <ul>
                  <li className="pb-5">
                    <AiOutlineUser className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Personal info
                    </a>
                  </li>
                  <li className="pb-5">
                    <BsTruckFront className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Addresses
                    </a>
                  </li>
                  <li className="pb-5">
                    <RxEnvelopeClosed className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Communication & privacy
                    </a>
                  </li>
                  <li>
                    <TiHeartHalfOutline className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Giving & impact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">My items</h2>
                <ul>
                  <li className="pb-5">
                    <BsBoxArrowInDown className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Reorder
                    </a>
                  </li>
                  <li className="pb-5">
                    <AiOutlineHeart className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Lists
                    </a>
                  </li>
                  <li>
                    <AiOutlineGift className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Registries
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">
                  Subscriptions & plans
                </h2>
                <ul>
                  <li>
                    <TbShieldChevron className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Protection plans
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">Other Acounts</h2>
                <ul>
                  <li className="pb-5">
                    <CiPill className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Pharmacy
                    </a>
                  </li>
                  <li className="pb-5">
                    <MdOutlinePhotoSizeSelectActual className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Photo
                    </a>
                  </li>
                  <li>
                    <VscNotebook className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Ebooks
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">Privacy</h2>
                <ul>
                  <li className="pb-5">
                    <AiOutlineLock className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="pb-5">
                    <GiChoice className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Your Privacy Choices
                    </a>
                  </li>
                  <li>
                    <IoReceiptOutline className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Request My Personal Information
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>

              <div className="py-4">
                <h2 className="font-bold text-lg pb-5">Customer Service</h2>
                <ul>
                  <li className="pb-5">
                    <FiHelpCircle className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Help
                    </a>
                  </li>
                  <li>
                    <AiOutlineInfoCircle className="inline-block" />
                    <a href="" className="pl-3 text-sm">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-1 border-b"></div>
              <h2 className="py-4">
                <BsBoxArrowRight className="inline-block" />
                <a href="" className="pl-3 text-sm">
                  Sign Out
                </a>
              </h2>
            </div>
          </div>

          <div className="col-span-3 border-l">
            {/* Right content */}
            <h1 className="font-bold text-3xl px-5">Welcome to you Account</h1>
            {/* Purchase History */}
            <div className="bg-sky-50 h-18 rounded-lg shadow-gray-300 shadow-md mt-16 ml-5 mr-28">
              <div className="flex justify-between items-center p-5">
                <div className="flex">
                  <span className="pt-2 pr-4 text-2xl">
                    <IoReceiptOutline />
                  </span>
                  <h2 className="font-bold text-xl pt-1">Purchase history</h2>
                </div>
                <IoIosArrowForward />
              </div>
            </div>
            {/* Wallet */}
            <div className="bg-sky-50 h-72 rounded-lg shadow-gray-300 shadow-md ml-5 mr-28 mt-12">
              <div className="flex justify-between items-center py-2 px-5">
                <div className="flex">
                  <span className="pt-2 pr-4 text-xl">
                    <BsWallet2 />
                  </span>
                  <h2 className="font-bold text-xl pt-1">Wallet</h2>
                  <span className="py-1 ml-2 text-lg">| Payement methods</span>
                </div>
                <IoIosArrowForward />
              </div>
              <p className="text-sm pl-5 ml-5">
                Learn more about <a href="">payment methods</a> we accept.
              </p>
              <div className="grid grid-cols-4">
                <div className="bg-white h-28 rounded-lg shadow-gray-300 shadow-md mt-5 ml-5">
                  <div className="flex flex-col items-center">
                    <CreditCardImg className="mt-3" />
                    <h2 className="font-bold text-sm pt-4">
                      Credit/debit card
                    </h2>
                  </div>
                </div>
                <div className="bg-white h-28 rounded-lg shadow-gray-300 shadow-md mt-5 ml-5">
                  <div className="flex flex-col items-center">
                    <img src={GiftImage} className="w-20 mt-3" />
                    <h2 className="font-bold text-sm pt-2">Gift card</h2>
                  </div>
                </div>
                <div className="bg-white h-28 rounded-lg shadow-gray-300 shadow-md mt-5 ml-5">
                  <div className="flex flex-col items-center">
                    <EBTcard className="w-16 h-16 m-1" />
                    <h2 className="font-bold text-sm w-36 text-center">
                      Electronic Benefits Transfer
                    </h2>
                  </div>
                </div>
                <div className="bg-white h-28 rounded-lg shadow-gray-300 shadow-md mt-5 mx-5">
                  <div className="flex flex-col items-center">
                    <img src={BenefitImage} className="w-20 mt-3" />
                    <h2 className="font-bold text-sm pt-2">Benefit card</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* Account Info */}
            <div className="shadow-gray-300 shadow-md mt-6 ml-5 mr-28 rounded-lg">
              <div className="bg-sky-50 h-18 rounded-t">
                <div className="flex justify-between items-center p-5">
                  <div className="flex">
                    <span className="pt-2 pr-4 text-2xl">
                      <AiOutlineUser />
                    </span>
                    <div>
                      <h2 className="font-bold text-xl pt-1">Account info</h2>
                      <p className="text-md">
                        Addresses, contact information and password
                      </p>
                    </div>
                  </div>
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="grid grid-cols-2 border-b">
                <div className="border-r">
                  <div className="ml-5 my-5 ">
                    <h2 className="font-bold text-lg">Email Address</h2>
                    <p>{customer.email}</p>
                  </div>
                </div>
                <div className="my-5 ml-5">
                  <h2 className="font-bold text-lg">Phone Number</h2>
                  <p>
                    <a href="">Add phone number</a>
                  </p>
                </div>
              </div>

              <div className="ml-5 mt-5 flex justify-between">
                <div className="mb-7">
                  <h2 className="font-bold text-lg">Add an address</h2>
                  <p>
                    Adding an address allows for quicker checkout and
                    aproximation of delivery times
                  </p>
                </div>
                {/* <button class="h-8 mr-5 px-4 py-1 text-sm font-bold rounded-full border border-black hover:border-2">
                  Add an Address
                </button> */}
                <div>
                  <button
                    onClick={() => setIsAddAddressFormOpen(true)}
                    class="h-8 mr-5 px-4 py-1 text-sm font-bold rounded-full border border-black hover:border-2"
                  >
                    Add an Address
                  </button>
                  <AddAddressForm
                    isOpen={isAddAddressFormOpen}
                    onClose={() => setIsAddAddressFormOpen(false)}
                    onSubmit={handleAddAddress}
                  />
                </div>
              </div>
            </div>
            {/* lists */}
            <div className="shadow-gray-300 shadow-md mt-6 ml-5 mr-28 rounded-lg">
              <div className="bg-sky-50 h-18 rounded-t">
                <div className="flex justify-between items-center p-5">
                  <div className="flex">
                    <span className="pt-2 pr-4 text-2xl">
                      <AiOutlineHeart />
                    </span>
                    <div>
                      <h2 className="font-bold text-xl pt-1">Lists (1)</h2>
                    </div>
                  </div>
                  <IoIosArrowForward />
                </div>
              </div>

              <div className="ml-5 mt-5 grid grid-cols-2">
                <div className="flex">
                  <img src={ListImage} className="w-16 ml-5" />
                  <div className="ml-5">
                    <h2 className="font-bold text-md">nardien's List</h2>
                    <p>0 items - Primary</p>
                  </div>
                </div>
                <div className="ml-40 flex">
                  <a
                    href=""
                    className="m-5 text-sm border-b border-black hover:border-none hover:text-blue-900"
                  >
                    + Create new list
                  </a>
                  <button class="h-8 mt-3 mr-5 px-4 py-1 text-sm font-bold rounded-full border border-black hover:border-2">
                    View list
                  </button>
                </div>
              </div>
            </div>
            {/* walmart store and popular services */}
            <div className="grid grid-cols-2">
              {/* walmart store  */}
              <div className="shadow-gray-300 shadow-md mt-6 ml-5 mr-20 rounded-lg">
                <div className="bg-sky-50 h-18 rounded-t">
                  <div className="flex justify-between items-center p-5">
                    <div className="flex">
                      <span className="pt-2 pr-4 text-2xl">
                        <RiStore2Line />
                      </span>
                      <div>
                        <h2 className="font-bold text-xl pt-1">
                          Your selected Walmart store
                        </h2>
                      </div>
                    </div>
                    <IoIosArrowForward />
                  </div>
                </div>

                <div className="ml-5 mt-5 grid grid-cols-2">
                  <div>
                    <h1 className="font-bold text-sm">
                      Sacramento Supercenter
                    </h1>
                    <p className="text-sm">8915 Gerber Road, CA 95829</p>
                    <button class="h-8 w-44 mt-16 px-4 py-1 text-sm font-bold rounded-full border border-black hover:border-2">
                      Update store
                    </button>
                  </div>
                  <div>
                    <img src={StoreImage} className="w-36 ml-8 mb-6 " />
                  </div>
                </div>
              </div>

              {/*  popular services */}
              <div className="shadow-gray-300 shadow-md mt-6 mr-28 rounded-lg">
                <div className="bg-sky-50 h-18 rounded-t">
                  <div className="flex justify-between items-center p-5">
                    <div className="flex">
                      <span className="pt-2 pr-4 text-2xl">
                        <HiOutlineSquares2X2 />
                      </span>
                      <div>
                        <h2 className="font-bold text-xl pt-1">
                          Discover popular services
                        </h2>
                      </div>
                    </div>
                    <IoIosArrowForward />
                  </div>
                </div>

                <div className="mx-5 mt-5 grid grid-cols-3 gap-10">
                  <div>
                    <img src={pharmacy} />
                    <p className="mt-3 text-center">Pharmacy</p>
                  </div>
                  <div>
                    <img src={autocare} />
                    <p className="mt-3 text-center">Auto Care Center</p>
                  </div>
                  <div>
                    <img src={customCake} />
                    <p className="mt-3 w-28">Custom cake</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Account;
