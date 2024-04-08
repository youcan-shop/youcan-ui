export type ButtonSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type ButtonIconPosition = 'left' | 'right' | 'only';

export interface ButtonProps {
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}

export interface ActionButtonProps {
  icon?: string
}
