import { createContext, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const newItems = [...cartItems, item];
    setCartItems(newItems);
  };

  const removeFromCart = (itemId: string) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};  