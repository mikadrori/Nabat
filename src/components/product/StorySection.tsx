import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { PageContainer } from '../layout/PageContainer'
import { PageGrid } from '../layout/PageGrid'
import { cn } from '../../lib/cn'

export type StoryTextColor = 'saffron' | 'natural' | 'rose'

export type StoryLayout = {
  title: { colStart: number; colSpan: number }
  body: { colStart: number; colSpan: number }
  titleSize: 150 | 140 | 120
}

interface StorySectionProps {
  id?: string
  title: string
  children: ReactNode
  textColor: StoryTextColor
  layout: StoryLayout
}

const COL_START: Record<number, string> = {
  1: 'md:col-start-1',
  2: 'md:col-start-2',
  3: 'md:col-start-3',
  4: 'md:col-start-4',
  5: 'md:col-start-5',
  6: 'md:col-start-6',
}

const COL_SPAN: Record<number, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
}

const TEXT_COLOR: Record<StoryTextColor, string> = {
  saffron: 'text-saffron',
  natural: 'text-natural',
  rose: 'text-rose',
}

function gridPlacement(colStart: number, colSpan: number) {
  return cn(COL_START[colStart], COL_SPAN[colSpan])
}

export const STORY_LAYOUTS = {
  orange: {
    title: { colStart: 3, colSpan: 2 },
    body: { colStart: 1, colSpan: 2 },
    titleSize: 150,
  },
  green: {
    title: { colStart: 4, colSpan: 2 },
    body: { colStart: 2, colSpan: 2 },
    titleSize: 150,
  },
  pink: {
    title: { colStart: 5, colSpan: 2 },
    body: { colStart: 3, colSpan: 2 },
    titleSize: 140,
  },
} as const satisfies Record<string, StoryLayout>

export function StorySection({ id, title, children, textColor, layout }: StorySectionProps) {
  const colorClass = TEXT_COLOR[textColor]
  const { ref: titleRef, visible: titleVisible } = useScrollReveal<HTMLDivElement>()

  const titleTypography =
    layout.titleSize === 150
      ? 'text-[clamp(2.5rem,11.72vw,9.375rem)] leading-[0.822] tracking-[3px]'
      : layout.titleSize === 140
        ? 'text-[clamp(2.25rem,10.5vw,8.75rem)] leading-[0.85] tracking-[2.5px]'
        : 'text-[clamp(2rem,9.375vw,7.5rem)] leading-[0.86] tracking-[2.4px]'

  return (
    <section
      id={id}
      className={cn('overflow-x-hidden bg-cream py-12 md:py-20', id && 'scroll-mt-[82px]')}
    >
      <PageContainer>
        <PageGrid className="items-start gap-y-8 md:items-end md:gap-y-0">
          <div
            ref={titleRef}
            className={cn('col-span-6 md:row-start-1', gridPlacement(layout.title.colStart, layout.title.colSpan))}
          >
            <h2
              className={cn(
                'story-title-reveal font-display block w-full !text-left',
                titleVisible && 'is-visible',
                colorClass,
                titleTypography,
              )}
            >
              {title}
            </h2>
          </div>
          <div
            className={cn(
              'story-body col-span-6 text-right tracking-[0.44px]',
              'md:row-start-1',
              colorClass,
              gridPlacement(layout.body.colStart, layout.body.colSpan),
              '[&_p]:text-right [&_p]:leading-[1.34]',
              '[&_p]:text-[clamp(1rem,1.72vw,1.375rem)]',
              '[&_p:first-child]:text-[clamp(1.125rem,1.95vw,1.5625rem)]',
            )}
          >
            {children}
          </div>
        </PageGrid>
      </PageContainer>
    </section>
  )
}
