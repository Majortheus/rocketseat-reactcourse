import { Drawer } from "vaul";
import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const DrawerOverlay = styled(Drawer.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
})
