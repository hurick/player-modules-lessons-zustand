import * as lucideIcons from 'lucide-react'
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type IButton = {
  color?: 'primary' | 'danger' | 'success'
  variant?: 'solid' | 'outline'
  className?: string
  children?: ReactNode
  lucideIcon?: keyof typeof lucideIcons
  lucideIconPosition?: 'left' | 'right'
  lucideIconClassName?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  color = 'primary',
  variant = 'solid',
  className,
  children,
  lucideIcon,
  lucideIconPosition = 'left',
  lucideIconClassName,
  ...props
}: IButton) => {
  const IconComponent = lucideIcon && (lucideIcons[lucideIcon] as ElementType)

  const isIconLeft = IconComponent && lucideIconPosition === 'left' && <IconComponent className={lucideIconClassName} />
  const isIconRight = IconComponent && lucideIconPosition === 'right' && (
    <IconComponent className={lucideIconClassName} />
  )

  const textScheme: Record<NonNullable<IButton['color']>, string> = {
    primary: 'text-blue-500',
    danger: 'text-red-500',
    success: 'text-green-500',
  }

  const colorScheme: Record<NonNullable<IButton['color']>, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 border-blue-500',
    danger: 'bg-red-500 hover:bg-red-600 border-red-500',
    success: 'bg-green-500 hover:bg-green-600 border-green-500',
  }

  const variantScheme: Record<NonNullable<IButton['variant']>, string> = {
    solid: '',
    outline: `bg-transparent ${textScheme[color]}`,
  }

  const classNames = twMerge(
    'flex items-center rounded-sm gap-2 text-sm font-medium text-zinc-50 border px-3 py-2 cursor-pointer hover:text-zinc-50',
    colorScheme[color],
    variantScheme[variant],
    className
  )

  return (
    <button className={classNames} {...props}>
      {isIconLeft}
      {children}
      {isIconRight}
    </button>
  )
}
