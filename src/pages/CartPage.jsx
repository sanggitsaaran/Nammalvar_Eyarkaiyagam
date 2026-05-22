import React from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6 pb-12 min-h-screen flex flex-col items-center justify-center">
          <ShoppingCart size={64} className="text-neutral-600 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-400 text-center mb-8 max-w-md">
            Browse our organic products and add them to your cart to place an order.
          </p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-md transition-all"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const totalPrice = getTotalPrice();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 pb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex gap-6 items-start"
                >
                  {/* Product Image */}
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Product Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-green-400 mb-1">{item.productName}</h3>
                    <p className="text-neutral-400 text-sm mb-2">Pack Size: <span className="text-white font-semibold">{item.size}</span></p>
                    <p className="text-orange-500 font-bold text-lg mb-4">{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                        className="bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1 rounded font-bold transition disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="999"
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val) && val > 0 && val <= 999) {
                            updateQuantity(item.cartItemId, val);
                          }
                        }}
                        className="w-12 text-center bg-neutral-700 text-white rounded px-2 py-1 [&::-webkit-outer-spin-button]:[appearance:none] [&::-webkit-inner-spin-button]:[appearance:none]"
                      />
                      <button
                        onClick={() => updateQuantity(item.cartItemId, Math.min(999, item.quantity + 1))}
                        className="bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1 rounded font-bold transition disabled:opacity-50"
                        disabled={item.quantity >= 999}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="text-right flex flex-col items-end gap-2">
                    <div>
                      <p className="text-neutral-400 text-sm">Subtotal:</p>
                      <p className="text-green-400 font-bold text-lg">
                        ₹{(parseInt(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="bg-red-600/20 hover:bg-red-600/40 text-red-400 p-2 rounded transition"
                      title="Remove from cart"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="mt-6 inline-block text-green-400 hover:text-green-300 font-semibold transition"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-neutral-700">
                <div className="flex justify-between text-neutral-300">
                  <span>Total Items:</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Number of Products:</span>
                  <span className="font-semibold">{cartItems.length}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-white font-semibold">Total Price:</span>
                  <span className="text-3xl font-bold text-green-400">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+917845980054"
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-4 rounded-lg text-center block transition-all hover:shadow-lg hover:shadow-green-500/50"
                >
                  📞 Call to Order (₹{totalPrice.toLocaleString()})
                </a>
                <button
                  onClick={clearCart}
                  className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Clear Cart
                </button>
              </div>

              <div className="mt-8 p-4 bg-neutral-900 rounded-lg border border-neutral-700">
                <p className="text-xs sm:text-sm text-neutral-400">
                  <span className="font-semibold text-green-400">📍 Pickup Address:</span><br />
                  270, Ranga Konar St, Kattoor Main, Kattoor, Ram Nagar, Coimbatore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
