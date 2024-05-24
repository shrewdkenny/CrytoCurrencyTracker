import React, { useState, componentWillMount, useEffect } from "react";
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

const CrytoCurrencyTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rank, setRank] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [marketCap, setMarketCap] = useState([]);

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
        console.log(response);
        const rank = response.data.map((data) => data.cmc_rank);
        setRank(rank);
        const name = response.data.map((data1) => data1.name);
        setName(name);
        const price = response.data.map((data5) => data5.quote.USD.price);
        setPrice(price);
        const marketCap = response.data.map(
          (data6) => data6.quote.USD.market_cap,
        );
        setMarketCap(marketCap);

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
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="">Market Cap</TableHead>
              <TableHead className="">24h Vol</TableHead>
              <TableHead className="">1h</TableHead>
              <TableHead className="">24h</TableHead>
              <TableHead className="">7d</TableHead>
              <TableHead className="">30d</TableHead>
              <TableHead className="">60d</TableHead>
              <TableHead className="">90s</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {isLoading && (
                <div className="flex w-[100vw] items-center justify-center">
                  <img src={spinner} alt="" />
                </div>
              )}
              <TableCell className="font-medium">
                <div>
                  {rank.map((ran, index) => (
                    <p key={index}>{ran}</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {name.map((nam, index) => (
                    <p key={index}>{nam}</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {price.map((pri, index) => (
                    <p key={index}>${pri}</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {marketCap.map((mar, index) => (
                    <p key={index}>${mar}</p>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CrytoCurrencyTable;
