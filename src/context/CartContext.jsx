import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'nammalvar_cart';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error);
      }
    }
  }, [cartItems, isHydrated]);

  const addToCart = (product, quantityId, size, price) => {
    const cartItemId = `${product.id}-${quantityId}`;
    const existingItem = cartItems.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        cartItemId,
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        quantityId,
        size,
        price,
        quantity: 1,
      }]);
    }
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(cartItems.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    // Validate quantity
    if (typeof newQuantity !== 'number' || isNaN(newQuantity)) {
      console.error('Invalid quantity provided');
      return;
    }
    
    const qty = Math.max(0, Math.min(999, Math.floor(newQuantity)));
    
    if (qty <= 0) {
      removeFromCart(cartItemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: qty }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    try {
      return cartItems.reduce((total, item) => {
        try {
          const priceValue = parseInt(item.price.replace(/[₹,]/g, ''));
          if (isNaN(priceValue)) return total;
          return total + (priceValue * (item.quantity || 1));
        } catch (err) {
          console.error('Error parsing price for item:', item, err);
          return total;
        }
      }, 0);
    } catch (error) {
      console.error('Error calculating total price:', error);
      return 0;
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
