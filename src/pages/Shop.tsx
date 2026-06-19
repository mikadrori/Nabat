import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/product/ProductCard'
import { getProductsByCategory, type ProductCategory } from '../data/products'
import { cn } from '../lib/cn'

const filters: { id: 'all' | ProductCategory | 'merch'; label: string }[] = [
  { id: 'all', label: 'הכל' },
  { id: 'candy', label: 'סוכריות' },
  { id: 'mug', label: 'ספלים' },
  { id: 'bag', label: 'שקיות' },
]

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')

  const activeFilter = useMemo(() => {
    if (categoryParam === 'candy') return 'candy'
    if (categoryParam === 'merch') return 'merch'
    if (categoryParam === 'mug') return 'mug'
    if (categoryParam === 'bag') return 'bag'
    return 'all'
  }, [categoryParam])

  const products = useMemo(() => {
    if (activeFilter === 'all') return getProductsByCategory()
    if (activeFilter === 'merch') return getProductsByCategory('merch')
    return getProductsByCategory(activeFilter)
  }, [activeFilter])

  return (
    <section className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="font-display mb-10 text-[clamp(2.5rem,5vw,4rem)] text-text-brown">
          כל המוצרים
        </h1>

        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                if (filter.id === 'all') setSearchParams({})
                else setSearchParams({ category: filter.id })
              }}
              className={cn(
                'rounded-full border px-5 py-2 text-sm transition-colors',
                activeFilter === filter.id
                  ? 'border-text-brown bg-text-brown text-cream'
                  : 'border-text-brown/30 text-text-brown hover:bg-cream-dark',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
