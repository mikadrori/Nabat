import type { ReactNode } from 'react'
import { BandSection } from '../layout/BandSection'
import { PageContainer } from '../layout/PageContainer'
import { PageGrid } from '../layout/PageGrid'
import { cn } from '../../lib/cn'

interface StorySectionProps {
  id?: string
  title: string
  children: ReactNode
  bgImage: string
  align?: 'left' | 'right' | 'center'
}

export function StorySection({
  id,
  title,
  children,
  bgImage,
  align = 'right',
}: StorySectionProps) {
  return (
    <BandSection id={id} bgImage={bgImage} className="py-16 md:py-20">
      <PageContainer>
        <PageGrid>
          <div
            className={cn(
              'col-span-6 text-cream',
              align === 'right' && 'md:col-span-3 md:col-start-1 md:text-right',
              align === 'left' && 'md:col-span-3 md:col-start-4 md:text-left',
              align === 'center' && 'md:col-span-4 md:col-start-2 md:text-center',
            )}
          >
            <h2 className="font-display mb-6 text-[clamp(2.5rem,7.8125vw,6.25rem)] leading-[0.85]">
              {title}
            </h2>
            <div className="space-y-4 text-[1.375rem] leading-[1.6]">{children}</div>
          </div>
        </PageGrid>
      </PageContainer>
    </BandSection>
  )
}
