import React from "react";
import "./Product.css";

export default function Nav() {
  return (
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
  );
}
