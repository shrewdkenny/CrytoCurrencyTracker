import React, { useState, useEffect } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoDetails, setCryptoDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": import.meta.env.VITE_COINMARKETCAP_API_KEY,
            },
          },
        );
        const data = await response.json();
        setCryptoDetails(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ApiContext.Provider value={{ isLoading, cryptoDetails }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
