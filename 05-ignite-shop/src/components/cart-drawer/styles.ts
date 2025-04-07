import Image from "next/image"
import { Drawer } from "vaul"
import { styled } from "../../styles"

export const DrawerContent = styled(Drawer.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  backgroundColor: '$gray800',
  height: '100vh',
  width: '100%',
  maxWidth: 480,
  padding: '72px 48px 48px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const DrawerClose = styled(Drawer.Close, {
  position: 'absolute',
  top: 28,
  right: 28,

  padding: 4,

  '&:hover': {
    opacity: 0.8,
  }
})

export const DrawerTitle = styled(Drawer.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
})

export const CartItemsContainer = styled('div', {
  overflowY: 'auto',
  height: '100%',
})
 
export const CartItemsList = styled('div', {
  marginTop: '32px',

  display: 'flex',
  flexDirection: 'column',
  gap: '24px',  
})
 
export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})
 
export const CartItemImage = styled(Image, {
  width: 100,
  height: 91,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})
 
export const CartItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '$green500',
    fontSize: '16px',
    fontWeight: 'bold',
    alignSelf: 'flex-start',

    '&:hover': {
      opacity: 0.8,
    }
  }

})
 
export const CartItemName = styled('div', {
  fontSize: '$md',
  color: '$gray300',
})
 
export const CartItemPrice = styled('div', {
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$gray100',
})
 
export const CartTotalContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  
  '> button': {
    marginTop: '58px',
    padding: '20px 5px',

    border: 0,
    borderRadius: 8,
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8,
    }
  }
})
 
export const CartTotalQuantityContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

})
 
export const CartTotalPriceContainer = styled('div', {
  marginTop: '8px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  }
})
