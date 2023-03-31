import React from "react";
import "./product.css";
import Shopping from "./Shopping";
import Nav from "./Nav";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Images from "./Images";

export default function Product() {
  
  return (
    <>
    <Navbar/>
      <main className="px-4 py-4 min-vh-100">
        <div className="container-sm ">
          <Nav/>
          <div className="row py-4">
            <Images/>
            <Shopping/>
            <div className="col-8">
          </div>
          </div>
          
        </div>
      </main>
      <Footer/>
    </>
  );
}
