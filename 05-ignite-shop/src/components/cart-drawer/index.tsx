import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import { CartItem, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, CartItemsContainer, CartItemsList, CartTotalContainer, CartTotalPriceContainer, CartTotalQuantityContainer, DrawerClose, DrawerContent, DrawerTitle } from "./styles";

export function CartDrawer() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function handleRemoveItem(itemId: string) {
    removeFromCart(itemId);
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        cartItems
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert('Falha ao redirecionar ao checkout!');
    } finally {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <DrawerContent>
      <DrawerClose asChild>
        <X size={32} weight="bold" />
      </DrawerClose>
      <CartItemsContainer>
        <DrawerTitle>Sacola de compras</DrawerTitle>
        <CartItemsList>
          {cartItems && cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.image} width={95} height={95} alt="" />
              <CartItemInfo>
                <CartItemName>{item.name}</CartItemName>
                <CartItemPrice>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CartItemPrice>
                <button type="button" onClick={() => handleRemoveItem(item.id)}>Remover</button>
              </CartItemInfo>
            </CartItem>
          ))}
        </CartItemsList>
      </CartItemsContainer>
      <CartTotalContainer>
        <CartTotalQuantityContainer>
          <span>Quantidade</span>
          <span>{cartItems.length} {cartItems.length > 1 ? 'itens' : 'item'}</span>
        </CartTotalQuantityContainer>
        <CartTotalPriceContainer>
          <span>Valor total</span>
          <span>{cartItems.reduce((acc, item) => acc + item.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </CartTotalPriceContainer>
        <button type="button" onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
          Finalizar compra
        </button>
      </CartTotalContainer>
    </DrawerContent>
  )
}