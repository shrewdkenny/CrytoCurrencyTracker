import React from "react";
import Main from "../components/Main";
import CrytoCurrencyTable from "@/components/CrytoCurrencyTable";

const HomePage = () => {
  return (
    <div>
      <div>
        <Main />
        <CrytoCurrencyTable />
      </div>
    </div>
  );
};

export default HomePage;
