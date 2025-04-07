import { styled } from "@stitches/react"

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> button': {
    position: 'relative',
    background: '$gray800',
    border: 'none',
    cursor: 'pointer',
    padding: 12,
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$gray300',

    '&:hover': {
      opacity: 0.8,
    },

    'span': {
      position: 'absolute',
          top: '-8px',
          right: '-8px',

          width: '27px',
          height: '27px',

          display:' flex',
          alignItems: 'center',
          justifyContent: 'center',

          border: '3px solid $gray900',
          borderRadius: '100%',
          transition: 'all 0.1s',

          background: '$green500',
          color: '$white',

          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '1',
    }
  },
})