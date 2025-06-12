import * as lucideIcons from 'lucide-react'
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type IButton = {
  color?: 'primary' | 'danger' | 'success'
  variant?: 'solid' | 'outline'
  className?: string
  children?: ReactNode
  disabled?: boolean
  lucideIcon?: keyof typeof lucideIcons
  lucideIconPosition?: 'left' | 'right'
  lucideIconClassName?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  color = 'primary',
  variant = 'solid',
  className,
  children,
  disabled,
  lucideIcon,
  lucideIconPosition = 'left',
  lucideIconClassName,
  ...props
}: IButton) => {
  const IconComponent = lucideIcon && (lucideIcons[lucideIcon] as ElementType)

  const iconLeft = IconComponent && lucideIconPosition === 'left' && <IconComponent className={lucideIconClassName} />
  const iconRight = IconComponent && lucideIconPosition === 'right' && <IconComponent className={lucideIconClassName} />

  const disabledClassName = 'opacity-50 cursor-not-allowed'

  const textScheme: Record<NonNullable<IButton['color']>, string> = {
    primary: 'text-blue-500',
    danger: 'text-red-500',
    success: 'text-green-500',
  }

  const colorScheme: Record<NonNullable<IButton['color']>, string> = {
    primary: 'bg-blue-500 border-blue-500 hover:not-disabled:bg-blue-600',
    danger: 'bg-red-500 border-red-500 hover:not-disabled:bg-red-600',
    success: 'bg-green-500 border-green-500 hover:not-disabled:bg-green-600',
  }

  const variantScheme: Record<NonNullable<IButton['variant']>, string> = {
    solid: '',
    outline: `bg-transparent ${textScheme[color]}`,
  }

  const classNames = twMerge(
    'flex items-center rounded-sm gap-2 text-sm font-medium text-zinc-50 border px-3 py-2 cursor-pointer hover:text-zinc-50',
    colorScheme[color],
    variantScheme[variant],
    className,
    disabled && disabledClassName
  )

  return (
    <button disabled={disabled} className={classNames} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
