import { useEffect, useState } from 'react'
import { darkCreamBg } from '../../assets/svg'
import { PageContainer } from '../layout/PageContainer'
import { ProductCard } from './ProductCard'
import type { Product } from '../../data/products'

const VISIBLE_COUNT = 3

interface SuggestedProductsSectionProps {
  products: Product[]
}

function CarouselChevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 text-text-brown">
      <path
        d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SuggestedProductsSection({ products }: SuggestedProductsSectionProps) {
  const [startIndex, setStartIndex] = useState(0)
  const maxIndex = Math.max(0, products.length - VISIBLE_COUNT)

  useEffect(() => {
    setStartIndex(0)
  }, [products])

  if (products.length === 0) return null

  const goTo = (next: number) => {
    setStartIndex(Math.min(maxIndex, Math.max(0, next)))
  }

  const arrowBtnClass =
    'flex h-8 w-8 shrink-0 items-center justify-center transition-opacity hover:opacity-70 disabled:pointer-events-none disabled:opacity-30'

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <img
        src={darkCreamBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
      />

      <PageContainer className="relative z-10">
        <h2 className="font-display mb-10 text-center text-[clamp(1.5rem,3vw,2.25rem)] text-text-brown md:mb-14">
          גלו עוד
        </h2>

        <div className="flex w-full items-center gap-4 md:gap-6" dir="ltr">
          {maxIndex > 0 ? (
            <button
              type="button"
              onClick={() => goTo(startIndex - 1)}
              disabled={startIndex === 0}
              aria-label="מוצר קודם"
              className={arrowBtnClass}
            >
              <CarouselChevron direction="left" />
            </button>
          ) : (
            <div className="h-8 w-8 shrink-0" aria-hidden="true" />
          )}

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out"
              style={{
                width: `${(products.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${(startIndex * 100) / products.length}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shrink-0"
                  style={{
                    flex: `0 0 ${100 / products.length}%`,
                    paddingInline: '0.375rem',
                  }}
                >
                  <ProductCard product={product} size="carousel" />
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 ? (
            <button
              type="button"
              onClick={() => goTo(startIndex + 1)}
              disabled={startIndex === maxIndex}
              aria-label="מוצר הבא"
              className={arrowBtnClass}
            >
              <CarouselChevron direction="right" />
            </button>
          ) : (
            <div className="h-8 w-8 shrink-0" aria-hidden="true" />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
