import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { StorySection } from '../components/product/StorySection'
import { useCart } from '../context/CartContext'
import {
  accentBgClass,
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
      <section className="sticky top-[82px] z-30 border-b border-cream-dark bg-cream/95 px-6 py-6 backdrop-blur md:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center bg-cream-dark/40 p-8">
            <img src={product.image} alt={product.name} className="max-h-[420px] object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-text-brown/60">{product.tagline}</p>
            <h1
              className={cn(
                'font-display mt-2 text-[clamp(2.5rem,5vw,4rem)] font-bold',
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
        </div>
      </section>

      {product.category === 'candy' && (
        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="font-display mb-10 text-[clamp(2rem,4vw,3rem)]">סוכר אחד, שלוש חוויות</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {candyProducts.map((candy) => (
                <Link
                  key={candy.id}
                  to={`/products/${candy.slug}`}
                  className={cn(
                    'rounded-3xl p-8 text-cream transition-transform hover:scale-[1.02]',
                    accentBgClass[candy.accentColor],
                    candy.slug === product.slug && 'ring-4 ring-cream',
                  )}
                >
                  <h3 className="font-display text-3xl font-bold">{candy.name}</h3>
                  <p className="mt-2 opacity-90">{candy.flavorLabel}</p>
                  <p className="mt-4 text-xl">{formatPrice(candy.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StorySection title="למה נבט?" bgClass="bg-saffron-band">
        <p>
          למדנו לפחד מסוכר כאילו הוא האויב. החלטנו להפסיק להילחם בגוף ולייצר סוכרייה שמחזירה את
          המתיקות לשגרה, בלי רגשות אשם.
        </p>
      </StorySection>

      {related.length > 0 && (
        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="font-display mb-8 text-3xl">השלימו את הסט</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="flex items-center gap-4 rounded-2xl bg-cream-dark/50 p-4 transition-colors hover:bg-cream-dark"
                >
                  <img src={item.image} alt={item.name} className="h-24 w-20 object-contain" />
                  <div>
                    <p className="font-display text-xl">{item.name}</p>
                    <p className="text-text-brown/70">{formatPrice(item.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-cream-dark px-6 py-12 md:px-12">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="font-display text-2xl">★★★★★ 4.9</p>
          <p className="mt-2 text-text-brown/70">מבוסס על 128 ביקורות</p>
          <blockquote className="mx-auto mt-8 max-w-xl text-lg italic text-text-brown/80">
            "סוף סוף מתיקות שמרגישה נקייה. הזעפרן בקפה — חוויה שלמה."
          </blockquote>
        </div>
      </section>
    </>
  )
}
