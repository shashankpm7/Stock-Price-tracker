import StockCryptoList from "../components/StockCryptoList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold p-6">Stock & Crypto Price Tracker</h1>
      <StockCryptoList />
    </div>
  );
}