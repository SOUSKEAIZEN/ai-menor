import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "ai" | "success" | "warning" | "danger"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-main text-white hover:bg-main/80": variant === "default",
          "border-transparent bg-fade text-contrast hover:bg-fade/80": variant === "secondary",
          "text-contrast": variant === "outline",
          "border-transparent bg-blend text-main": variant === "ai",
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100": variant === "success",
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100": variant === "warning",
          "border-transparent bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100": variant === "danger",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
