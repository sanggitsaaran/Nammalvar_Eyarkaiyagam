import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 sm:p-6 m-1 sm:m-2 flex flex-col justify-between shadow-lg hover:shadow-green-500/30 transition-shadow duration-300">
      <div className="flex-grow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 sm:h-48 object-cover rounded-md mb-3 sm:mb-4"
        />
        <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-1 sm:mb-2 leading-tight">{product.name}</h3>
        <p className="text-xs sm:text-sm text-neutral-400 mb-1 italic">{product.category}</p>
        {product.description && (
          <p className="text-neutral-300 text-xs sm:text-sm mb-2 sm:mb-3">{product.description}</p>
        )}
      </div>
      <div>
        {product.price_info && (
          <p className="text-md sm:text-lg font-bold text-orange-500 mb-2 sm:mb-3">{product.price_info}</p>
        )}
        <a
          href="tel:+919791910054" // REPLACE WITH YOUR MAIN ORDERING PHONE NUMBER
          className="block w-full text-center bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-2 px-3 sm:px-4 rounded-md transition duration-150 text-sm sm:text-base"
        >
          Call to Order
        </a>
      </div>
    </div>
  );
};

export default ProductCard;