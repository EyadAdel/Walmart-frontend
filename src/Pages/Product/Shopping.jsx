import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import "./Product.css";

export default function Shopping() {
  return (
    <div id="shopping" className="pl-4 pr-8 py-2">
      <div className="flex justify-between  mt-4">
        <p className=" text-sm">
            <span className="border-solid border-[1px] p-1	rounded-none	text-blue-600 border-blue-600">
              Best seller
          </span>
        </p>
        <span className="flex justify-content-end">
          <a href="#kdsfll">
            <AiOutlineHeart size={30} />
          </a>
        </span>
      </div>
      <div class="">
        <a
          class="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button fs-6"
          href="/c/brand/canon"
        >
          Canon
        </a>
        <h5 class="font-semibold dark-gray my-2 text-[20px]" itemprop="name">
          Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18
          Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live
          View Shooting
        </h5>
      </div>

      <div className="text-sm pt-2 flex d-inline">
        <span className="flex">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </span>
        <span className="pl-1">(5)</span>
        <a className="underline pl-1" href="#klmk">
          193 reviews
        </a>
      </div>
      <div className="py-2 px-3">
        <span itemprop="price" aria-hidden="false" className="text-[30px] font-semibold">
          $348.50
        </span>
      </div>
      <div className="text-sm flex px-2 ">
        <span>
          <span className="pr-2 font-bold"> $23/mo </span> <span class="b"> </span>
        </span>
        <span>with</span>
        <img
          loading="lazy"
          className="mx-1"
          width="43"
          height="17"
          alt="Affirm"
          src="https://cdn-assets.affirm.com/images/black_logo-white_bg.jpg"
        />
        <button className="pl-1" type="button" aria-label="Learn how">
          Learn how
        </button>
      </div>
      <div className="text-sm p-2">
        <span>Price when purchased online</span>
      </div>
      <div className="pl-2 py-2 flex">
        <div className="pl-4">
          <button
            className="addToCart_btn border fw-semibold py-2 px-3 fs-6 border-2 rounded-full"
            type="button"
            aria-live="polite"
            data-testid="buy-now-wrapper"
            id=""
          >
            <span aria-hidden="true" className="p-2">
              Add to cart
            </span>
          </button>
        </div>
      </div>
      <hr className="mt-3" />
      <div className=" pl-2 pt-2 flex">
        <span className="mr-4 text-lg">
          <CiDeliveryTruck />
        </span>
        <div className="text-sm">
          <span>
            Free shipping,{" "}
            <span className="font-bold ">arrives by Mon, Apr 3</span> to{" "}
          </span>
          <div className="">
            <button
              className="r_underl underline inline-button black pointer f6"
              type="button"
              aria-label=" Sacramento, 95829, change store"
              data-qm-mask="true"
            >
              Sacramento, 95829
            </button>
          </div>
          <div className="">
            <span className="font-bold text-sm">Want it faster? </span>
            <a
              className="r_underl underline inline-button black"
              href="#dlksmf"
              type="button"
            >
              Add an address
            </a>{" "}
            to see options{" "}
            <button
              className="r_underl underline inline-button black pointer f6"
              type="button"
            >
              More options
            </button>
          </div>
        </div>
      </div>

      <div className=" pl-2 pt-2 flex">
        <span className="mr-4 text-lg">
          <BsShop />
        </span>
        <div className="text-sm">
          <span>
            Sold and shipped by{" "}
            <span className="font-bold "> JumboBuys</span> <span className="font-bold">Pro seller</span>
          </span>
          <div className="flex">
            <div className="flex pt-1">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
            </div>
            <button
              className=" pl-1 sans-serif tc underline  pointer "
              type="button"
            >
              40 seller reviews
            </button>
          </div>
          <div className="">
            <button
              className="r_underl underline inline-button pointer "
              type="button"
            >
              View seller information
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-3 " />
      <div className="flex ">
        <div className=" pl-2 pt-2 flex my-2  justify-content-start">
          <a href="#kdsfll">
            <AiOutlineHeart size={20} />
          </a>
        </div>
        <div className="pl-3 py-3">
          <button
            className="r_underline  underline inline-button black pointer f6"
            type="button"
          >
            Add to list
          </button>
        </div>
        <div className="pl-5 pt-2 flex my-2">
          <a href="#kdsfll">
            <SlPresent size={20} />
          </a>
        </div>
        <div className=" pl-3 py-3">
          <button
            className="r_underline underline inline-button black pointer f6"
            type="button"
          >
            Add to regiscy
          </button>
        </div>
      </div>
      <hr className="mt-3 " />
      <div className="mx-2 my-2 ">
        <h6 className="font-bold">More seller options (4)</h6>
        <p className="pt-3">Starting from $369.99</p>
        <a href="#fgff" className="r_underl text-black">
          Compare all sellers
        </a>
      </div>
    </div>
  );
}
