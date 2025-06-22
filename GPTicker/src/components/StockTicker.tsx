import React from 'react';
import { useLocation } from 'react-router-dom';

const StockTicker = () => {
  const location = useLocation();
  const { gpuPrices } = location.state || { gpuPrices: [] };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">GPU Prices</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">GPU Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Vendor</th>
            </tr>
          </thead>
          <tbody>
            {gpuPrices.map((gpu) => (
              <tr key={gpu.id}>
                <td className="py-2 px-4 border-b">{gpu.name}</td>
                <td className="py-2 px-4 border-b">${gpu.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{gpu.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTicker;