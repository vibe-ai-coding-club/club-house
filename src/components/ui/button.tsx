import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold ring-offset-background transition-all shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-brand-primary text-[#0f172a] hover:bg-brand-primary-dark hover:shadow-md disabled:bg-white/20 disabled:text-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // 밝은 배경 위의 기본 CTA (검정 필)
        cta: 'rounded-none bg-black text-white hover:bg-black/85 hover:shadow-md',
        // 어두운 배경 위의 기본 CTA (흰색 필)
        ctaInverted: 'rounded-none bg-white text-black hover:bg-white/90 hover:shadow-md',
        // 어두운 배경 위의 보조 CTA (아웃라인)
        ctaOutline:
          'rounded-none border border-white/25 bg-transparent text-white shadow-none hover:border-white/50 hover:bg-white/5'
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'px-8 py-4 text-base',
        icon: 'h-10 w-10',
        // 마케팅 CTA 공통 크기 (텍스트/패딩 통일)
        cta: 'px-6 py-3 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled && 'bg-white/20 text-foreground opacity-50 cursor-not-allowed'
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
