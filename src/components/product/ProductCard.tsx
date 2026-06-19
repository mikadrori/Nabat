import { Link } from 'react-router-dom'
import jarImage from '../../assets/jar image.png'
import { useCart } from '../../context/CartContext'
import {
  accentTextClass,
  type Product,
} from '../../data/products'
import { cn, formatPrice } from '../../lib/cn'

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
  variant?: 'default' | 'minimal'
}

export function ProductCard({
  product,
  showAddToCart = true,
  variant = 'default',
}: ProductCardProps) {
  const minimal = variant === 'minimal'
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
              'absolute top-[12%] z-10 w-full text-center font-display text-[3rem] leading-none',
              accentTextClass[product.accentColor],
            )}
          >
            {product.name}
          </h3>
          {minimal ? (
            <div className="relative z-10 mt-16 h-[228px] w-[171px] transition-transform duration-500 ease-in-out group-hover:-translate-y-6 group-hover:scale-[1.15]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src={jarImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 mt-16 h-[228px] w-[171px] object-contain transition-transform group-hover:scale-[1.02]"
            />
          )}
        </div>
      </Link>
      <p
        className={cn(
          'text-[1.5rem] text-text-brown',
          minimal ? 'font-medium-weight' : 'font-book',
        )}
      >
        {product.tagline}
      </p>
      {product.flavorLabel && (
        <p
          className={cn(
            'mt-1 font-book text-text-brown',
            minimal ? 'text-[1.125rem]' : 'text-[1.375rem]',
          )}
        >
          {product.flavorLabel}
        </p>
      )}
      {!minimal && (
        <>
          <p className="mt-2 font-book text-[1.375rem] text-text-brown">{formatPrice(product.price)}</p>
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
        </>
      )}
    </article>
  )
}
