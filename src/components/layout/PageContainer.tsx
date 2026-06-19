import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

/** Figma stretch grid: full width with edge margin slightly larger than gutter. */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('w-full px-[var(--grid-margin)]', className)}>
      {children}
    </div>
  )
}
