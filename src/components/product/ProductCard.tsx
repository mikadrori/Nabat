import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import {
  accentTextClass,
  type Product,
} from '../../data/products'
import { cn, formatPrice } from '../../lib/cn'

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
}

export function ProductCard({ product, showAddToCart = true }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <article className="flex flex-col items-center text-center">
      <Link
        to={`/products/${product.slug}`}
        className="group relative mb-4 block w-full max-w-[280px]"
      >
        <div className="relative mx-auto flex min-h-[360px] w-full flex-col items-center justify-center pt-8">
          {product.crystalBg && (
            <img
              src={product.crystalBg}
              alt=""
              className="pointer-events-none absolute top-0 left-1/2 w-[92%] max-w-[274px] -translate-x-1/2"
              aria-hidden="true"
            />
          )}
          <h3
            className={cn(
              'absolute top-10 z-10 w-full text-center font-display text-[3rem] font-bold leading-none tracking-wide',
              accentTextClass[product.accentColor],
            )}
          >
            {product.name}
          </h3>
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 mt-16 h-[228px] w-[171px] object-contain transition-transform group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <p className="font-display text-[1.5rem] text-text-brown">{product.tagline}</p>
      {product.flavorLabel && (
        <p className="mt-1 text-[1.125rem] text-text-brown">{product.flavorLabel}</p>
      )}
      <p className="mt-2 text-[1.125rem] font-medium text-text-brown">{formatPrice(product.price)}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          to={`/products/${product.slug}`}
          className="rounded-full border border-text-brown/30 px-5 py-2 text-sm transition-colors hover:bg-cream-dark"
        >
          לפרטים
        </Link>
        {showAddToCart && (
          <button
            type="button"
            onClick={() => addItem(product)}
            className="rounded-full bg-text-brown px-5 py-2 text-sm text-cream transition-opacity hover:opacity-90"
          >
            הוסף לסל
          </button>
        )}
      </div>
    </article>
  )
}
