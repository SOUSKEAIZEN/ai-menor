import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link" | "ai"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-sm)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-main text-white hover:bg-main/90": variant === "primary",
            "bg-surface text-contrast border border-border hover:bg-fade": variant === "secondary",
            "border border-border text-contrast hover:bg-fade": variant === "outline",
            "hover:bg-fade text-contrast": variant === "ghost",
            "bg-red-500 text-white hover:bg-red-600": variant === "danger",
            "text-main underline-offset-4 hover:underline": variant === "link",
            "bg-blend text-main hover:bg-blend/80": variant === "ai",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }
