import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { orangeBg } from '../assets/svg'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { StorySection } from '../components/product/StorySection'
import { useCart } from '../context/CartContext'
import {
  accentBgImage,
  accentTextClass,
  getProductBySlug,
  products,
} from '../data/products'
import { cn, formatPrice } from '../lib/cn'

export function Product() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) return <Navigate to="/shop" replace />

  const related = products
    .filter((p) => p.id !== product.id && (p.accentColor === product.accentColor || p.category !== product.category))
    .slice(0, 2)

  const candyProducts = products.filter((p) => p.category === 'candy')

  return (
    <>
      <section className="sticky top-[82px] z-30 border-b border-cream-dark bg-cream/95 py-6 backdrop-blur">
        <PageContainer>
          <PageGrid className="gap-y-10">
            <div className="col-span-6 flex items-center justify-center bg-cream-dark/40 p-8 md:col-span-3 md:col-start-1">
              <img src={product.image} alt={product.name} className="max-h-[420px] object-contain" />
            </div>
            <div className="col-span-6 flex flex-col justify-center md:col-span-3 md:col-start-4">
            <p className="text-[1.25rem] text-text-brown/60">{product.tagline}</p>
            <h1
              className={cn(
                'font-display mt-2 text-[clamp(2.5rem,5vw,4rem)]',
                accentTextClass[product.accentColor],
              )}
            >
              {product.name}
            </h1>
            {product.flavorLabel && (
              <p className="mt-2 text-xl text-text-brown">{product.flavorLabel}</p>
            )}
            <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-brown/80">
              {product.description}
            </p>
            <ul className="mt-4 space-y-1 text-text-brown/70">
              {product.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-text-brown/30"
                >
                  −
                </button>
                <span className="min-w-[2rem] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-text-brown/30"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, quantity)}
                className="rounded-full bg-text-brown px-8 py-3 text-cream transition-opacity hover:opacity-90"
              >
                הוסף לסל
              </button>
            </div>
            </div>
          </PageGrid>
        </PageContainer>
      </section>

      {product.category === 'candy' && (
        <section className="py-16">
          <PageContainer>
            <PageGrid className="mb-10">
              <h2 className="font-display col-span-6 text-[clamp(2rem,4vw,3rem)]">
                סוכר אחד, שלוש חוויות
              </h2>
            </PageGrid>
            <PageGrid>
              {candyProducts.map((candy) => (
                <div key={candy.id} className="col-span-6 md:col-span-2">
                <Link
                  to={`/products/${candy.slug}`}
                  className={cn(
                    'relative block overflow-hidden transition-transform hover:scale-[1.02]',
                    candy.slug === product.slug && 'ring-4 ring-cream ring-offset-2 ring-offset-cream',
                  )}
                >
                  <img
                    src={accentBgImage[candy.accentColor]}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 p-8 text-cream">
                    <h3 className="font-display text-3xl">{candy.name}</h3>
                    <p className="mt-2 font-book opacity-90">{candy.flavorLabel}</p>
                    <p className="mt-4 font-book text-xl">{formatPrice(candy.price)}</p>
                  </div>
                </Link>
                </div>
              ))}
            </PageGrid>
          </PageContainer>
        </section>
      )}

      <StorySection title="למה נבט?" bgImage={orangeBg}>
        <p>
          למדנו לפחד מסוכר כאילו הוא האויב. החלטנו להפסיק להילחם בגוף ולייצר סוכרייה שמחזירה את
          המתיקות לשגרה, בלי רגשות אשם.
        </p>
      </StorySection>

      {related.length > 0 && (
        <section className="py-16">
          <PageContainer>
            <PageGrid className="mb-8">
              <h2 className="font-display col-span-6 text-3xl">השלימו את הסט</h2>
            </PageGrid>
            <PageGrid>
              {related.map((item) => (
                <div key={item.id} className="col-span-6 sm:col-span-3">
                <Link
                  to={`/products/${item.slug}`}
                  className="flex items-center gap-4 rounded-2xl bg-cream-dark/50 p-4 transition-colors hover:bg-cream-dark"
                >
                  <img src={item.image} alt={item.name} className="h-24 w-20 object-contain" />
                  <div>
                    <p className="font-display text-xl">{item.name}</p>
                    <p className="font-book text-text-brown/70">{formatPrice(item.price)}</p>
                  </div>
                </Link>
                </div>
              ))}
            </PageGrid>
          </PageContainer>
        </section>
      )}

      <section className="border-t border-cream-dark py-12">
        <PageContainer className="text-center">
          <p className="font-book text-2xl">★★★★★ 4.9</p>
          <p className="mt-2 text-text-brown/70">מבוסס על 128 ביקורות</p>
          <blockquote className="mx-auto mt-8 max-w-xl text-lg italic text-text-brown/80">
            "סוף סוף מתיקות שמרגישה נקייה. הזעפרן בקפה — חוויה שלמה."
          </blockquote>
        </PageContainer>
      </section>
    </>
  )
}
