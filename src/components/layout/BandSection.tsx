import type { ReactNode } from 'react'
import { bandBackgrounds, type BandId } from '../../data/bandBackgrounds'
import { cn } from '../../lib/cn'
import { BandBg } from './BandBg'

interface BandSectionProps {
  band: BandId
  className?: string
  children: ReactNode
  id?: string
  /** Extend the wavy bottom edge over the next section (hides body-bg gaps). */
  overlapBelow?: boolean
  /** Higher values paint above lower overlapping bands. */
  overlapZIndex?: number
}

export function BandSection({
  band,
  className,
  children,
  id,
  overlapBelow,
  overlapZIndex = 10,
}: BandSectionProps) {
  const background = bandBackgrounds[band]

  return (
    <section
      id={id}
      className={cn('relative', className)}
      style={overlapBelow ? { zIndex: overlapZIndex } : undefined}
    >
      <BandBg
        {...background}
        className={
          overlapBelow ? '!h-[calc(100%+3rem)] md:!h-[calc(100%+4rem)]' : undefined
        }
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
