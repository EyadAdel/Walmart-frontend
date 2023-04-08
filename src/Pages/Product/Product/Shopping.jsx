import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsShop } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";

export default function Shopping() {
  return (
    <div id="shopping" className="col h-100 py-2">
              <div className="row d-flex">
                <p className="p-3 col-4">
                  <span>
                    <span
                      className="border d-flex justify-content-center border-primary fs-6"
                      aria-hidden="false"
                    >
                      Best seller
                    </span>
                  </span>
                </p>
                <span className="col-8 mt-3 d-flex justify-content-end">
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
              </div>
              <h1 class="fw-semibold dark-gray mt-1 mb-2 fs-3" itemprop="name">
                Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit,
                18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card
                and Live View Shooting
              </h1>
              <div className="pl-3 pt-2 d-flex d-inline">
                <div className="d-flex d-inline pt-1">
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
                <span className="fs-7 pl-1">(5)</span>
                <a className="fs-7 underline pl-1" href="#klmk">
                  193 reviews
                </a>
              </div>
              <div className="py-2 px-3">
                <span
                  itemprop="price"
                  aria-hidden="false"
                  className="fs-2 fw-semibold"
                >
                  $348.50
                </span>
              </div>
              <div className="fs-6 d-flex px-2  d-inline">
                <span>
                  <span className="pr-2"> $23/mo </span>{" "}
                  <span class="b"> </span>
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
              <div className="fs-7 p-2">
                <span>Price when purchased online</span>
              </div>
              <div className="pl-2 py-2 d-flex">
                <div className="">
                  <button
                    className="border fw-semibold py-2 px-3 fs-6 border-2 border-dark rounded-pill"
                    type="button"
                    aria-live="polite"
                    data-testid="buy-now-wrapper"
                    id="buy_btn"
                  >
                    <span aria-hidden="true" className="p-2">
                      Buy now
                    </span>
                  </button>
                </div>
                <div className="pl-4">
                  <button
                    className="addToCart_btn border fw-semibold py-2 px-3 fs-6 border-2 rounded-pill"
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
              <hr className="mt-3 opacity-10" />
              <div className="fs-6 pl-2 pt-2 d-flex">
                <span className="mx-2 fs-4">
                  <CiDeliveryTruck />
                </span>
                <div>
                  <span>
                    Free shipping,{" "}
                    <span className="fw-bold ">arrives by Mon, Apr 3</span> to{" "}
                  </span>
                  <div className="di">
                    <button
                      className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                      type="button"
                      aria-label="Sacramento, 95829, change store"
                      data-qm-mask="true"
                    >
                      Sacramento, 95829
                    </button>
                  </div>
                  <div className="pt1">
                    <span className="b">Want it faster? </span>
                    <button
                      className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                      type="button"
                    >
                      Add an address
                    </button>{" "}
                    to see options{" "}
                    <button
                      className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                      type="button"
                    >
                      More options
                    </button>
                  </div>
                </div>
              </div>

              <div className="fs-6 pl-2 pt-2 d-flex">
                <span className="mx-2 fs-4">
                  <BsShop />
                </span>
                <div>
                  <span>
                    Sold and shipped by{" "}
                    <span className="fw-bold ">6AVE Electronics</span> to{" "}
                  </span>
                  <div className="d-flex">
                    <div className="d-flex d-inline pt-1">
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
                      className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                      type="button"
                    >
                      1095 seller reviews
                    </button>
                  </div>
                  <div className="r_underline">
                    <button
                      className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                      type="button"
                    >
                      View seller information
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-3 opacity-10" />
              <div className="d-flex r_underline">
                <div className="fs-6 pl-2 pt-2 d-flex my-2  justify-content-start">
                  <a href="#kdsfll">
                    <AiOutlineHeart size={20} />
                  </a>
                </div>
                <div className="pl-3 py-3">
                  <button
                    className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                    type="button"
                  >
                    Add to list
                  </button>
                </div>
                <div className="  fs-6 pl-5 pt-2 d-flex my-2">
                  <a href="#kdsfll">
                    <SlPresent size={20} />
                  </a>
                </div>
                <div className=" pl-3 py-3">
                  <button
                    className="bg-transparent bn lh-solid pa0 sans-serif tc underline inline-button black pointer f6"
                    type="button"
                  >
                    Add to regiscy
                  </button>
                </div>
              </div>
              <hr className="mt-3 opacity-10" id="v-line" />
              <div className="mx-2 my-2 ">
                <h6 className="fw-bold">More seller options (4)</h6>
                <p className="pt-3">Starting from $369.99</p>
                <a href="#fgff" className="r_underl text-black">
                  Compare all sellers
                </a>
              </div>
            </div>
  )
}
