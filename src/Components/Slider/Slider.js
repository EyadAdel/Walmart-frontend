import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../store/actions/action";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slider() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="container p-4 justify-center ">
      <Carousel responsive={responsive}>
      
        {products.map(function (product) {
          
          return (
            <div className="flex justify-center">
              
              <div className="block w-52  bg-white dark:bg-neutral-700">
              <Link to={`/details/${product._id}`}>
                <img
                  className="cursor-pointer"
                  src={product.photos[0]}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    ${product.priceAfter}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {product.brand}
                  </p>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-full shadow">
                    Option
                  </button>
                </div>
                </Link>
              </div>
              
            </div>
          );
        })}
        
      </Carousel>
    </div>
  );
}

export default Slider;
