import type { ReactNode } from 'react'
import type { BandId } from '../../data/bandBackgrounds'
import { BandSection } from '../layout/BandSection'
import { PageContainer } from '../layout/PageContainer'
import { PageGrid } from '../layout/PageGrid'
import { cn } from '../../lib/cn'

/** Figma story text blocks: 3 cols wide, stepping left each band (col-start 1 → 2 → 3 in RTL). */
export type StoryColumnStart = 1 | 2 | 3 | 4

interface StorySectionProps {
  id?: string
  title: string
  children: ReactNode
  band: BandId
  columnStart?: StoryColumnStart
  overlapBelow?: boolean
  overlapZIndex?: number
  className?: string
}

const columnStartClass: Record<StoryColumnStart, string> = {
  1: 'md:col-start-1',
  4: 'md:col-start-4',
  3: 'md:col-start-3',
  2: 'md:col-start-2',
}

export function StorySection({
  id,
  title,
  children,
  band,
  columnStart = 1,
  overlapBelow,
  overlapZIndex,
  className,
}: StorySectionProps) {
  return (
    <BandSection
      id={id}
      band={band}
      overlapBelow={overlapBelow}
      overlapZIndex={overlapZIndex}
      className={cn('py-16 md:py-20', className)}
    >
      <PageContainer>
        <PageGrid>
          <div
            className={cn(
              'col-span-6 text-cream md:col-span-3',
              columnStartClass[columnStart],
            )}
          >
            <h2 className="font-display mb-6 text-left text-[clamp(2.5rem,7.8125vw,6.25rem)] leading-[0.85]">
              {title}
            </h2>
            <div className="text-right leading-[1.6]">{children}</div>
          </div>
        </PageGrid>
      </PageContainer>
    </BandSection>
  )
}

interface StoryBodyProps {
  lead: string
  children: ReactNode
}

export function StoryBody({ lead, children }: StoryBodyProps) {
  return (
    <p className="font-book text-[1.375rem] leading-[1.6]">
      <span className="font-medium-weight text-[1.625rem]">{lead}</span>
      <br />
      {children}
    </p>
  )
}
