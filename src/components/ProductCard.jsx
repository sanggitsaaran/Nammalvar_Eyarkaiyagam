import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const { addToCart } = useCart();

  // Auto-select first available quantity on component mount
  useEffect(() => {
    if (product.quantities && product.quantities.length > 0 && !selectedQuantity) {
      const firstAvailable = product.quantities.find(q => q.available);
      if (firstAvailable) {
        setSelectedQuantity(firstAvailable);
      }
    }
  }, [product, selectedQuantity]);

  const handleAddToCart = () => {
    if (!selectedQuantity) {
      alert('Please select a quantity');
      return;
    }
    
    addToCart(product, selectedQuantity.id, selectedQuantity.size, selectedQuantity.price);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  // Check if product has any available quantity
  const hasAnyAvailable = product.quantities && product.quantities.some(q => q.available);
  const isProductAvailable = product.isAvailable !== false && hasAnyAvailable;

  return (
    <div className={`rounded-xl p-4 sm:p-6 m-1 sm:m-2 flex flex-col justify-between shadow-lg transition-all duration-300 ${
      isProductAvailable 
        ? 'bg-neutral-800 border border-neutral-700 hover:shadow-green-500/30' 
        : 'bg-neutral-900 border border-neutral-700 opacity-75'
    }`}>
      <div className="flex-grow">
        {/* Product Image */}
        <div className="relative mb-3 sm:mb-4">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-36 sm:h-48 object-cover rounded-md transition-opacity ${
              !isProductAvailable && 'grayscale opacity-60'
            }`}
          />
          {!isProductAvailable && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-1 sm:mb-2 leading-tight">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-neutral-300 text-xs sm:text-sm mb-3 sm:mb-4">{product.description}</p>
        )}

        {/* Quantity Selector */}
        {product.quantities && product.quantities.length > 0 && (
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-neutral-400 mb-2 font-semibold">Pack Size:</p>
            <div className="flex flex-wrap gap-2">
              {product.quantities.map((qty) => (
                <button
                  key={qty.id}
                  onClick={() => qty.available && setSelectedQuantity(qty)}
                  disabled={!qty.available}
                  className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-all ${
                    qty.available
                      ? selectedQuantity?.id === qty.id
                        ? 'bg-green-600 text-white border border-green-500 shadow-lg shadow-green-500/50'
                        : 'bg-neutral-700 text-neutral-300 hover:bg-green-500/30 border border-neutral-600'
                      : 'bg-neutral-900 text-neutral-600 opacity-50 cursor-not-allowed border border-neutral-800'
                  }`}
                >
                  {qty.size}
                  {!qty.available && ' ✕'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {/* Price Display - Always visible when quantity selected */}
        {selectedQuantity && (
          <p className="text-md sm:text-lg font-bold text-orange-500 mb-2 sm:mb-3">
            {selectedQuantity.price}
          </p>
        )}

        {/* Add to Cart / Out of Stock */}
        {isProductAvailable ? (
          <>
            <button
              onClick={handleAddToCart}
              disabled={!selectedQuantity}
              className={`w-full py-2 px-3 sm:px-4 rounded-md font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                selectedQuantity
                  ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white'
                  : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            {showAddedMessage && (
              <div className="mt-2 text-center text-xs sm:text-sm text-green-400 font-semibold">
                ✓ Added to cart!
              </div>
            )}
          </>
        ) : (
          <button
            disabled
            className="w-full py-2 px-3 sm:px-4 rounded-md font-medium bg-neutral-700 text-neutral-500 cursor-not-allowed text-sm sm:text-base"
          >
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;