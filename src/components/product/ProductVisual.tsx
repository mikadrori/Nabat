import { cn } from '../../lib/cn'
import type { Product } from '../../data/products'

interface ProductVisualProps {
  product: Product
  className?: string
  overlayClassName?: string
  shapeClassName?: string
}

export function ProductVisual({
  product,
  className,
  overlayClassName,
  shapeClassName,
}: ProductVisualProps) {
  return (
    <div className={cn('relative flex items-end justify-center', className)}>
      {product.crystalBg && (
        <img
          src={product.crystalBg}
          alt=""
          aria-hidden="true"
          className={cn('w-full object-contain', shapeClassName)}
        />
      )}
      <img
        src={product.image}
        alt={product.name}
        className={cn(
          'absolute bottom-[6%] left-1/2 w-[68%] max-w-[280px] -translate-x-1/2 object-contain',
          overlayClassName,
        )}
      />
    </div>
  )
}
