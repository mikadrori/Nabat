import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import {
  accentTextClass,
  getProductDisplayTitles,
  type AccentColor,
  type Product,
} from '../../data/products'
import { cn, formatPrice } from '../../lib/cn'

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
  size?: 'default' | 'shop' | 'carousel'
}

const crystalBgOffset: Record<AccentColor, string> = {
  saffron: '-top-6',
  natural: '-top-2',
  rose: 'top-1',
}

const growHover =
  'origin-bottom transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:-translate-y-3'

const carouselImageSizes: Record<Product['category'], string> = {
  candy: 'max-h-[165px] max-w-[132px]',
  bag: 'max-h-[195px] max-w-[155px]',
  mug: 'max-h-[210px] max-w-[168px]',
}

const carouselMugHoverSize = 'h-[210px] w-[210px] max-w-full'

const carouselTitleClass = 'font-book text-[clamp(1rem,2vw,1.25rem)] text-text-brown'
const carouselSubtitleClass = 'mt-1 font-book text-[clamp(0.8125rem,1.6vw,1rem)] text-text-brown'

export function ProductCard({ product, showAddToCart = true, size = 'default' }: ProductCardProps) {
  const { addItem } = useCart()
  const isShop = size === 'shop'
  const isCarousel = size === 'carousel'
  const isCandy = product.category === 'candy'
  const showCrystal = Boolean(product.crystalBg && !isShop && !isCarousel)

  const isMerch = (isShop || isCarousel) && !isCandy
  const isMugShop = (isShop || isCarousel) && product.category === 'mug'

  const isMugCarousel = isCarousel && product.category === 'mug'

  const carouselImageClass = isCarousel ? carouselImageSizes[product.category] : ''

  const imageSize = isCarousel
    ? carouselImageClass
    : isShop && isCandy
    ? 'h-[clamp(160px,38vw,228px)] w-[clamp(120px,28vw,171px)]'
    : isMugShop
      ? 'h-auto max-h-[clamp(180px,38vw,240px)] w-auto max-w-[clamp(150px,32vw,210px)]'
      : isMerch
        ? 'h-[clamp(200px,42vw,280px)] w-[clamp(150px,32vw,210px)]'
        : 'h-[clamp(205px,44vw,280px)] w-[clamp(158px,34vw,215px)]'

  const { mainTitle, subtitle: productSubtitle } = getProductDisplayTitles(product)

  const subLabel =
    product.flavorLabel ??
    (product.category === 'mug' ? 'ספל' : product.category === 'bag' ? 'תיק בד' : undefined)

  const displayTagline = isCandy ? 'סוכריות נבט טבעיות' : product.tagline

  const showTagline = isCarousel
    ? isCandy
    : (!isShop && isCandy) || (isShop && isCandy)

  const carouselSubtitle = isCandy ? (product.flavorLabel ?? productSubtitle) : productSubtitle

  const articleClass = isCarousel
    ? 'grid h-full grid-rows-[210px_minmax(4.25rem,auto)_auto_1fr_auto] items-center text-center'
    : 'flex flex-col items-center text-center'

  return (
    <article className={articleClass}>
      <Link
        to={`/products/${product.slug}`}
        className={cn(
          'group relative block w-full',
          isCarousel
            ? cn(
                'mb-0 h-full min-h-0 max-h-[210px] max-w-none self-stretch',
                !isMugCarousel && 'overflow-hidden',
              )
            : isMerch
              ? 'mb-0'
              : 'mb-4',
          !isCarousel && (isMerch ? 'max-w-[min(340px,90vw)]' : 'max-w-[min(320px,92vw)]'),
        )}
      >
        <div
          className={cn(
            'relative mx-auto flex w-full flex-col items-center',
            isCarousel && cn('h-full justify-end', !isMugCarousel && 'overflow-hidden'),
            isCarousel && isCandy && 'pb-4',
            showCrystal ? 'min-h-[clamp(320px,78vw,420px)] justify-end pt-6 md:pt-8' : !isCarousel && 'justify-start pt-0',
          )}
        >
          {showCrystal && product.crystalBg && (
            <img
              src={product.crystalBg}
              alt=""
              className={cn(
                'pointer-events-none absolute left-1/2 w-full max-w-[310px] -translate-x-1/2',
                crystalBgOffset[product.accentColor],
              )}
              aria-hidden="true"
            />
          )}
          {showCrystal && (
            <h3
              className={cn(
                'absolute top-[11%] z-10 w-full text-center font-display text-[clamp(2.25rem,6.5vw,3.25rem)] leading-none',
                accentTextClass[product.accentColor],
              )}
            >
              {product.name}
            </h3>
          )}
          {product.hoverImage ? (
            <div
              className={cn(
                'relative z-10 w-full',
                isCarousel ? 'h-full' : cn('flex h-full items-end justify-center', imageSize),
                !isCarousel && growHover,
              )}
            >
              {isCarousel ? (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  {isMugCarousel ? (
                    <div className={cn('relative', carouselMugHoverSize)}>
                      <img
                        src={product.hoverImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-contain object-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <img
                        src={product.image}
                        alt={product.name}
                        className={cn(
                          carouselImageClass,
                          'absolute bottom-0 left-1/2 z-10 -translate-x-1/2 object-contain transition-opacity duration-300 group-hover:opacity-0',
                        )}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={cn(
                          carouselImageClass,
                          'relative z-10 block object-contain transition-opacity duration-300 group-hover:opacity-0',
                        )}
                      />
                      <img
                        src={product.hoverImage}
                        alt=""
                        aria-hidden="true"
                        className={cn(
                          carouselImageClass,
                          'absolute inset-0 z-20 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                        )}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 m-auto h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </>
              )}
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className={cn(
                'relative z-10 block object-contain',
                imageSize,
                !isCarousel && growHover,
              )}
            />
          )}
        </div>
      </Link>
      <div
        className={cn(
          'flex w-full flex-col items-center self-center',
          isCarousel ? 'justify-start' : undefined,
        )}
      >
        {isCarousel ? (
          <>
            <p className={carouselTitleClass}>{mainTitle}</p>
            <p
              className={cn(carouselSubtitleClass, !carouselSubtitle && 'invisible')}
              aria-hidden={!carouselSubtitle}
            >
              {carouselSubtitle ?? '-'}
            </p>
          </>
        ) : (
          <>
            {showTagline && (
              <p className="font-book text-[clamp(1.125rem,2.5vw,1.5rem)] text-text-brown">{displayTagline}</p>
            )}
            {subLabel && (
              <p
                className={cn(
                  'font-book text-text-brown',
                  isCandy && product.flavorLabel
                    ? 'text-[clamp(0.8125rem,1.6vw,1rem)]'
                    : 'text-[clamp(1rem,2.2vw,1.375rem)]',
                  showTagline && 'mt-1',
                  isMugShop && '-mt-1',
                )}
              >
                {subLabel}
              </p>
            )}
          </>
        )}
      </div>
      <p className="font-price mt-2 self-center text-[clamp(0.875rem,1.8vw,1.125rem)] text-text-brown">
        {formatPrice(product.price)}
      </p>
      {isCarousel && <div className="min-h-4" aria-hidden="true" />}
      <div
        className={cn(
          'flex flex-wrap justify-center gap-3 self-center',
          isCarousel ? 'mt-3 w-full' : 'mt-4',
        )}
      >
        {showAddToCart && (
          <button
            type="button"
            onClick={() => addItem(product)}
            className={cn(
              'rounded-full bg-text-brown font-book tracking-[0.08em] text-cream transition-opacity hover:opacity-90',
              isCarousel
                ? 'px-4 py-1.5 text-[0.9375rem]'
                : 'px-5 py-2 text-[1.0625rem]',
            )}
          >
            הוספה לסל
          </button>
        )}
      </div>
    </article>
  )
}
