import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 m-2 flex flex-col justify-between shadow-lg hover:shadow-green-500/30 transition-shadow duration-300">
      <div className="flex-grow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-green-400 mb-2">{product.name}</h3>
        <p className="text-sm text-neutral-400 mb-1 italic">{product.category}</p>
        {product.description && (
          <p className="text-neutral-300 text-sm mb-3">{product.description}</p>
        )}
      </div>
      <div>
        {product.price_info && (
          <p className="text-lg font-bold text-green-300 mb-3">{product.price_info}</p>
        )}
        <a
          href="tel:+91XXXXXXXXXX" // REPLACE WITH YOUR MAIN ORDERING PHONE NUMBER
          className="block w-full text-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-900 hover:to-green-900 text-white font-medium py-2 px-4 rounded-md transition duration-150"
        >
          Call to Order
        </a>
      </div>
    </div>
  );
};

export default ProductCard;