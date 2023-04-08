import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Product.css";
import Nav from "./Nav";
import Shopping from "./Shopping";
import Footer from "../../Components/Footer/Footer";
import Images from "./Images";

function Product() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-32">
        <Nav />
        <div className="flex py-4">
          <div className="w-2/3">
            <Images />
          </div>
          <div className="ml-2 w-1/3">
            <Shopping />
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Product;
