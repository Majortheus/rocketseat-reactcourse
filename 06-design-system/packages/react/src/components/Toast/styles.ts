import { styled } from '../../styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  width: '360px',
  height: '82px',
  padding: '$3 $5',
  backgroundColor: '$gray800',

  borderRadius: '$sm',
  border: '1px solid $gray600',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$1',
})

export const ToastTitle = styled(Heading, {
  color: '$white',
  defaultVariants: {
    size: 'sm',
  },
  fontWeight: '$bold',
})

export const ToastDescription = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'sm',
  },
})

export const ToastClose = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  padding: '0',

  width: '20px',
  height: '20px',

  backgroundColor: 'transparent',
  border: 'none',

  svg: {
    color: '$gray200',
  },
})
