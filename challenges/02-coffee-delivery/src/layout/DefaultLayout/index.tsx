import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/LogoCoffeeDelivery.svg";
import { useCheckout } from "../../hooks/UseCheckout";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  const { cart } = useCheckout();

  return (
    <LayoutContainer>
      <header>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Guarulhos, SP</span>
          </div>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && <span>{cart.length}</span>}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
