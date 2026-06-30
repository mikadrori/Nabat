import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'

interface ProductImageCarouselProps {
  images: string[]
  alt: string
}

function CarouselChevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-10 w-10 text-text-brown"
    >
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

export function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [images])

  if (images.length === 0) return null

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative h-[420px] w-full">
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="תמונה קודמת"
            className="absolute start-0 top-1/2 z-10 -translate-y-1/2 transition-opacity hover:opacity-70"
          >
            <CarouselChevron direction="right" />
          </button>
        )}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === index ? alt : ''}
            aria-hidden={i !== index}
            className={cn(
              'absolute inset-0 h-full w-full object-contain px-12 transition-opacity duration-500 ease-in-out',
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          />
        ))}
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="תמונה הבאה"
            className="absolute end-0 top-1/2 z-10 -translate-y-1/2 transition-opacity hover:opacity-70"
          >
            <CarouselChevron direction="left" />
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`תמונה ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={cn(
                'h-2 w-2 rounded-full transition-colors duration-300 ease-in-out',
                i === index ? 'bg-text-brown' : 'bg-text-brown/25 hover:bg-text-brown/40',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
