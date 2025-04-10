import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipRadix.Content> & {
  children: React.ReactNode
  content: React.ReactNode
}

export function Tooltip({ children, content, ...rest }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent {...rest}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
