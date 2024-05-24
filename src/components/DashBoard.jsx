import React, { useState } from "react";

const DashBoard = () => {
  const [rank, setRank] = useState([]);
  const [name, setName] = useState([]);
  const [symbol, setSymbol] = useState([]);
  const [slug, setSlug] = useState([]);
  const [marketPairs, setMarketPairs] = useState([]);
  const [price, setPrice] = useState([]);

  const fetchData = async () => {
    try {
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

      const symbol = response.data.map((data2) => data2.symbol);
      setSymbol(symbol);

      const slug = response.data.map((data3) => data3.slug);
      setSlug(slug);

      const marketPairs = response.data.map((data4) => data4.num_market_pairs);
      setMarketPairs(marketPairs);

      const price = response.data.map((data5) => data5.quote.USD.price);
      setPrice(price);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <div className="flex h-fit  flex-col items-center py-5">
        <button
          className="rounded bg-red-500 px-16 py-3 text-white"
          onClick={fetchData}
        >
          Get
        </button>
        <div className="mt-5 flex gap-10">
          <div>
            <h1 className="text-2xl font-black">RANK</h1>
            <ul>
              {rank.map((ran, i) => (
                <li key={i}>{ran}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-black">NAME</h1>
            <ul>
              {name.map((nam, i) => (
                <li key={i}>{nam}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-black">SYMBOL</h1>
            <ul>
              {symbol.map((sym, i) => (
                <li key={i}>{sym}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-black">SLUG</h1>
            <ul>
              {slug.map((slu, i) => (
                <li key={i}>{slu}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-black">MARKET PAIRS</h1>
            <ul>
              {marketPairs.map((mar, i) => (
                <li key={i}>{mar}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-black">PRICE</h1>
            <ul>
              {price.map((pri, i) => (
                <li key={i}>${pri}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
