import React from "react";
import toy1 from "../../assets/toys1.jpg";
import toy2 from "../../assets/toys2.jpg";
import toy3 from "../../assets/toys3.jpg";
import toy5 from "../../assets/toys5.jpg";
import toy6 from "../../assets/toys6.jpg";
import video from "../../assets/Walmart.com - Save Money. Live Better.mp4";
import Slider from "./../../Components/Slider/Slider";
import Tape from "./../../Components/Tape/Tape";
import MainSlider from "../../Components/MainSlider/MainSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className=" px-6 ">
        {/* Home Top */}
        <div className="flex h-screen pt-6 mb-20">
          {/* Left */}
          <div className=" h-screen">
            <img
              src={toy1}
              alt=""
              className=" rounded-3xl h-1/3 w-full cursor-pointer"
            />
            <img
              src={toy2}
              alt=""
              className="pt-3 rounded-3xl h-2/3  cursor-pointer"
            />
          </div>
          {/* Midle */}
          <div className="  h-screen">
            <div className="h-2/3">
              <img
                src={toy3}
                alt=""
                className="px-3 rounded-3xl h-full cursor-pointer"
              />
              {/* <img src={toy4} alt="" className="p-3 rounded-3xl h-1/2 w-full" /> */}
            </div>
            <div className="flex h-1/3 ">
              <img
                src={toy5}
                alt=""
                className="pt-3 px-3 rounded-3xl w-1/2 cursor-pointer"
              />
              <img
                src={toy6}
                alt=""
                className="pt-3 px-3 rounded-3xl w-1/2 cursor-pointer"
              />
            </div>
          </div>
          {/* Right */}
          <div className=" h-screen">
            <img
              src={toy5}
              alt=""
              className=" rounded-3xl h-1/2 cursor-pointer"
            />
            <img
              src={toy6}
              alt=""
              className="pt-3 rounded-3xl  h-1/2 cursor-pointer"
            />
          </div>
        </div>
        {/* Home Middle Slider */}
        <div className="h-screen-1/2 flex ">
          <div className="w-1/2">
            <Slider />
          </div>
          <div className="w-1/2">
            <a href="">
              {" "}
              <video autoPlay muted>
                <source src={video} />
              </video>
            </a>
          </div>
        </div>
        {/* Tape */}
        <Tape />
        {/* Main Slider */}
        <div className="">
          <MainSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
