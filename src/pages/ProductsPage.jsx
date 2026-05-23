import React, { useState } from 'react';
import { productsWithQuantities, productCategories } from '../constants'; // Get enriched products with quantities
import ProductCard from '../components/ProductCard';
import FilterPanel from '../components/FilterPanel';
import Navbar from '../components/Navbar'; // Assuming you want the navbar on this page
import Footer from '../components/Footer';   // Assuming you want the footer
import { Filter } from 'lucide-react';

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    categories: [],
    availability: 'all',
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter products based on selected filters
  const getFilteredProducts = () => {
    return productsWithQuantities.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Availability filter
      if (filters.availability === 'available' && !product.isAvailable) {
        return false;
      }
      if (filters.availability === 'outofstock' && product.isAvailable) {
        return false;
      }

      return true;
    });
  };

  const filteredProducts = getFilteredProducts();

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      categories: [],
      availability: 'all',
    });
  };

  const closeMobileFilter = () => {
    setShowMobileFilter(false);
  };

  // Group filtered products by category
  const getCategoryProducts = (category) => {
    return filteredProducts.filter((product) => product.category === category);
  };

  // Get visible categories (only those with filtered products)
  const visibleCategories = productCategories.filter((category) => {
    return getCategoryProducts(category).length > 0;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl tracking-wide">
              Our Organic Farm Products
            </h1>
            <p className="mt-4 text-xs sm:text-lg text-neutral-500">
              Browse our range of natural and traditional items. Select your preferred pack size and add to cart!
            </p>
          </div>

          {/* Main Content: Filter Panel + Products Grid */}
          <div className="flex gap-4 lg:gap-8 items-start">
            {/* Mobile Filter Button */}
            {!showMobileFilter && (
              <button
                onClick={() => setShowMobileFilter(true)}
                className="lg:hidden fixed bottom-24 right-3 sm:right-4 bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg z-30 flex items-center justify-center gap-2 transition-all flex-shrink-0"
                title="Open filters"
              >
                <Filter size={20} />
              </button>
            )}

            {/* Mobile Filter Panel Overlay */}
            {showMobileFilter && (
              <FilterPanel
                categories={productCategories}
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                isMobile={true}
                onClose={closeMobileFilter}
              />
            )}

            {/* Desktop Filter Panel */}
            <div className="hidden lg:block w-56 flex-shrink-0">
              <FilterPanel
                categories={productCategories}
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                isMobile={false}
              />
            </div>

            {/* Products Section */}
            <div className="flex-1 w-full min-w-0">
              {/* Results Count */}
              <div className="mb-6 sm:mb-8 flex justify-between items-center flex-wrap gap-2">
                <p className="text-xs sm:text-base text-neutral-400">
                  Showing <span className="text-green-400 font-semibold">{filteredProducts.length}</span> products
                </p>
              </div>

              {/* No Results Message */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-neutral-400 mb-4">No products found matching your filters</p>
                  <button
                    onClick={handleResetFilters}
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-6 rounded-md transition"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                /* Products Grid by Category */
                <>
                  {visibleCategories.map((category) => {
                    const productsInCategory = getCategoryProducts(category);
                    if (productsInCategory.length === 0) return null;

                    return (
                      <div key={category} className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-green-400 border-b-2 border-green-600 pb-2 sm:pb-3 mb-6 sm:mb-8">
                          {category}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                          {productsInCategory.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
