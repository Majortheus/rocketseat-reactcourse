import { produce } from "immer";
import { useEffect, useState } from "react";
import { Address } from "../@types/address";
import { PaymentType } from "../@types/payment";
import { CartItem, CheckoutContext } from "../hooks/UseCheckout";

export function CheckoutContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(JSON.parse(localStorage.getItem("@coffee-delivery:cart") || "[]"));
  const [address, setAddress] = useState<Address>({} as Address);
  const [paymentType, setPaymentType] = useState<PaymentType | undefined>(undefined);

  const addToCart = (cartItem: CartItem) => {
    const existingCartItem = cart.find((item) => item.coffee.id === cartItem.coffee.id);
    if (existingCartItem) {
      const cartWithoutItem = cart.filter((item) => item.coffee.id !== cartItem.coffee.id);
      setCart([
        ...cartWithoutItem,
        {
          ...existingCartItem,
          quantity:
            existingCartItem.quantity + cartItem.quantity >= 9 ? 9 : existingCartItem.quantity + cartItem.quantity,
        },
      ]);
      return;
    }

    setCart([...cart, cartItem]);
  };

  const removeFromCart = (cartItemId: string) => {
    const existingCartItem = cart.find((item) => item.coffee.id === cartItemId);
    if (existingCartItem) {
      const cartWithoutItem = cart.filter((item) => item.coffee.id !== cartItemId);
      setCart(cartWithoutItem);
      return;
    }
  };

  const changeQuantity = (cartItemId: string, quantity: number) => {
    const existingCartItem = cart.find((item) => item.coffee.id === cartItemId);
    if (existingCartItem) {
      setCart((prev) => {
        return produce(prev, (draft) => {
          const cartItem = draft.find((item) => item.coffee.id === cartItemId);
          if (!cartItem) return;
          cartItem.quantity = quantity;
        });
      });
      return;
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        address,
        paymentType,
        addToCart,
        removeFromCart,
        changeQuantity,
        resetCart,
        setAddress,
        setPaymentType,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
