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
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 min-w-0">
                    <Link to="/" className="flex items-center gap-2 min-w-0"> {/* Link for logo */}
                      <img className="h-10 w-10 flex-shrink-0" src={logo} alt="Nammalvar Eyarkaiyagam Logo" />
                      <span className="text-sm md:text-xl tracking-tight truncate">Nammalvar Eyarkaiyagam</span>
                    </Link>
                </div>
                <ul className="hidden md:flex ml-14 space-x-8">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="hover:text-green-400 transition-colors bg-none border-none cursor-pointer text-inherit text-sm"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="hidden md:flex justify-center space-x-6 items-center">
                  <a href="tel:+917845980054" className="py-2 px-3 border border-neutral-600 rounded-md hover:border-green-500 transition-colors text-sm whitespace-nowrap">
                    Call to Order
                  </a>
                  <Link to="/cart" className="relative py-2 px-3 rounded-md hover:bg-neutral-700 transition-colors flex items-center gap-2 flex-shrink-0">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>
                <div className="flex md:hidden items-center gap-3">
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
              <div className="fixed inset-0 top-16 z-40 bg-neutral-900/95 backdrop-blur-sm p-6 flex flex-col lg:hidden">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="hover:text-green-400 transition-colors bg-none border-none cursor-pointer text-inherit text-lg font-medium w-full text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-neutral-700">
                  <a href="tel:+917845980054" className="py-3 px-3 border border-green-600 rounded-md text-center hover:bg-green-600/10 transition-colors font-medium">
                    📞 Call to Order
                  </a>
                  <Link
                    to="/cart"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="py-3 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-center flex items-center justify-center gap-2 font-medium hover:from-green-600 hover:to-green-900 transition-all"
                  >
                    <ShoppingCart size={18} />
                    Cart {cartCount > 0 && `(${cartCount})`}
                  </Link>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar