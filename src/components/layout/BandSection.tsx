import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface BandSectionProps {
  bgImage: string
  className?: string
  children: ReactNode
  id?: string
}

export function BandSection({ bgImage, className, children, id }: BandSectionProps) {
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
