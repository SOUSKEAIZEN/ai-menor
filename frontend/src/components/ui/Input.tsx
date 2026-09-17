import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--glass-fill)] backdrop-blur-xl px-4 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--muted)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main-light)] focus-visible:border-[var(--main)] focus-visible:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--contrast)] transition-all duration-300 hover:border-[var(--main)]/40",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
