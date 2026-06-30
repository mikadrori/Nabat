import { Link, useNavigate } from 'react-router-dom'
import { MinusIcon, PlusIcon } from '../ui/QuantityIcons'
import { useCart } from '../../context/CartContext'
import { getProductBySlug, getProductDisplayTitles } from '../../data/products'
import { formatPrice, cn } from '../../lib/cn'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    itemCount,
    updateQuantity,
    removeItem,
    amountUntilFreeShipping,
    freeShippingThreshold,
  } = useCart()
  const navigate = useNavigate()

  if (!isOpen) return null

  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="סגור סל"
        onClick={closeCart}
      />
      <aside
        className="relative flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="סל קניות"
      >
        <div className="flex items-center justify-between border-b border-cream-dark px-6 py-5">
          <h2 className="font-display text-2xl">
            סל הקניות שלך{' '}
            <span className="font-medium-weight">(</span>
            <span className="font-price">{itemCount}</span>
            <span className="font-medium-weight">)</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-2xl leading-none text-text-brown/70 hover:text-text-brown"
            aria-label="סגור"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-text-brown/70">הסל שלך ריק</p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const product = getProductBySlug(item.slug)
                const { mainTitle, subtitle } = product
                  ? getProductDisplayTitles(product)
                  : { mainTitle: item.name, subtitle: undefined }

                return (
                <li key={item.productId} className="flex gap-5 border-b border-cream-dark pb-6">
                  <img
                    src={item.image}
                    alt={mainTitle}
                    className="h-28 w-24 shrink-0 object-contain"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="hover:opacity-80"
                      >
                        <p className="font-display text-xl leading-tight text-text-brown">
                          {mainTitle}
                        </p>
                        {subtitle && (
                          <p className="font-book mt-0.5 text-base leading-none text-text-brown">
                            {subtitle}
                          </p>
                        )}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="font-book text-base text-text-brown/50 hover:text-text-brown"
                      >
                        הסר
                      </button>
                    </div>
                    <p className="font-price mt-1.5 text-base">{formatPrice(item.price)}</p>
                    <div className="mt-3 flex w-24 max-w-full items-center justify-between">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        aria-label="הפחת כמות"
                        className="text-text-brown transition-opacity hover:opacity-70"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="font-price text-center text-[1.375rem] leading-none tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        aria-label="הוסף כמות"
                        className="text-text-brown transition-opacity hover:opacity-70"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-cream-dark px-6 py-5">
          {amountUntilFreeShipping > 0 ? (
            <div className="mb-4">
              <p className="mb-2 text-sm">
                עוד <span className="font-price">{formatPrice(amountUntilFreeShipping)}</span> למשלוח חינם
              </p>
              <div className="h-2 overflow-hidden rounded-full bg-cream-dark">
                <div
                  className="h-full bg-natural transition-all"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="mb-4 text-sm text-natural">משלוח חינם!</p>
          )}

          <div className="mb-4 flex justify-between text-xl">
            <span>סה״כ</span>
            <span className="font-price">{formatPrice(subtotal)}</span>
          </div>

          <button
            type="button"
            disabled={items.length === 0}
            onClick={() => {
              closeCart()
              navigate('/checkout')
            }}
            className={cn(
              'w-full rounded-full py-4 font-book text-[1.0625rem] tracking-[0.08em] text-cream transition-opacity',
              items.length === 0 ? 'cursor-not-allowed bg-text-brown/40' : 'bg-text-brown hover:opacity-90',
            )}
          >
            לתשלום
          </button>
        </div>
      </aside>
    </div>
  )
}
