import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gpuData } from '../data/GPUData';
import { StockTicker } from '../components/StockTicker';

const StockTickerPage = () => {
  const location = useLocation();
  const [rentedGPUs, setRentedGPUs] = useState([]);

  const handleRent = (gpuId) => {
    const gpu = gpuData.find(gpu => gpu.id === gpuId);
    if (gpu && !rentedGPUs.includes(gpu)) {
      setRentedGPUs([...rentedGPUs, gpu]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">GPU Prices</h1>
        <StockTicker rentedGPUs={rentedGPUs} />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Rented GPUs</h2>
          <ul>
            {rentedGPUs.map(gpu => (
              <li key={gpu.id} className="text-lg text-gray-700">
                {gpu.name}: ${gpu.price.toFixed(2)} per hour
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StockTickerPage;