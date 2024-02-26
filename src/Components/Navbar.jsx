import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#003566] text-white flex items-center justify-between px-5 py-3">
      <Link to={"/"} className="text-2xl font-bold">VTUBE</Link>
      <div className="flex gap-5">
        <Link to={"/add-videos"} className="bg-white px-5 py-1 font-bold rounded text-[#003566]">
          ADD
        </Link>
        <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
