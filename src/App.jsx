import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OrderingSection  from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const HomePageLayout  = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection id="products-overview" />
        <Workflow id="philosophy" />
        <OrderingSection  id="how-to-order" />
        <Testimonials id="testimonials" />
        <Footer id="footer" />
      </div>
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* You can add more routes here later, e.g., /about, /contact-page */}
      </Routes>
    </CartProvider>
  );
};

export default App