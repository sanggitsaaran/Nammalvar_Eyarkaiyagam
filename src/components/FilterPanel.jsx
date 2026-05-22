import React from 'react';
import { ChevronDown, X } from 'lucide-react';

const FilterPanel = ({ categories, filters, onFilterChange, onResetFilters, isMobile, onClose }) => {
  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: updatedCategories });
  };

  const handleAvailabilityChange = (value) => {
    onFilterChange({ ...filters, availability: value });
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.availability !== 'all';

  return (
    <div className={`${
      isMobile 
        ? 'fixed inset-0 z-40 bg-black/50 overflow-y-auto' 
        : 'relative'
    }`}>
      {isMobile && (
        <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
      )}
      
      <div className={`${
        isMobile 
          ? 'bg-neutral-900 p-6' 
          : 'bg-neutral-800 rounded-lg border border-neutral-700 p-6 sticky top-20 max-h-screen overflow-y-auto'
      }`}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="text-xs text-green-400 hover:text-green-300 underline transition"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
              <ChevronDown size={16} />
              Category
            </h3>
            <div className="space-y-2 ml-4">
              {categories.map((category) => (
                <label key={category} className="flex items-center cursor-pointer hover:text-green-400 transition">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="w-4 h-4 rounded border-neutral-600 text-green-600 cursor-pointer accent-green-600"
                  />
                  <span className="ml-2 text-sm text-neutral-300">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
              <ChevronDown size={16} />
              Availability
            </h3>
            <div className="space-y-2 ml-4">
              <label className="flex items-center cursor-pointer hover:text-green-400 transition">
                <input
                  type="radio"
                  name="availability"
                  value="all"
                  checked={filters.availability === 'all'}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  className="w-4 h-4 cursor-pointer accent-green-600"
                />
                <span className="ml-2 text-sm text-neutral-300">All Products</span>
              </label>
              <label className="flex items-center cursor-pointer hover:text-green-400 transition">
                <input
                  type="radio"
                  name="availability"
                  value="available"
                  checked={filters.availability === 'available'}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  className="w-4 h-4 cursor-pointer accent-green-600"
                />
                <span className="ml-2 text-sm text-neutral-300">In Stock</span>
              </label>
              <label className="flex items-center cursor-pointer hover:text-green-400 transition">
                <input
                  type="radio"
                  name="availability"
                  value="outofstock"
                  checked={filters.availability === 'outofstock'}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  className="w-4 h-4 cursor-pointer accent-green-600"
                />
                <span className="ml-2 text-sm text-neutral-300">Out of Stock</span>
              </label>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="pt-4 border-t border-neutral-700">
              <p className="text-xs text-neutral-400 mb-2">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded flex items-center gap-1"
                  >
                    {category}
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="hover:text-green-300"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {filters.availability !== 'all' && (
                  <span className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded flex items-center gap-1">
                    {filters.availability === 'available' ? 'In Stock' : 'Out of Stock'}
                    <button
                      onClick={() => onFilterChange({ ...filters, availability: 'all' })}
                      className="hover:text-green-300"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
