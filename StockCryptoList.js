import { useState, useEffect } from "react";
import { fetchStockData, fetchCryptoData } from "../utils/api";

const StockCryptoList = () => {
  const [stocks, setStocks] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const stockSymbols = ["AAPL", "GOOG"]; // example stocks
      const cryptoSymbols = ["bitcoin", "ethereum"]; // example cryptos

      const stockDataPromises = stockSymbols.map((symbol) =>
        fetchStockData(symbol)
      );
      const cryptoDataPromises = cryptoSymbols.map((symbol) =>
        fetchCryptoData(symbol)
      );

      const stockResults = await Promise.all(stockDataPromises);
      const cryptoResults = await Promise.all(cryptoDataPromises);

      setStocks(stockResults);
      setCryptos(cryptoResults);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-xl font-bold">Stocks</h2>
          <ul>
            {stocks.map((stock, index) => (
              <li key={index}>
                <div>{stock.symbol}: ${stock.latestPrice}</div>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-6">Cryptocurrencies</h2>
          <ul>
            {cryptos.map((crypto, index) => (
              <li key={index}>
                <div>{crypto.name}: ${crypto.current_price}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default StockCryptoList;