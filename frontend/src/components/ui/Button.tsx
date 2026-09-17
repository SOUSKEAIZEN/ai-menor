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
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main)] disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-b from-[var(--main)] to-indigo-700 text-white shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-[var(--main)] btn-premium border border-indigo-500/50": variant === "primary",
            "bg-[var(--surface)]/50 backdrop-blur-sm text-[var(--contrast)] border border-[var(--border)] hover:bg-[var(--fade)] hover:shadow-sm": variant === "secondary",
            "border border-[var(--border)] text-[var(--contrast)] hover:bg-[var(--surface)]/50 backdrop-blur-sm hover:shadow-sm": variant === "outline",
            "hover:bg-[var(--surface)]/40 text-[var(--contrast)]": variant === "ghost",
            "bg-gradient-to-b from-red-500 to-red-600 text-white shadow-sm hover:shadow-md btn-premium": variant === "danger",
            "text-[var(--main)] underline-offset-4 hover:underline": variant === "link",
            "bg-[var(--blend)] text-[var(--main)] hover:shadow-md  border border-[var(--main)]/30 btn-premium": variant === "ai",
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
