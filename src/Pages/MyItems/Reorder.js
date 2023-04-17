import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { removeFavorirts } from "../../store/actions/favorites";
import { useSelector, useDispatch } from "react-redux";
import "./Myitems.css";

export default function Reorder() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // let favorites = useSelector((state) => state.favorites.fav);
  // const dispatch = useDispatch();

  // const handleRemoveFavorite = (movie) => {
  //   dispatch(removeFavorirts(movie));
  // };
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
            <li className="p-1  myitems_list border-b-4 border-sky-500">
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
        <div className="flex">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-743d/k2-_16fa2300-0a01-473e-9c05-6fe7951a4adc.v1.png"
              width={100}
              height={100}
              alt=""
            />
            <p className="text-lg py-9 px-3">
              Your essentials will show up here for quick and easy reordering
            </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
