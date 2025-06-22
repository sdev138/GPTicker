import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: string;
  onSortChange: (sortOption: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, sortBy, onSortChange }) => {
  return (
    <div className="flex justify-between mb-6">
      <input
        type="text"
        placeholder="Search GPUs..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mr-4"
      />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name</option>
        <option value="vendor">Vendor</option>
      </select>
    </div>
  );
};