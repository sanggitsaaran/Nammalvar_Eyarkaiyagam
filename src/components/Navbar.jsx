import {Menu, X, ShoppingCart} from  "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { navItems } from "../constants";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { getTotalItems } = useCart();
    const cartCount = getTotalItems();

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };

    // Handle navigation for hash links
    const handleNavigation = (href) => {
      if (href.startsWith('#')) {
        // If on products page, navigate to home first, then scroll
        if (location.pathname !== '/') {
          navigate('/' + href);
          setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          // Already on home, just scroll
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (href.startsWith('/')) {
        navigate(href);
      } else {
        window.location.href = href;
      }
      setMobileDrawerOpen(false);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-3 sm:px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center gap-2 sm:gap-4">
                <div className="flex items-center flex-shrink-0 min-w-0">
                    <Link to="/" className="flex items-center gap-1 sm:gap-2 min-w-0"> {/* Link for logo */}
                      <img className="h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0" src={logo} alt="Nammalvar Eyarkaiyagam Logo" />
                      <span className="text-xs sm:text-sm lg:text-xl tracking-tight truncate">Nammalvar Eyarkaiyagam</span>
                    </Link>
                </div>
                <ul className="hidden lg:flex ml-4 space-x-2 lg:space-x-6">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="hover:text-green-400 transition-colors bg-none border-none cursor-pointer text-inherit text-xs sm:text-sm lg:text-base px-1"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-3 lg:space-x-4 items-center">
                  <a href="tel:+917845980054" className="py-2 px-2 sm:px-3 border border-neutral-600 rounded-md hover:border-green-500 transition-colors text-xs sm:text-sm whitespace-nowrap">
                    Call to Order
                  </a>
                  <Link to="/cart" className="relative py-2 px-2 sm:px-3 rounded-md hover:bg-neutral-700 transition-colors flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>
                <div className="flex lg:hidden items-center gap-2 sm:gap-3">
                  <Link to="/cart" className="relative p-2 rounded-md hover:bg-neutral-700 transition-colors flex items-center gap-2">
                    <ShoppingCart size={18} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  <button onClick={toggleNavbar} className="p-2">
                    {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <>
                {/* Blurred Backdrop Overlay */}
                <div className="fixed inset-0 top-16 z-30 bg-black/70 backdrop-blur-md lg:hidden"></div>
                {/* Mobile Menu */}
                <div className="fixed left-0 right-0 top-16 z-40 bg-neutral-900 backdrop-blur-lg p-4 sm:p-6 flex flex-col lg:hidden max-h-screen overflow-y-auto">
                  <ul className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="hover:text-green-400 transition-colors bg-none border-none cursor-pointer text-inherit text-base sm:text-lg font-medium w-full text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 sm:gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-700">
                  <a href="tel:+917845980054" className="py-2 sm:py-3 px-3 border border-green-600 rounded-md text-center hover:bg-green-600/10 transition-colors font-medium text-sm sm:text-base">
                    📞 Call to Order
                  </a>
                  <Link
                    to="/cart"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="py-2 sm:py-3 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-center flex items-center justify-center gap-2 font-medium hover:from-green-600 hover:to-green-900 transition-all text-sm sm:text-base"
                  >
                    <ShoppingCart size={18} />
                    Cart {cartCount > 0 && `(${cartCount})`}
                  </Link>
                </div>
              </div>
              </>
            )}
        </div>
    </nav>
  )
}

export default Navbar