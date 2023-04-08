import React from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "./product.css";
import { useState } from "react";

export default function ProductDetials() {
  const [openDetails, setopenDetails] = useState(false);
  const [openBrand, setopenBrand] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [rotationB, setRotationB] = useState(0);

  const handlesetopenBrand = () => setopenBrand(!openBrand);
  const handlesetopenDetails = () => setopenDetails(!openDetails);
  const handleClick = () => {
    setRotation(rotation + 180);
    handlesetopenDetails();
  };
  const handleClickBrand = () => {
    setRotationB(rotationB + 180);
    handlesetopenBrand();
  };
  return (
    <>
      <div className="pt-3">
        <h2 className="fw-bold fs-6">About this item</h2>{" "}
        <hr className="mt-3 opacity-10" />
        <div className="overflow-hidden">
          <div className="row py-2">
            <p className=" col-10 justify-content-start">Product detials</p>
            <MdOutlineKeyboardArrowUp
              className="fs-2 col-2  justify-content-end"
              onClick={handleClick}
              style={{ transform: `rotate(${rotation}deg)` }}
              aria-controls="example-collapse-text"
              aria-expanded={openDetails}
            ></MdOutlineKeyboardArrowUp>
          </div>
          <Collapse in={openDetails}>
            <div id="h-96 example-collapse-text">
              <p className="fw-semibold my-2">
                Creating distinctive stories with DSLR quality photos and Full
                HD movies is easier than you think with the 18 Megapixel Canon
                EOS Rebel T100. Share instantly and shoot remotely via your
                compatible smartphone with Wi-Fi and the Canon Camera Connect
                app. The powerful 18 Megapixel sensor has up to 19 times more
                surface area than many smartphones, and you can instantly
                transfer photos and movies to your smart device. The Canon EOS
                Rebel T100 has a Scene Intelligent Auto feature that allows you
                to simply frame and shoot for great results. It also features
                Guided Live View shooting with Creative Auto mode, and you can
                add unique finishes with Creative Filters. The Canon EOS Rebel
                T100 makes it fast and easy to share all the moments that
                matter.
              </p>
              <p className="fw-semibold my-2 fs-6">
                Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit 18
                Megapixel Sensor Wi-Fi DIGIC4+ and Live View Shooting
              </p>
              <ul className="pl-2 my-2">
                {" "}
                <li>DSLR quality photos &amp; full HD movies</li>{" "}
                <li>Powerful 18 Megapixel sensor</li>{" "}
                <li>
                  Canon Camera Connect App: share instantly &amp; shoot remotely
                  via compatible smartphone
                </li>{" "}
                <li>
                  Scene Intelligent Auto: simply frame &amp; shoot for great
                  results
                </li>{" "}
                <li>Guided live view with creative auto mode</li>{" "}
                <li>Creative Filter: add unique finishes</li>{" "}
                <li>Precise auto focus</li> <li>3.0 frames per second</li>{" "}
                <li>Easily frame your shots with the optical viewfinder</li>{" "}
              </ul>
              <p>Includes SanDisk 32GB Memory Card</p>
              <div className=" bg-transparent dark-gray sans-serif my-2 lh-copy">
                <span className="">
                  <BiErrorCircle />
                </span>
                <div className="w_2NhK">
                  <div>
                    <span className="b">
                      We aim to show you accurate product information.
                    </span>{" "}
                    Manufacturers, suppliers and others provide what you see
                    here, and we have not verified it.&nbsp;&nbsp;
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
            </div>
          </Collapse>
        </div>
        <hr className=" opacity-10" />
        <div>
          <div className="row py-2">
            <p className="col-10 justify-content-start">About the brand</p>
            <MdOutlineKeyboardArrowUp
              className="fs-2 col-2  justify-content-end"
              onClick={handleClickBrand}
              style={{ transform: `rotate(${rotationB}deg)` }}
              aria-controls="example-collapse-text"
              aria-expanded={openBrand}
            ></MdOutlineKeyboardArrowUp>
            <Collapse in={openBrand}>
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
                    <h5 id="scrollspyHeading2" className="fw-bold">
                      Your Creative Journey Starts Here.
                    </h5>
                    <h6  className="fw-bold">
                    Exclusively at Walmart.
                    </h6>
                    <p className="py-2">
                      Creating unique stories with DSLR-quality photos and
                      movies is fun and easy thanks to the EOS Rebel T100
                      entry-level camera. Featuring an 18.0 Megapixel CMOS
                      sensor, Full HD video, built-in Wi-Fi®* and more, it helps
                      you capture and share images for high-quality storytelling
                      that sets you apart.
                    </p>
                    <h4 id="scrollspyHeading3">High Image Quality</h4>
                  </div>
                  <div className="pt-3">
                    <img
                      src="https://content.syndigo.com/asset/53b96b54-2cb3-4cef-8e3c-c3df4ed9645d/600.webp"
                      alt=""
                      className="boxStyle"
                    />
                    <h1 className="fw-bold fs-4">High Resolution</h1>
                    <h3 className="fw-bold fs-5">For Great Image Quality</h3>
                    <p className="py-3">
                      The 18.0 Megapixel CMOS sensor helps you easily capture
                      images with stand-out detail and clarity.
                    </p>
                  </div>
                  <div className="pt-3">
                    <img
                      className="boxStyle"
                      src="https://content.syndigo.com/asset/729c8b97-93ba-4683-92de-971c7571a94f/600.webp"
                      alt=""
                    />
                    <h1 id="scrollspyHeading4" className="fw-bold fs-4">
                      Background Blur
                    </h1>
                    <h3 className=" fw-bold fs-5">For Expressive Portraits</h3>

                    <p>
                      Bring attention to your subject with the EOS Rebel T100's
                      great background blurring capabilities.
                    </p>
                  </div>
                  <div className="pt-3">
                    <img
                      className="boxStyle"
                      src="https://content.syndigo.com/asset/c7bae7fb-6995-4f36-af49-b9d80cfa0558/600.webp"
                      alt=""
                    />
                    <h4 id="scrollspyHeading5" className="fw-bold fs-4">
                      Low-light Performance
                    </h4>
                    <div>
                      <h3 className="fw-bold fs-5">
                        For Shooting in Dim Light
                      </h3>
                      <p>
                        The 6400 maximum ISO and DIGIC Image Processor help
                        capture clear images, even in low light!
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <img
                      className="boxStyle"
                      src="https://content.syndigo.com/asset/34c40ab5-3ec0-4ec5-95d5-f2302220bcb9/600.webp"
                      alt=""
                    />
                    <h4 className="fw-bold fs-4">Fast Autofocus</h4>
                    <div className="">
                      <h3 className=" fw-bold fs-5">Keep Up with the Action</h3>
                      <p>
                        The 9-point AF system helps you focus on and capture
                        moving subjects so you won’t miss any important
                      </p>
                    </div>
                    <div className="pt-5 row">
                      <div className="col">
                        <p className="pb-4">Viewfinder/Live View</p>
                        <div>
                          <h3 className="fw-bold fs-4">Optical Viewfinder</h3>
                          <div className="pt-2">
                            <h5 className="fw-bold fs-5">
                              Easily Frame Your Shots
                            </h5>
                            <p>
                              Look through the optical viewfinder to capture
                              with confidence, even in bright, outdoor lighting!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
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
            </Collapse>
          </div>

          <hr className=" opacity-10" />
        </div>
      </div>
      <hr className="mt-3 opacity-10" />
    </>
  );
}
