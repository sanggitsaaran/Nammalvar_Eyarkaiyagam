import React from 'react';
import { products, productCategories } from '../constants'; // Get products and categories
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'; // Assuming you want the navbar on this page
import Footer from '../components/Footer';   // Assuming you want the footer

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            Our Organic Farm Products
          </h1>
          <p className="mt-4 text-lg text-neutral-500">
            Browse our range of natural and traditional items. Call us to place your order!
          </p>
          <p className="mt-2 text-xl font-semibold text-green-500">
            Order Hotline: +91 97919 10054 {/* YOUR PHONE NUMBER HERE */}
          </p>
        </div>

        {productCategories.map((category) => {
          const productsInCategory = products.filter(
            (product) => product.category === category
          );
          if (productsInCategory.length === 0) return null; // Don't render empty categories

          return (
            <div key={category} className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-green-400 border-b-2 border-green-600 pb-2 mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsInCategory.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
        {products.filter(p => !productCategories.includes(p.category)).length > 0 && (
            <div className="mb-12">
                 <h2 className="text-2xl font-semibold tracking-wide text-green-400 border-b border-green-700 pb-2 mb-6">
                    Other Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.filter(p => !productCategories.includes(p.category)).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;