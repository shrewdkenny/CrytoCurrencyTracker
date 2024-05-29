import React, { useState, useContext } from "react";
import ApiContext from "@/ApiContext";
import spinner from "../assets/spinner.gif";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CryptoCurrencyTable = () => {
  const { isLoading, cryptoDetails } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  
  // logic for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = cryptoDetails.slice(indexOfFirstPost, indexOfLastPost);

  // logic to go to pages
  const handleNextPage = () => {
    if (currentPage * postsPerPage < cryptoDetails.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={handlePrevPage}
          className="rounded bg-[#ffffff] px-4 py-2 text-[#4fb6a3] "
        >
          1
        </button>
        <button
          onClick={handleNextPage}
          className="rounded bg-[#ffffff] px-4 py-2 text-[#4fb6a3] "
        >
          2
        </button>
      </div>
      <div className="h-fit">
        {isLoading ? (
          <div className="flex h-[50vh] w-[100vw] items-center justify-center">
            <img src={spinner} alt="Loading..." className="h-40" />
          </div>
        ) : (
          <Table className="mt-5 cursor-pointer border-2 border-[#dddddd]">
            <TableHeader>
              <TableRow className="bg-[#dddddd] font-semibold text-[#000] hover:bg-[#dddddd] ">
                <TableHead className="font-semibold text-[#000]">
                  Rank
                </TableHead>
                <TableHead className="font-semibold text-[#000]">
                  Name
                </TableHead>
                <TableHead className="font-semibold text-[#000]">
                  Price
                </TableHead>
                <TableHead className="font-semibold text-[#000]">
                  Market Cap
                </TableHead>
                <TableHead className="font-semibold text-[#000]">
                  24h Vol
                </TableHead>
                <TableHead className="font-semibold text-[#000]">1h</TableHead>
                <TableHead className="font-semibold text-[#000]">24h</TableHead>
                <TableHead className="font-semibold text-[#000]">7d</TableHead>
                <TableHead className="font-semibold text-[#000]">30d</TableHead>
                <TableHead className="font-semibold text-[#000]">60d</TableHead>
                <TableHead className="font-semibold text-[#000]">90d</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[#ffffff]">
              {currentPost.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.cmc_rank}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.quote.USD.price.toFixed(2)}</TableCell>
                  <TableCell>${item.quote.USD.market_cap.toFixed(2)}</TableCell>
                  <TableCell>${item.quote.USD.volume_24h.toFixed(2)}</TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_1h.toFixed(2)}%
                  </TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_7d.toFixed(2)}%
                  </TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_30d.toFixed(2)}%
                  </TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_60d.toFixed(2)}%
                  </TableCell>
                  <TableCell>
                    {item.quote.USD.percent_change_90d.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
};

export default CryptoCurrencyTable;
