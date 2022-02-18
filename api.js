export const fetchData = () => {
  return fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "fb74d58c-3b2a-4d14-8bc9-f0784b3d5d5e",
      },
    }
  );
};
