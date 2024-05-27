import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoDetails, setCryptoDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "468c3d5a-f439-4fa5-8c1e-56f84603712b",
            },
          },
        );
        const response = await data.json();
        setCryptoDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
              {cryptoDetails.map((item, index) => (
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
