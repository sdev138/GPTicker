import { useParams } from 'react-router-dom';
import { gpuData } from '../data/GPUData';

const StockTickerPage = () => {
  const { id } = useParams();
  const gpu = gpuData.find(g => g.id === id);

  if (!gpu) return <div>GPU not found.</div>;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">{gpu.name} Stock Ticker</h2>
      <div className="mb-2">Vendor: {gpu.vendor}</div>
      <div className="mb-2">Memory: {gpu.memory}</div>
      <div className="mb-2">Availability: {gpu.availability}</div>
      <div className="mb-2 text-2xl font-bold">Current Price: ${gpu.price.toFixed(2)}</div>
      {/* Add your stock ticker visualization here */}
    </div>
  );
};

export default StockTickerPage;