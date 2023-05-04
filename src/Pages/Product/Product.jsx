import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosConfig";
import Navbar from "../../Components/Navbar/Navbar";
import "./Product.css";
import { Accordion } from "flowbite-react";
import { BiErrorCircle } from "react-icons/bi";
import Footer from "../../Components/Footer/Footer";
import { Progress } from "flowbite-react";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
// import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { BsShop } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";

import Services from "../../Services/Services";
import cartItems from "../../store/actions/card";

import { addFavorirts,removeFavorirts } from "../../store/actions/favorites";


function Product() {
  const navigate = useNavigate();
  const [zoomStyle, setZoomStyle] = useState({});
  const [product, setProducts] = useState({});
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
  let dispatch = useDispatch();
  let prod = useSelector((state)=>state.cartReducer.cartItems);
  // let prod2 = useSelector((state)=>state.cartItems)
  // console.log(prod2);
  console.log(prod);
  async function getProductDetails() {
    let { data } = await axiosInstance.get(`/product/${id}`);
    console.log(data);
    setProducts(data);
  }
  async function getReviewDetails() {
    let { data } = await axiosInstance.get(`/reviews/product/${id}`);
    console.log(data);
    setReviews(data);
  }
  const [displayedImgSrc, setDisplayedImgSrc] = useState(product.mainPhoto);
  const [hoveredImgSrc, setHoveredImgSrc] = useState("");

  function handleMouseMove(event) {
    const container = event.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    const zoomLevel = 1.6;
    const zoomX = (mouseX / containerRect.width) * 100;
    const zoomY = (mouseY / containerRect.height) * 100;
    const transformValue = `translate(-${zoomX}%, -${zoomY}%) scale(${zoomLevel})`;
    setZoomStyle({ transform: transformValue });
  }

  function handleMouseLeave() {
    setZoomStyle({ transform: "translate(0, 0) scale(1)" });
  }
  // Event handler for when an image is hovered over
  const handleImageHover = (src) => {
    setDisplayedImgSrc(src);
    setHoveredImgSrc(src);
  };

  const handleImageLeave = () => {
    setHoveredImgSrc("");
  };

  useEffect(() => {
    getProductDetails();
    getReviewDetails();
    console.log(product);
  }, []);

  // const favorites = useSelector((state) => state.favorites.fav);
  // const dispatch = useDispatch();

  // console.log(favorites)
  // const handleAddFavorite = (el) => {
  //   dispatch(addFavorirts(el));
  // };

  // const handleRemoveFavorite = (el) => {
  //   dispatch(removeFavorirts(el));
  // };
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-32 py-6">
        {/* Left */}
        <div className="">
          <nav aria-label="breadcrumb" className="">
            <ol className="o_list ">
              <li className="list_element py-1 px-1 text-gray-600  text-sm ">
                <a
                  className="text-black gray underline"
                  itemprop="item"
                  href="/cp/electronics/3944"
                >
                  <span itemprop="name">Electronics</span>
                </a>
                <span aria-hidden="true" className="text-black px-2">
                  /
                </span>
              </li>
              <li className="list_element py-1 px-1 text-gray-600  text-sm ">
                <a
                  className="text-black gray underline"
                  itemprop="item"
                  href="/cp/cameras-camcorders/133277"
                >
                  <span itemprop="name">Cameras &amp; Camcorders</span>
                </a>
                <span aria-hidden="true" className="px-2">
                  /
                </span>
              </li>
              <li className="list_element py-1 px-1 text-gray-600  text-sm ">
                <a
                  className="text-black black"
                  itemprop="item"
                  href="/cp/dslr-cameras/1096663"
                >
                  <span itemprop="name">DSLR Cameras</span>
                </a>
              </li>
            </ol>
          </nav>
          <hr className="mt-3 opacity-10" />
          <div className="flex  justify-center items-center  pt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
              className="h-20 w-20 p-2"
              alt=""
            />
            <p className="flex text-sm">
              <strong>Ship free, no order min*</strong>
              <span>As often as you need.</span>
              <a href="#" className="ml-2 underline cursor-pointer">
                Learn more
              </a>
            </p>
          </div>
          <hr className="mt-3 opacity-10" />
        </div>

        <div className="flex py-4">
          <div className="w-2/3">
            {/* left div */}
            <div className="col-8 ">
              {/* images div */}
              <div className="row flex gap-x-6">
                <div id="image-list" className="col-2 py-2">
                  {product.photos?.map((image) => (
                    <img
                      className="Pimage"
                      key={image}
                      src={image}
                      onMouseOver={() => handleImageHover(image)}
                      onMouseLeave={handleImageLeave}
                      alt=""
                      style={{
                        borderBottom: `5px solid ${
                          hoveredImgSrc === image ? "#0071ce" : "transparent"
                        }`,
                      }}
                    />
                  ))}
                </div>
                <div
                  className="col-10 prevent_flow"
                  id="displayed-img"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={displayedImgSrc}
                    width={612}
                    height={612}
                    alt=""
                    style={zoomStyle}
                  />
                </div>
              </div>
              {/* about the item div */}
              <div className="pt-3 ">
                <h2 className="font-bold text-base">About this item</h2>{" "}
                <div className="overflow-hidden pt-3">
                  <div className="bg-white">
                    <Accordion alwaysOpen={true}>
                      <Accordion.Panel>
                        <Accordion.Title>Product details</Accordion.Title>
                        <Accordion.Content>
                          <div id="h-96 " className="font-sm">
                            <p className="font-semibold my-2">
                              {product.productDetails?.en}
                            </p>
                            <div className=" flex gap-x-2 my-2 h-12 items-start ">
                              <span className="">
                                <BiErrorCircle />
                              </span>
                              <div>
                                <span className="b">
                                  We aim to show you accurate product
                                  information.
                                </span>{" "}
                                Manufacturers, suppliers and others provide what
                                you see here, and we have not verified
                                it.&nbsp;&nbsp;
                                <button
                                  type="button"
                                  className="underline pointer b--none bg-transparent sans-serif dark-gray ph0"
                                  aria-label="See our disclaimer"
                                >
                                  See our disclaimer
                                </button>
                              </div>
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>About the brand</Accordion.Title>
                        <Accordion.Content>
                          <div id="example-collapse-text">
                            <div
                              data-bs-spy="scroll"
                              data-bs-target="#navbar-example2"
                              data-bs-root-margin="0px 0px -40%"
                              data-bs-smooth-scroll="true"
                              className="overflow-y-scroll detial h-96 scrollspy-example bg-body-tertiary p-3 rounded-2"
                              tabindex="0"
                            >
                              <p id="scrollspyHeading1">EOS Rebel T100</p>
                              <div className="pt-3">
                                <img
                                  className="boxStyle"
                                  src="https://content.syndigo.com/asset/1a06a1fb-1df8-42f5-aec3-939e356b439b/600.webp"
                                  alt=""
                                />
                                <h5
                                  id="scrollspyHeading2"
                                  className="font-bold"
                                >
                                  Your Creative Journey Starts Here.
                                </h5>
                                <h6 className="font-bold">
                                  Exclusively at Walmart.
                                </h6>
                                <p className="py-2">
                                  Creating unique stories with DSLR-quality
                                  photos and movies is fun and easy thanks to
                                  the EOS Rebel T100 entry-level camera.
                                  Featuring an 18.0 Megapixel CMOS sensor, Full
                                  HD video, built-in Wi-Fi®* and more, it helps
                                  you capture and share images for high-quality
                                  storytelling that sets you apart.
                                </p>
                                <h4 id="scrollspyHeading3">
                                  High Image Quality
                                </h4>
                              </div>
                              <div className="pt-3">
                                <img
                                  src="https://content.syndigo.com/asset/53b96b54-2cb3-4cef-8e3c-c3df4ed9645d/600.webp"
                                  alt=""
                                  className="boxStyle"
                                />
                                <h1 className="font-bold fs-4">
                                  High Resolution
                                </h1>
                                <h3 className="font-bold fs-5">
                                  For Great Image Quality
                                </h3>
                                <p className="py-3">
                                  The 18.0 Megapixel CMOS sensor helps you
                                  easily capture images with stand-out detail
                                  and clarity.
                                </p>
                              </div>
                              <div className="pt-3">
                                <img
                                  className="boxStyle"
                                  src="https://content.syndigo.com/asset/729c8b97-93ba-4683-92de-971c7571a94f/600.webp"
                                  alt=""
                                />
                                <h1
                                  id="scrollspyHeading4"
                                  className="font-bold fs-4"
                                >
                                  Background Blur
                                </h1>
                                <h3 className=" font-bold fs-5">
                                  For Expressive Portraits
                                </h3>

                                <p>
                                  Bring attention to your subject with the EOS
                                  Rebel T100's great background blurring
                                  capabilities.
                                </p>
                              </div>
                              <div className="pt-3">
                                <img
                                  className="boxStyle"
                                  src="https://content.syndigo.com/asset/c7bae7fb-6995-4f36-af49-b9d80cfa0558/600.webp"
                                  alt=""
                                />
                                <h4
                                  id="scrollspyHeading5"
                                  className="font-bold fs-4"
                                >
                                  Low-light Performance
                                </h4>
                                <div>
                                  <h3 className="font-bold fs-5">
                                    For Shooting in Dim Light
                                  </h3>
                                  <p>
                                    The 6400 maximum ISO and DIGIC Image
                                    Processor help capture clear images, even in
                                    low light!
                                  </p>
                                </div>
                              </div>
                              <div className="pt-3">
                                <img
                                  className="boxStyle"
                                  src="https://content.syndigo.com/asset/34c40ab5-3ec0-4ec5-95d5-f2302220bcb9/600.webp"
                                  alt=""
                                />
                                <h4 className="font-bold fs-4">
                                  Fast Autofocus
                                </h4>
                                <div className="">
                                  <h3 className=" font-bold fs-5">
                                    Keep Up with the Action
                                  </h3>
                                  <p>
                                    The 9-point AF system helps you focus on and
                                    capture moving subjects so you won’t miss
                                    any important
                                  </p>
                                </div>
                                <p className="py-6 ">Viewfinder/Live View</p>
                                <div className="pt-6 flex">
                                  <div className="flex-1 my-auto ">
                                    <div>
                                      <h3 className="font-bold ">
                                        Optical Viewfinder
                                      </h3>
                                      <div className="">
                                        <h5 className="font-bold">
                                          Easily Frame Your Shots
                                        </h5>
                                        <p className=" ">
                                          Look through the optical viewfinder to
                                          capture with confidence, even in
                                          bright, outdoor lighting!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <img
                                      className="sm-images"
                                      src="https://content.syndigo.com/asset/34e60620-d8d6-4fe2-b0de-6f515af72701/600.webp"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                </div>
              </div>
              <hr className="mt-3 " />
              {/* Specifications_text */}
              <div className="Specifications_text py-3">
                <div className="">
                  <p>Specifications</p>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">Features</h1>
                    <p>
                      DSLR quality photos & full HD movies, Powerful 18
                      Megapixel sensor, Precise auto focus
                    </p>
                  </div>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">Brand</h1>
                    <p>Canon</p>
                  </div>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">Manufacturer Part Number</h1>
                    <p>2628C029</p>
                  </div>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">Manufacturer</h1>
                    <p>Canon</p>
                  </div>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">Model</h1>
                    <p>T100</p>
                  </div>
                  <div className="pt-2">
                    <h1 className="font-bold fs-6">
                      Assembled Product Dimensions (L x W x H)
                    </h1>
                    <p>5.08 x 7.33 x 3.04 Inches</p>
                  </div>
                  <hr className="mt-3 " />
                  <div className="py-3 ">
                    <p>Warranty</p>
                    <div className="pt-2">
                      <h1 className="font-bold fs-6">Warranty length</h1>
                      <p>1-year warranty</p>
                    </div>
                    <div className="pt-2">
                      <h1 className="font-bold fs-6">Warranty information</h1>
                      <p>Limited 1 year warranty</p>
                    </div>
                  </div>
                  <hr className="mt-3 " />
                  <div className=" pl-3 flex">
                    <span className="pt-1.5 ">
                      <MdChatBubbleOutline />
                    </span>
                    <span className="">
                      <a
                        href="#kdla"
                        className="report_link underline text-black"
                      >
                        Report incorrect product information
                      </a>
                    </span>
                  </div>
                  <div className="pt-3 ">
                    <div className="master_card flex p-2 justify-center">
                      <img
                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-4cbf/k2-_19bccbbb-b02e-43ca-b47f-54e066d59b36.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF"
                        alt=""
                        className="style_master_card"
                      />
                      <div className="pt-2">
                        <span className=" earn_price">
                          Earn $17.43 on this item.
                        </span>
                      </div>
                      <p className="pt-2.5">
                        See if you're pre-approved with no credit risk.
                      </p>
                    </div>
                  </div>

                  <h2 className="font-bold text-xl py-6">
                    Customer reviews & ratings
                  </h2>

                  <div className="flex ">
                    <div className="py-3 col flex flex-1">
                      <div>
                        <div className="font-bold">
                          <span className="font_s">4.5</span>
                          out of <span className="font_s ">5</span>
                          <span className="flex -d-inline fs-7 ">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <a href="#fgfdg">
                              <p className="underline">({reviews.length} reviews)</p>
                            </a>
                          </span>
                          <div className="pt-2 flex ">
                            <div className="pr-3">
                              <button
                                type="button"
                                class="hover:text-blue-600 hover:border-blue-600  py-1  px-3 font-bold border-2 rounded-full "
                              >
                                See all reviews
                              </button>
                            </div>
                            <button
                              type="button"
                              class=" addToCart_btn rounded-full fs-6"
                            >
                              Write a review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fs-7 pt-5  flex-1">
                      <span className="flex ">
                        <a href="#lgdjl" className="underline">
                          {" "}
                          5 stars
                        </a>{" "}
                        194{" "}
                        <span className="pt-2 pl-3">
                          <Progress progress={60} className="p_width h-50" />
                        </span>
                      </span>
                      <span className="flex ">
                        <a href="#lgdjl" className="underline">
                          {" "}
                          4 stars
                        </a>{" "}
                        194{" "}
                        <span className="pt-2 pl-3">
                          <Progress progress={60} className="p_width h-50" />
                        </span>
                      </span>
                      <span className="flex ">
                        <a href="#lgdjl" className="underline">
                          {" "}
                          3 stars
                        </a>{" "}
                        194{" "}
                        <span className="pt-2 pl-3">
                          <Progress progress={20} className="p_width h-50" />
                        </span>
                      </span>
                      <span className="flex ">
                        <a href="#lgdjl" className="underline">
                          {" "}
                          2 stars
                        </a>{" "}
                        194{" "}
                        <span className="pt-2 pl-3">
                          <Progress progress={14} className="p_width h-50" />
                        </span>
                      </span>
                      <span className="flex ">
                        <a href="#lgdjl" className="underline">
                          {" "}
                          1 stars
                        </a>{" "}
                        194{" "}
                        <span className="pt-2 pl-3">
                          <Progress progress={16} className="p_width h-50" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="mt-3 " />
              </div>
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h6 className="font-bold ">Most helpful positive review</h6>
                    <p>54 customers found this helpful</p>
                  </div>
                  <div>
                    <h6 className="font-bold ">Most helpful negative review</h6>
                  </div>
                </div>
                {/* <div className="flex  pt-2 justify-between">
                                    {reviewList.map((review) => {
                                      return (
                                        <div className="pt-3 ">
                                          <Card
                                            style={{
                                              width: "18rem",
                                              height: "400px",
                                            }}
                                          >
                                            <div className="flex font_size">
                                              {review.reviewRate}
                                            </div>
                                            <h2 className="flex pt-2">
                                              {review.reviewTitle}
                                            </h2>
                                            <p>{review.reviewText}</p>
                                          </Card>
                                        </div>
                                      );
                                    })}
                                  </div> */}
              </div>
            </div>
          </div>
          <div className="ml-2 w-1/3">
            <div id="shopping" className="pl-4 pr-8 py-2">
              <div className="flex justify-between  mt-4">
                <p className=" text-sm">
                  <span className="border-solid border-[1px] p-1	rounded-none	text-blue-600 border-blue-600">
                    {product.badges?.en[0]}
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
                   {product.brand?.en}
                </a>
                <h5
                  class="font-semibold dark-gray my-2 text-[20px]"
                  itemprop="name"
                >
                  {product.name?.en}
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
                  {reviews.length} reviews
                </a>
              </div>
              <div className="py-2 px-3">
                <span
                  itemprop="price"
                  aria-hidden="false"
                  className="text-[30px] font-semibold"
                >
                  ${product.priceAfter}
                </span>
              </div>
              <div className="text-sm flex px-2 ">
                <span>
                  <span className="pr-2 font-bold"> $23/mo </span>{" "}
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
                    <span aria-hidden="true" className="p-2" 
                    onClick={() => {
                      // navigate("/order");
                      Services(product);
                      
                      dispatch(cartItems())
                      console.log(prod);
                    }}>
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
                    <span className="font-bold "> JumboBuys</span>{" "}
                    <span className="font-bold">Pro seller</span>
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
          </div>
        </div>

        {/* Right  */}
      </main>
      <Footer />
    </>
  );
}

export default Product;
