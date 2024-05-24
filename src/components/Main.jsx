import React from "react";
import { FaTag } from "react-icons/fa";
import CrytoCurrencyTable from "./CrytoCurrencyTable";

const Main = () => {
  return (
    <>
      <div>
        <div className="mt-20 flex items-center gap-5 rounded-md  border bg-[#ffffff] py-5">
          <div className="rounded-r bg-[#4fb6ae] px-4 py-2 text-sm text-white">
            <FaTag />
          </div>
          <p className="text-lg font-semibold">
            Live updates of all active crypto currencies
          </p>
        </div>
        <CrytoCurrencyTable />
      </div>
    </>
  );
};

export default Main;
