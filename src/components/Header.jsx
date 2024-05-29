import React, { useState, useContext, useEffect } from "react";
import { GiUsaFlag } from "react-icons/gi";
import { CiLogin, CiSearch } from "react-icons/ci";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import ApiContext from "@/ApiContext";

const Header = () => {
  const { cryptoDetails } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (searchInput) {
      const results = cryptoDetails.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchInput, cryptoDetails]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <header className="cursor-pointer">
        <nav className="hidden justify-between bg-[#4fb6ae] px-5 py-3 text-white lg:flex">
          <div className="flex gap-5">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>Fear and Greed</p>
            <p>News</p>
          </div>
          <div className="flex gap-5">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Telegram</p>
            <p>Youtube</p>
          </div>
        </nav>
        <div className="hidden justify-between bg-[#ffffff] px-5 py-3 lg:flex">
          <img
            src="https://cryptocurrencytracker.info/public/storage/settings/January2021/CoBtAZ7K0VO221QFxU1f.jpeg"
            alt=""
            className="h-10 w-60"
          />
          <div className="flex gap-5 ">
            <button className="flex items-center gap-1 rounded bg-gray-200 px-4 text-xs font-bold">
              <GiUsaFlag /> USA
            </button>
            <button className="flex items-center gap-1 rounded bg-gray-200 px-4 text-xs font-bold">
              <GiUsaFlag /> USD
            </button>
            <button className="flex items-center gap-1 rounded bg-[#ee6060]  px-8 text-xs font-bold text-white">
              <CiLogin className="text-white" /> Login
            </button>
          </div>
        </div>
        <div className="flex justify-between border border-[#d4d4d5] bg-[#ffffff] px-5 py-5 ">
          <div className="flex flex-col items-center">
            <FaMoneyBillWave />
            <p>Currencies</p>
          </div>
          <div className="relative">
            <input
              value={searchInput}
              onChange={handleInputChange}
              type="text"
              placeholder="search a coin..."
              className="rounded border border-[#dededf] px-2 py-1 outline-none"
            />
            <CiSearch className="absolute right-1 top-2 text-xl text-[#909090]" />

            {filteredResults.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white">
                {filteredResults.map((crypto) => (
                  <li key={crypto.id} className="px-4 py-2 hover:bg-gray-200">
                    {crypto.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
