// api/proxy.js

import fetch from 'node-fetch';

export default async (req, res) => {
  const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.VITE_COINMARKETCAP_API_KEY,
    },
  });

  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
};
