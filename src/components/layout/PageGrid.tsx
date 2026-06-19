import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface PageGridProps {
  children: ReactNode
  className?: string
}

/** Figma layout grid: 6 stretch columns, 20px gutters. */
export function PageGrid({ children, className }: PageGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-6 gap-x-[var(--grid-gutter)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
