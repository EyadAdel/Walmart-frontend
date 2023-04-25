import React from "react";
import { useNavigate } from "react-router-dom";
function Card() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center"
      onClick={() => {
        navigate("/order");
      }}
    >
      {/* <div className="block w-52  bg-white dark:bg-neutral-700">
        <img className="cursor-pointer" src={img1} alt="" />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            $20.25
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-full shadow">
            Option
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
