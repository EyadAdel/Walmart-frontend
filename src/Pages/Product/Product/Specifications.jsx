import React from "react";
import "./product.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerReview from "./CustomerReview";

export default function Specifications() {
  return (
    <>
    <div className="Specifications_text py-3">
      <div className="">
        <p>Specifications</p>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">Features</h1>
          <p>
            DSLR quality photos & full HD movies, Powerful 18 Megapixel sensor,
            Precise auto focus
          </p>
        </div>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">Brand</h1>
          <p>Canon</p>
        </div>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">Manufacturer Part Number</h1>
          <p>2628C029</p>
        </div>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">Manufacturer</h1>
          <p>Canon</p>
        </div>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">Model</h1>
          <p>T100</p>
        </div>
        <div className="pt-2">
          <h1 className="fw-bold fs-6">
            Assembled Product Dimensions (L x W x H)
          </h1>
          <p>5.08 x 7.33 x 3.04 Inches</p>
        </div>
        <hr className="mt-3 opacity-10" />
        <div className="py-3 ">
          <p>Warranty</p>
          <div className="pt-2">
            <h1 className="fw-bold fs-6">Warranty length</h1>
            <p>1-year warranty</p>
          </div>
          <div className="pt-2">
            <h1 className="fw-bold fs-6">Warranty information</h1>
            <p>Limited 1 year warranty</p>
          </div>
        </div>
        <hr className="mt-3 opacity-10" />
        <div className=" pl-3 d-flex">
          <span className="pt-1.5 ">
            <MdChatBubbleOutline />
          </span>
          <span className="">
            <a href="#kdla" className="report_link underline text-black">
              Report incorrect product information
            </a>
          </span>
        </div>
        <div className="pt-3 ">
          <div className="master_card d-flex p-2 justify-content-center">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-4cbf/k2-_19bccbbb-b02e-43ca-b47f-54e066d59b36.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF"
              alt=""
              className="style_master_card"
            />
            <div className="pt-2">
              <span className=" earn_price">Earn $17.43 on this item.</span>
            </div>
            <p className="pt-2.5">
              See if you're pre-approved with no credit risk.
            </p>
          </div>
        </div>
        <div className="d-flex">
        <div className="py-3 col d-flex">
          <div>
            <header className="">
              <h2 className="fw-bold fs-4">Customer reviews & ratings</h2>
            </header>
            <div className="fw-bold">
              <span className="font_s">4.5</span>
              out of <span className="font_s ">5</span>
              <span className="d-flex -d-inline fs-7 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <a href="#fgfdg">
                  <p className="underline">(193 reviews)</p>
                </a>
              </span>
              <div className="pt-2 d-flex ">
                <div className="pr-3">
                  <button
                    type="button"
                    class="see_all_reviews_btn btn btn-outline-dark  fw-bold border-2 border-dark rounded-pill fs-7"
                  >
                    See all reviews
                  </button>
                </div>
                <button
                  type="button"
                  class=" addToCart_btn rounded-pill fs-6"
                >
                  Write a review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fs-7 pt-5" >
            <span className="d-flex "><a href="#lgdjl" className="underline"> 5 stars</a> 194 <span className="pt-2 pl-3"><ProgressBar now={60} className="p_width h-50"/></span></span>
            <span className="d-flex "><a href="#lgdjl" className="underline"> 4 stars</a> 194 <span className="pt-2 pl-3"><ProgressBar now={20} className="p_width h-50"/></span></span>
            <span className="d-flex "><a href="#lgdjl" className="underline"> 3 stars</a> 194 <span className="pt-2 pl-3"><ProgressBar now={10} className="p_width h-50"/></span></span>
            <span className="d-flex "><a href="#lgdjl" className="underline"> 2 stars</a> 194 <span className="pt-2 pl-3"><ProgressBar now={14} className="p_width h-50"/></span></span>
            <span className="d-flex "><a href="#lgdjl" className="underline"> 1 stars</a> 194 <span className="pt-2 pl-3"><ProgressBar now={16} className="p_width h-50"/></span></span>
          </div>
      </div>
      </div>
      <hr className="mt-3 opacity-10" />
    </div>
    <CustomerReview/>
    </>
  );
}