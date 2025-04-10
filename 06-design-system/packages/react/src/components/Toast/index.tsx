import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'

export type ToastProps = {
  title: string
  description?: string
  closeToast: () => void
}

export function Toast({ title, description, closeToast }: ToastProps) {
  return (
    <ToastContainer>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
      <ToastClose onClick={closeToast}>
        <X size={20} />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
