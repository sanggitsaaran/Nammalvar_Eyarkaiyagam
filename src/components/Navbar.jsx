import {Menu, X} from  "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

      const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
      };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <Link to="/" className="flex items-center"> {/* Link for logo */}
                      <img className="h-10 w-10 mr-2" src={logo} alt="Nammalvar Eyarkaiyagam Logo" />
                      <span className="text-xl tracking-tight">Nammalvar Eyarkaiyagam</span>
                    </Link>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      {/* Use Link for client-side navigation, regular <a> for external or #hash links on same page */}
                      {item.href.startsWith('/') ? (
                        <Link to={item.href} className="hover:text-green-400 transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <a href={item.href} className="hover:text-green-400 transition-colors">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a href="tel:+91XXXXXXXXXX" className="py-2 px-3 border rounded-md hover:border-green-500 transition-colors">
                    Call to Order
                  </a>
                  <Link
                    to="/#footer" // Example: Link to contact section on homepage
                    className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md hover:from-green-600 hover:to-green-700 transition-all"
                  >
                    Find Us
                  </Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className="py-4">
                      {item.href.startsWith('/') ? (
                        <Link to={item.href} onClick={toggleNavbar} className="hover:text-green-400 transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <a href={item.href} onClick={toggleNavbar} className="hover:text-green-400 transition-colors">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6">
                  <a href="tel:+91XXXXXXXXXX" className="py-2 px-3 border rounded-md">
                    Call to Order
                  </a>
                  <Link
                    to="/#footer"
                    onClick={toggleNavbar}
                    className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800"
                  >
                    Find Us
                  </Link>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar