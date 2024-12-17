import axios from "axios";

const STOCK_API_KEY = "EKT0KERHG580AM53";
const CRYPTO_API_URL = "https://api.coingecko.com/api/v3";
const STOCK_API_URL = `https://www.alphavantage.co/query?apikey=${STOCK_API_KEY}`;

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `${STOCK_API_URL}&function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min`
    );
    return response.data["Time Series (5min)"];
  } catch (error) {
    console.error("Error fetching stock data", error);
  }
};

export const fetchCryptoData = async (symbol) => {
  try {
    const response = await axios.get(`${CRYPTO_API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        ids: symbol,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching crypto data", error);
  }
};