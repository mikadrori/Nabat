import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface StorySectionProps {
  id?: string
  title: string
  children: ReactNode
  bgClass: string
  align?: 'left' | 'right' | 'center'
}

export function StorySection({
  id,
  title,
  children,
  bgClass,
  align = 'right',
}: StorySectionProps) {
  return (
    <section id={id} className={cn('relative px-6 py-20 text-cream md:px-16', bgClass)}>
      <div
        className="pointer-events-none absolute -top-3 left-0 right-0 h-6 bg-cream"
        style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
      />
      <div
        className={cn(
          'mx-auto max-w-[1280px]',
          align === 'right' && 'text-right',
          align === 'left' && 'text-left',
          align === 'center' && 'text-center',
        )}
      >
        <h2 className="font-display mb-8 text-[clamp(2.5rem,6vw,6.25rem)] leading-[0.85] tracking-wide">
          {title}
        </h2>
        <div className="max-w-[600px] space-y-4 text-[1.125rem] leading-relaxed md:text-[1.375rem] md:leading-[1.6]">
          {children}
        </div>
      </div>
      <div
        className="pointer-events-none absolute -bottom-3 left-0 right-0 h-6 bg-cream"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />
    </section>
  )
}
