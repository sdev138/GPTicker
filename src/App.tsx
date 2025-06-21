
import { useState, useMemo } from 'react';
import { GPUCard } from './components/GPUCard';
import { SearchBar } from './components/SearchBar';
import { gpuData } from './data/GPUData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-low');

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            GPU Price Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare hourly rates for the latest GPUs from top cloud providers. Find the perfect GPU for your workload.
          </p>
        </div>

        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedGPUs.length} of {gpuData.length} GPUs
          </p>
        </div>

        {/* GPU Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedGPUs.map((gpu) => (
            <GPUCard
              key={gpu.id}
              name={gpu.name}
              price={gpu.price}
              vendor={gpu.vendor}
              memory={gpu.memory}
              availability={gpu.availability}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedGPUs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No GPUs found matching your search criteria.</p>
          </div>
        )}

        {/* Footer */}
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
