import * as React from "react"
import { cn } from "@/lib/utils"

export const PageHeader = ({ title, description, action, className }: { title: string, description?: string, action?: React.ReactNode, className?: string }) => (
  <div className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8", className)}>
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--contrast)] font-display">{title}</h1>
      {description && <p className="text-[var(--muted)] mt-1">{description}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
)
