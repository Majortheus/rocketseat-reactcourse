import { Trash } from "phosphor-react";
import { QuantityCounter } from "../../../../components/QuantityCounter";
import { CartItem, useCheckout } from "../../../../hooks/UseCheckout";

import { ActionsContainer, CartItemContainer, CartItemDescription, CartItemDetails, RemoveButton } from "./styles";

type CartItemProps = {
  cartItem: CartItem;
};

export function CheckoutCartItem({ cartItem }: CartItemProps) {
  const { removeFromCart, changeQuantity } = useCheckout();

  const handleQuantityChange = (quantity: number) => {
    changeQuantity(cartItem.coffee.id, quantity);
  };

  return (
    <CartItemContainer>
      <img src={cartItem.coffee.image} />
      <CartItemDetails>
        <CartItemDescription>
          <span>{cartItem.coffee.name}</span>
          <p>
            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
              cartItem.coffee.price * cartItem.quantity
            )}
          </p>
        </CartItemDescription>
        <ActionsContainer>
          <QuantityCounter quantity={cartItem.quantity} setQuantity={handleQuantityChange} />
          <RemoveButton type="button" onClick={() => removeFromCart(cartItem.coffee.id)}>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </ActionsContainer>
      </CartItemDetails>
    </CartItemContainer>
  );
}
