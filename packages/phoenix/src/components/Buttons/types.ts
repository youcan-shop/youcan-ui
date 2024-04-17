export type ButtonSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export interface ButtonProps {
  variant?: ButtonVariants
  size?: ButtonSize
  disabled?: boolean
  rounded?: boolean
  href?: string
}

export interface ActionButtonProps {
  icon?: string
}
