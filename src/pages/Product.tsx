import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { ProductImageCarousel } from '../components/product/ProductImageCarousel'
import { SuggestedProductsSection } from '../components/product/SuggestedProductsSection'
import { MinusIcon, PlusIcon } from '../components/ui/QuantityIcons'
import { useCart } from '../context/CartContext'
import {
  accentBgClass,
  accentTextClass,
  bagSortIndex,
  getProductBySlug,
  getProductDisplayTitles,
  getProductSizeLabel,
  getSuggestedProducts,
  mugSortIndex,
  products,
  type AccentColor,
  type ProductCategory,
} from '../data/products'
import { cn, formatPrice } from '../lib/cn'

const accentOrder: AccentColor[] = ['saffron', 'natural', 'rose']

function getCategoryVariants(category: ProductCategory) {
  const items = products.filter((p) => p.category === category)
  if (category === 'bag') {
    return items.sort((a, b) => bagSortIndex(a.id) - bagSortIndex(b.id))
  }
  if (category === 'mug') {
    return items.sort((a, b) => mugSortIndex(a.id) - mugSortIndex(b.id))
  }
  return items.sort((a, b) => accentOrder.indexOf(a.accentColor) - accentOrder.indexOf(b.accentColor))
}

export function Product() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) return <Navigate to="/shop" replace />

  const variants = getCategoryVariants(product.category)
  const { mainTitle, subtitle } = getProductDisplayTitles(product)
  const sizeLabel = getProductSizeLabel(product)
  const suggestedProducts = useMemo(() => getSuggestedProducts(product), [product.id])

  return (
    <>
      <section className="bg-cream py-12 md:py-16">
        <PageContainer>
          <Link
            to="/shop"
            className="font-book mb-10 inline-flex w-fit items-center gap-2 ms-auto text-[1.125rem] text-text-brown no-underline transition-[opacity,font-weight] hover:font-medium-weight hover:underline hover:underline-offset-4"
          >
            לכל המוצרים
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <PageGrid className="items-start gap-y-10">
            <div className="col-span-6 flex flex-col items-center md:col-span-3 md:col-start-1">
              <div className="w-full max-w-md">
                {product.galleryImages ? (
                  <ProductImageCarousel images={product.galleryImages} alt={product.name} />
                ) : (
                  <>
                    <div className="relative flex h-[420px] w-full items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={cn(
                          'object-contain',
                          product.category === 'candy'
                            ? 'max-h-[300px] max-w-[240px] w-full'
                            : 'h-full w-full px-12',
                        )}
                      />
                    </div>
                    <div className="mt-4 h-2" aria-hidden="true" />
                  </>
                )}
                <div
                  className="mt-6 flex items-center justify-center gap-6"
                  dir={product.category === 'bag' || product.category === 'mug' ? 'rtl' : 'ltr'}
                >
                  {variants.map((variant) => (
                    <Link
                      key={variant.id}
                      to={`/products/${variant.slug}`}
                      aria-label={variant.name}
                      aria-current={variant.id === product.id ? 'true' : undefined}
                      className={cn(
                        'h-5 w-5 rounded-full transition-transform hover:scale-110 md:h-6 md:w-6',
                        accentBgClass[variant.accentColor],
                        variant.id === product.id &&
                          'ring-2 ring-text-brown ring-offset-2 ring-offset-cream',
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-6 flex flex-col md:col-span-3 md:col-start-4 md:-mt-4">
              <div className="shrink-0">
                <h1 className="font-display text-[clamp(1.5rem,2.75vw,2.25rem)] leading-tight text-text-brown">
                  {mainTitle}
                </h1>
                <p
                  className={cn(
                    'font-display mt-1 text-[clamp(1.125rem,2vw,1.5rem)] leading-none',
                    subtitle
                      ? product.category === 'bag'
                        ? 'text-text-brown'
                        : accentTextClass[product.accentColor]
                      : 'invisible',
                  )}
                  aria-hidden={!subtitle}
                >
                  {subtitle ?? '-'}
                </p>
                <p className="font-price mt-2 text-[clamp(1.125rem,2vw,1.5rem)] leading-normal">
                  {formatPrice(product.price)}
                </p>
                {sizeLabel && (
                  <p className="font-book mt-1 text-sm text-text-brown/60">{sizeLabel}</p>
                )}
              </div>
              <div className="mt-8 min-h-[12rem] shrink-0">
                <p className="max-w-md font-book text-lg leading-relaxed text-text-brown/80">
                  {product.description}
                </p>
                <ul className="mt-3 space-y-1 font-book text-text-brown/70">
                  {product.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 shrink-0">
                <div className="flex w-32 max-w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="הפחת כמות"
                    className="text-text-brown transition-opacity hover:opacity-70"
                  >
                    <MinusIcon />
                  </button>
                  <span className="font-price text-center text-[1.75rem] leading-none tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="הוסף כמות"
                    className="text-text-brown transition-opacity hover:opacity-70"
                  >
                    <PlusIcon />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(product, quantity)}
                  className="w-full rounded-full bg-text-brown px-4 py-3 font-book text-[1.0625rem] tracking-[0.08em] text-cream transition-opacity hover:opacity-90"
                >
                  הוספה לסל
                </button>
                </div>
              </div>
            </div>
          </PageGrid>
        </PageContainer>
      </section>

      <SuggestedProductsSection products={suggestedProducts} />

      <section className="border-t border-cream-dark bg-cream py-12 md:py-16">
        <PageContainer className="text-center">
          <p className="font-book text-2xl">★★★★★ 4.9</p>
          <p className="mt-2 font-book text-text-brown/70">מבוסס על 128 ביקורות</p>
          <blockquote className="mx-auto mt-8 max-w-xl font-book text-lg italic text-text-brown/80">
            "סוף סוף מתיקות שמרגישה נקייה. הזעפרן בקפה - חוויה שלמה."
          </blockquote>
        </PageContainer>
      </section>
    </>
  )
}
