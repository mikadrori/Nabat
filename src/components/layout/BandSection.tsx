import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface BandSectionProps {
  bgImage: string
  className?: string
  children: ReactNode
  id?: string
  /** Show the full SVG at natural aspect ratio (preserves wavy top/bottom edges). */
  bgPreserveEdges?: boolean
}

export function BandSection({
  bgImage,
  className,
  children,
  id,
  bgPreserveEdges = false,
}: BandSectionProps) {
  if (bgPreserveEdges) {
    return (
      <section id={id} className={cn('relative', className)}>
        <img
          src={bgImage}
          alt=""
          className="pointer-events-none block h-auto w-full"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center">{children}</div>
      </section>
    )
  }

  return (
    <section id={id} className={cn('relative overflow-hidden', className)}>
      <img
        src={bgImage}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
