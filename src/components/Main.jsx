import React from "react";
import { FaTag } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="mt-20 flex items-center gap-5 rounded-md justify-between  border bg-[#ffffff] py-5">
        <div className="flex gap-3">
          <div className="rounded-r bg-[#4fb6ae] px-4 py-2 text-sm text-white">
            <FaTag />
          </div>
          <p className="text-lg font-semibold">
            Live updates of all active crypto currencies
          </p>
        </div>
        <div className="mr-5">date</div>
      </div>
    </>
  );
};

export default Main;
