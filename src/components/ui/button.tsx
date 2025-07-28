import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white shadow-sm hover:bg-gray-800",
        destructive: "bg-danger-500 text-white shadow-sm hover:bg-danger-600",
        outline: "border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
        ghost: "text-gray-900 hover:bg-gray-100",
        link: "text-periwinkle-600 underline-offset-4 hover:underline",
        // Custom Bunni variants
        "bunni-primary": "bg-periwinkle-500 text-white shadow-md hover:bg-periwinkle-600 hover:shadow-lg",
        "bunni-secondary": "bg-periwinkle-100 text-periwinkle-700 border border-periwinkle-300 hover:bg-periwinkle-200 hover:border-periwinkle-400",
        "bunni-ghost": "text-periwinkle-700 hover:bg-periwinkle-50 hover:text-periwinkle-800",
        "bunni-outline": "border border-periwinkle-300 text-periwinkle-700 bg-white hover:bg-periwinkle-50 hover:border-periwinkle-400",
        "bunni-gradient": "bg-gradient-to-r from-periwinkle-500 to-periwinkle-600 text-white shadow-md hover:from-periwinkle-600 hover:to-periwinkle-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",ß
        icon: "h-9 w-9",
        // Custom sizes
        "xs": "h-6 rounded px-2 text-xs",
        "xl": "h-12 rounded-lg px-10 text-base",
        "2xl": "h-14 rounded-xl px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const buttonContent = (
      <>
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    )

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {buttonContent}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 