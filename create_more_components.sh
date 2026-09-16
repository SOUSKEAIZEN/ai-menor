#!/bin/bash
mkdir -p frontend/src/components/ui

cat << 'EOF' > frontend/src/components/ui/Tabs.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export const Tabs = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn("w-full", className)}>{children}</div>
)

export const TabsList = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn("inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--fade)] p-1 text-[var(--muted)]", className)}>{children}</div>
)

export const TabsTrigger = ({ className, active, children, onClick }: { className?: string, active?: boolean, children: React.ReactNode, onClick?: () => void }) => (
  <button onClick={onClick} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", active ? "bg-[var(--surface)] text-[var(--contrast)] shadow-sm" : "hover:text-[var(--contrast)] hover:bg-[var(--surface)]/50", className)}>{children}</button>
)

export const TabsContent = ({ className, active, children }: { className?: string, active?: boolean, children: React.ReactNode }) => (
  active ? <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>{children}</div> : null
)
EOF

cat << 'EOF' > frontend/src/components/ui/EmptyState.tsx
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
EOF

cat << 'EOF' > frontend/src/components/ui/Skeleton.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[var(--radius-md)] bg-[var(--fade)]", className)}
      {...props}
    />
  )
}
EOF

cat << 'EOF' > frontend/src/components/ui/PageHeader.tsx
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
EOF
