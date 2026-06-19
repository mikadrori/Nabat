import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { darkCreamBg } from '../assets/svg'
import { BandSection } from '../components/layout/BandSection'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
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
    <BandSection bgImage={darkCreamBg} className="py-16 md:py-20">
      <PageContainer>
        <PageGrid className="mb-10">
          <h1 className="font-display col-span-6 text-[clamp(2.5rem,5vw,4rem)] text-text-brown">
            כל המוצרים
          </h1>
        </PageGrid>

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

        <PageGrid>
          {products.map((product) => (
            <div key={product.id} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <ProductCard product={product} />
            </div>
          ))}
        </PageGrid>
      </PageContainer>
    </BandSection>
  )
}
