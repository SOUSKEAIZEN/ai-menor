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
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-light)] disabled:pointer-events-none disabled:opacity-50 tracking-tight",
          {
            "bg-gradient-to-b from-[var(--main)] to-[#4338CA] text-white shadow-md hover:shadow-xl hover:-translate-y-[1px] btn-premium border border-[var(--border-highlight)]": variant === "primary",
            "bg-[var(--glass-fill)] backdrop-blur-md text-[var(--contrast)] border border-[var(--border)] hover:border-[var(--main)]/30 hover:bg-[var(--surface)] hover:shadow-md btn-premium": variant === "secondary",
            "border border-[var(--border)] text-[var(--contrast)] hover:bg-[var(--glass-fill)] backdrop-blur-sm hover:shadow-md btn-premium hover:border-[var(--main)]/30": variant === "outline",
            "hover:bg-[var(--glass-fill)] text-[var(--contrast)]": variant === "ghost",
            "bg-gradient-to-b from-red-500 to-red-600 text-white shadow-md hover:shadow-xl hover:-translate-y-[1px] btn-premium border border-[var(--border-highlight)]": variant === "danger",
            "text-[var(--main)] underline-offset-4 hover:underline": variant === "link",
            "bg-gradient-to-b from-[var(--blend)] to-[var(--background)] text-[var(--main)] hover:shadow-lg border border-[var(--main)]/20 btn-premium hover:-translate-y-[1px]": variant === "ai",
            "h-10 px-5 py-2": size === "default",
            "h-9 rounded-lg px-4 text-xs": size === "sm",
            "h-12 rounded-2xl px-8 text-base": size === "lg",
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
