import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { Drawer } from "vaul";
import logoImg from '../../assets/logo.svg';
import { CartContext } from "../../context/cart-context";
import { HeaderContainer } from "./styles";

export function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <HeaderContainer>
      <Link href="/"><Image {...logoImg} /></Link>
      <Drawer.Trigger>
        <Handbag size={22} weight="bold" />
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </Drawer.Trigger>
    </HeaderContainer>
  )
}