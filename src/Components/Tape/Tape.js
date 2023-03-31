import React from "react";
import tapeImg from "../../assets/tape1.webp";
function Tape() {
  return (
    <div className="flex justify-center">
      <div className=" bg-[#f2f8fd] h-20 w-full rounded-lg px-60 items-center flex gap-10 justify-center">
        <img src={tapeImg} alt="" />
        <p className="">Sign in for personalized recommendations and more!</p>
        <button className="bg-[#f2f8fd] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
          Sign in or create an account
        </button>
      </div>
    </div>
  );
}

export default Tape;
