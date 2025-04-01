import { createContext, useContext } from "react";
import { Address } from "../@types/address";
import { Coffee } from "../@types/coffee";
import { PaymentType } from "../@types/payment";

export type CartItem = {
  coffee: Coffee;
  quantity: number;
};

type CheckoutContextType = {
  cart: CartItem[];
  address: Address;
  paymentType: PaymentType | undefined;
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItemId: string) => void;
  changeQuantity: (cartItemId: string, quantity: number) => void;
  resetCart: () => void;
  setAddress: (address: Address) => void;
  setPaymentType: (paymentType: PaymentType) => void;
};

export const CheckoutContext = createContext({} as CheckoutContextType);

export function useCheckout() {
  return useContext(CheckoutContext);
}
