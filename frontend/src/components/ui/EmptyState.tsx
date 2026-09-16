import * as React from "react"
import { cn } from "@/lib/utils"

export const EmptyState = ({ icon, title, description, action, className }: { icon?: React.ReactNode, title: string, description?: string, action?: React.ReactNode, className?: string }) => (
  <div className={cn("flex flex-col items-center justify-center p-12 text-center rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[var(--surface)]/50", className)}>
    {icon && <div className="mb-4 text-[var(--muted)] flex justify-center">{icon}</div>}
    <h3 className="text-lg font-semibold text-[var(--contrast)]">{title}</h3>
    {description && <p className="text-sm text-[var(--muted)] mt-2 max-w-sm mx-auto">{description}</p>}
    {action && <div className="mt-6">{action}</div>}
  </div>
)
