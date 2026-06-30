import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { ProductCard } from '../components/product/ProductCard'
import { getProductsByCategory, type Product } from '../data/products'
import { cn } from '../lib/cn'

function ProductRow({ products, className }: { products: Product[]; className?: string }) {
  return (
    <div
      className={cn(
        'mx-auto grid w-fit max-w-full grid-cols-1 justify-items-center gap-x-16 gap-y-12 sm:grid-cols-3 sm:gap-x-32 md:gap-x-44 lg:gap-x-56',
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} size="shop" />
      ))}
    </div>
  )
}

export function Shop() {
  const candies = getProductsByCategory('candy')
  const bags = getProductsByCategory('bag')
  const mugs = getProductsByCategory('mug')

  return (
    <section className="bg-cream py-16 md:py-20">
      <PageContainer>
        <PageGrid className="mb-10">
          <h1 className="font-display col-span-6 text-[clamp(1.375rem,2.5vw,2rem)] text-text-brown">
            כל המוצרים
          </h1>
        </PageGrid>

        <ProductRow products={candies} />
        <ProductRow products={bags} className="mt-16 md:mt-28" />
        <ProductRow products={mugs} className="mt-12 md:mt-20" />
      </PageContainer>
    </section>
  )
}
