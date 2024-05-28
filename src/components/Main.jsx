import React from "react";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>
        <div className="mt-10 flex gap-3 rounded-md bg-[#ffffff] py-5">
          <div className="rounded-r bg-[#4fb6ae] px-4 py-2 text-sm text-white">
            <FaTag />
          </div>
          <p className="text-lg font-semibold">
            Live updates of all active crypto currencies
          </p>
        </div>
      
      </div>
    </>
  );
};

export default Main;
