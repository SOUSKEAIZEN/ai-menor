"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{ value: string; onValueChange: (v: string) => void }>({ value: '', onValueChange: () => {} })

export const Tabs = ({ className, children, defaultValue, value, onValueChange, tabs }: { className?: string, children?: React.ReactNode, defaultValue?: string, value?: string, onValueChange?: (v: string) => void, tabs?: { id: string, label: string, content: React.ReactNode }[] }) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || (tabs && tabs.length > 0 ? tabs[0].id : ""))
  const currentValue = value !== undefined ? value : internalValue
  const handleValueChange = (v: string) => {
    setInternalValue(v)
    if (onValueChange) onValueChange(v)
  }
  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)}>
        {tabs ? (
          <>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>{tab.content}</TabsContent>
            ))}
          </>
        ) : children}
      </div>
    </TabsContext.Provider>
  )
}

export const TabsList = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn("inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--fade)] p-1 text-[var(--muted)]", className)}>{children}</div>
)

export const TabsTrigger = ({ className, value, active, children, onClick }: { className?: string, value?: string, active?: boolean, children: React.ReactNode, onClick?: () => void }) => {
  const ctx = React.useContext(TabsContext)
  const isActive = active !== undefined ? active : (value !== undefined && ctx.value === value)
  const handleClick = () => {
    if (value !== undefined) ctx.onValueChange(value)
    if (onClick) onClick()
  }
  return (
    <button onClick={handleClick} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", isActive ? "bg-[var(--surface)] text-[var(--contrast)] shadow-sm" : "hover:text-[var(--contrast)] hover:bg-[var(--surface)]/50", className)}>{children}</button>
  )
}

export const TabsContent = ({ className, value, active, children }: { className?: string, value?: string, active?: boolean, children: React.ReactNode }) => {
  const ctx = React.useContext(TabsContext)
  const isActive = active !== undefined ? active : (value !== undefined && ctx.value === value)
  return isActive ? <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>{children}</div> : null
}
