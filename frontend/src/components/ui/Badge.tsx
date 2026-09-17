import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "ai" | "success" | "warning" | "danger"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-[transform,box-shadow,background-color,border-color,color,opacity] uppercase tracking-wider shadow-sm",
        {
          "border-[var(--border-highlight)] bg-gradient-to-b from-[var(--main-light)] to-[var(--main)] text-white shadow-md": variant === "default",
          "border-[var(--border)] bg-[var(--glass-fill)] backdrop-blur-md text-[var(--contrast)]": variant === "secondary",
          "border-[var(--border)] text-[var(--contrast)] backdrop-blur-sm": variant === "outline",
          "border-[var(--main)]/30 bg-gradient-to-br from-[var(--blend)] to-[var(--background)] text-[var(--main)] shadow-[0_2px_10px_rgba(79,70,229,0.15)]": variant === "ai",
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 backdrop-blur-md": variant === "success",
          "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 backdrop-blur-md": variant === "warning",
          "border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400 backdrop-blur-md": variant === "danger",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
