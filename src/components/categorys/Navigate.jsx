import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  const useScroll = () => {
    window.scroll({ top: 1425, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex  lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
      <Link to="/gelam" onClick={useScroll}>
        <img
          src="/shorts.svg"
          alt=""
          className="w-20 hover:scale-105 duration-300 animate-pulse "
        />
      </Link>
      {/* <Link to="/dyel" onClick={useScroll}>
        <div className="w-16 text-center  rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200  px-6 p-3 cursor-pointer  ">
          
          2
        </div>
      </Link>
      <Link to="/astralic" onClick={useScroll}>
        <div className="w-16 text-center  rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
          
          3
        </div>
      </Link>
      <Link to="/fajas" onClick={useScroll}>
        <div className="w-16 text-center   rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200  px-6 p-3 cursor-pointer">
          
          4
        </div>
      </Link> */}
    </div>
  );
};

export default Navigate;
