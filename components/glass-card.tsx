import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl backdrop-blur-xl bg-card/50 border border-primary/20 p-6",
        "shadow-[0_0_40px_rgba(74,158,187,0.1)]",
        hover && "transition-all duration-300 hover:shadow-[0_0_60px_rgba(74,158,187,0.2)] hover:-translate-y-1",
        className,
      )}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
