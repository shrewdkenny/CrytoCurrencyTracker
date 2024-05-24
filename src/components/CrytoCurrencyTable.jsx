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

const CrytoCurrencyTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rank, setRank] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [marketCap, setMarketCap] = useState([]);
  const [vol24H, setvol24H] = useState([]);
  const [percentChange1h, setPercentChange1h] = useState([]);
  const [percentChange24h, setPercentChange24h] = useState([]);
  const [percentChange7d, setPercentChange7d] = useState([]);
  const [percentChange30d, setPercentChange30d] = useState([]);
  const [percentChange60d, setPercentChange60d] = useState([]);
  const [percentChange90d, setPercentChange90d] = useState([]);

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

        const vol24H = response.data.map((data7) => data7.quote.USD.volume_24h);
        setvol24H(vol24H);

        const percentChange1h = response.data.map(
          (data8) => data8.quote.USD.percent_change_1h,
        );
        setPercentChange1h(percentChange1h);

        const percentChange24h = response.data.map(
          (data9) => data9.quote.USD.percent_change_24h,
        );
        setPercentChange24h(percentChange24h);

        const percentChange7d = response.data.map(
          (data10) => data10.quote.USD.percent_change_7d,
        );
        setPercentChange7d(percentChange7d);

        const percentChange30d = response.data.map(
          (data11) => data11.quote.USD.percent_change_30d,
        );
        setPercentChange30d(percentChange30d);

        const percentChange60d = response.data.map(
          (data11) => data11.quote.USD.percent_change_60d,
        );
        setPercentChange60d(percentChange60d);

        const percentChange90d = response.data.map(
          (data11) => data11.quote.USD.percent_change_90d,
        );
        setPercentChange90d(percentChange90d);

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
        <Table className="mt-5 border-2 border-[#dddddd]">
          <TableHeader>
            <TableRow className="bg-[#dddddd] hover:bg-[#dddddd] ">
              <TableHead className="font-semibold text-[#000]">Rank</TableHead>
              <TableHead className="font-semibold text-[#000]">Name</TableHead>
              <TableHead className="font-semibold text-[#000]">Price</TableHead>
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
          <TableBody className="bg-[#ffffff] ">
            <TableRow>
              {isLoading && (
                <div className="flex h-[50vh] w-[100vw] items-center justify-center">
                  <img src={spinner} alt="" className="h-40" />
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
              <TableCell>
                <div>
                  {vol24H.map((vol24, index) => (
                    <p key={index}>${vol24}</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange1h.map((oneHr, index) => (
                    <p key={index}>{oneHr.toFixed(2)}%</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange24h.map((hr24, index) => (
                    <p key={index}>{hr24.toFixed(2)}%</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange7d.map((day7, index) => (
                    <p key={index}> {day7.toFixed(2)}%</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange30d.map((day30, index) => (
                    <p key={index}> {day30.toFixed(2)}%</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange60d.map((day60, index) => (
                    <p key={index}> {day60.toFixed(2)}%</p>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {percentChange90d.map((day90, index) => (
                    <p key={index}> {day90.toFixed(2)}%</p>
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
