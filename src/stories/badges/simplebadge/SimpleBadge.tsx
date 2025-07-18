import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"


const SimpleBadgeVariants = cva(
  "inline-flex w-fit items-center rounded-full px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-gray-300 border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface SimpleBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SimpleBadgeVariants> {}

function SimpleBadge({ className, variant, ...props }: SimpleBadgeProps) {
  return (
    <div className={clsx(SimpleBadgeVariants({ variant }), className)} {...props} />
  )
}

export { SimpleBadge, SimpleBadgeVariants }
