import { Box, Button, Toast, ToastProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { toast, ToastContainer } from 'react-toastify'

export default {
  title: 'Info/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          <Button onClick={() => toast(Story())}>Toasty!!</Button>
          <ToastContainer
            closeButton={false}
            hideProgressBar={true}
            toastStyle={{ padding: '0', background: 'transparent' }}
          />
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
