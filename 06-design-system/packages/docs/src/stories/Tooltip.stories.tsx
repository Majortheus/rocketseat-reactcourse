import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Info/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {
    children: {
      control: null,
    },
    content: {
      control: 'text',
    },
    side: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
    sideOffset: {
      control: 'number',
    },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Text style={{ display: 'inline-block' }}>Help</Text>,
    content: '26 de Outubro - Disponível',
    side: 'right',
    sideOffset: 10,
  },
}
