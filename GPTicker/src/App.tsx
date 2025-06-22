import { useState, useMemo } from 'react';
import { GPUCard } from './components/GPUCard';
import { SearchBar } from './components/SearchBar';
import { gpuData } from './data/GPUData';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const history = useHistory();

  const filteredAndSortedGPUs = useMemo(() => {
    let filtered = gpuData.filter(gpu =>
      gpu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gpu.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'vendor':
        filtered.sort((a, b) => a.vendor.localeCompare(b.vendor));
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

  const handleRentClick = (gpu) => {
    history.push('/stock-ticker', { gpu });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            GPU Price Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare hourly rates for the latest GPUs from top cloud providers. Find the perfect GPU for your workload.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
            Buy Credits
          </button>
          <form action="/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
          </form>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedGPUs.length} of {gpuData.length} GPUs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedGPUs.map((gpu) => (
            <GPUCard
              key={gpu.id}
              name={gpu.name}
              price={gpu.price}
              vendor={gpu.vendor}
              memory={gpu.memory}
              availability={gpu.availability}
              onRentClick={() => handleRentClick(gpu)}
            />
          ))}
        </div>

        {filteredAndSortedGPUs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No GPUs found matching your search criteria.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Prices updated in real-time • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;