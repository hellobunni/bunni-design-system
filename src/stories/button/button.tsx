import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"


const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors ring-offset-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-dark",
        destructive: "bg-danger text-white hover:bg-danger-dark",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-[var(--gray-100)] text-foreground hover:bg-gray-100/80",
        ghost: "hover:bg-nuted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
}

// Custom Slot component to replace Radix Slot
type SlotProps = {
  children: React.ReactElement
} & React.HTMLAttributes<HTMLElement>

const Slot = React.forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  const innerRef = React.useRef<HTMLElement>(null)
  React.useImperativeHandle(ref, () => innerRef.current as HTMLElement)
  // Only pass ref if the child is a forwardRef component
  const childProps = { ...props }
  if (typeof children.type === 'object' && 'displayName' in children.type && (children.type as any).$$typeof) {
    (childProps as any).ref = innerRef
  }
  return React.cloneElement(children, childProps)
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      if (!React.isValidElement(children)) {
        // I’m throwing if you try to use asChild without a valid child — keeps things predictable.
        throw new Error("Button with asChild=true needs a single valid React element as its child.")
      }
      return (
        <Slot
          className={clsx(buttonVariants({ variant, size, className }))}
          ref={ref as any}
          {...props}
        >
          {children}
        </Slot>
      )
    }
    return (
      <button
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
