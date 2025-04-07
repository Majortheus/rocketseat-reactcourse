import { AppProps } from "next/app"
import { Drawer } from "vaul"
import { CartDrawer } from "../components/cart-drawer"
import { Header } from "../components/header"
import { CartProvider } from "../context/cart-context"
import { globalStyles } from "../styles/global"
import {
  Container,
  DrawerOverlay
} from "../styles/pages/app"


globalStyles()

export default function App({ Component, pageProps }: AppProps) {


  return (
    <CartProvider>
      <Drawer.Root direction="right">
        <Container>
          <Header />
          <Component {...pageProps} />
          <Drawer.Portal>
            <DrawerOverlay />
            <CartDrawer />
          </Drawer.Portal>
        </Container>
      </Drawer.Root>
    </CartProvider>
  )
}
