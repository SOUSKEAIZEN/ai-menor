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
  <div className={cn("inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--glass-fill)] backdrop-blur-2xl border border-[var(--border)] p-1.5 text-[var(--muted)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]", className)}>{children}</div>
)

export const TabsTrigger = ({ className, value, active, children, onClick }: { className?: string, value?: string, active?: boolean, children: React.ReactNode, onClick?: () => void }) => {
  const ctx = React.useContext(TabsContext)
  const isActive = active !== undefined ? active : (value !== undefined && ctx.value === value)
  const handleClick = () => {
    if (value !== undefined) ctx.onValueChange(value)
    if (onClick) onClick()
  }
  return (
    <button onClick={handleClick} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--main)] disabled:pointer-events-none disabled:opacity-50", isActive ? "bg-[var(--surface)] text-[var(--main)] shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05),inset_0_1px_0_0_var(--border-highlight)] border border-[var(--border)]/50" : "hover:text-[var(--contrast)] hover:bg-[var(--glass-strong)]", className)}>{children}</button>
  )
}

export const TabsContent = ({ className, value, active, children }: { className?: string, value?: string, active?: boolean, children: React.ReactNode }) => {
  const ctx = React.useContext(TabsContext)
  const isActive = active !== undefined ? active : (value !== undefined && ctx.value === value)
  return isActive ? <div className={cn("mt-4 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500", className)}>{children}</div> : null
}
