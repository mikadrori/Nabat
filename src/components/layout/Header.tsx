import { Link, useLocation } from 'react-router-dom'
import { logo, logotype } from '../../assets/svg'
import { useCart } from '../../context/CartContext'
import { CartIcon } from '../ui/CartIcon'
import { NavbarBg } from './NavbarBg'
import { PageContainer } from './PageContainer'
import { cn } from '../../lib/cn'

const navLinkBase =
  'px-6 py-2 text-2xl tracking-[0.02em] text-nav-text transition-opacity hover:opacity-80'

function navLinkClass(isActive: boolean) {
  return cn(navLinkBase, isActive ? 'font-bold' : 'font-book')
}

export function Header() {
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const category = new URLSearchParams(location.search).get('category')

  const isStoryActive = location.pathname === '/' && location.hash === '#story'
  const isCandyActive = location.pathname === '/shop' && category === 'candy'
  const isMerchActive =
    location.pathname === '/shop' &&
    (category === 'merch' || category === 'mug' || category === 'bag')

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative w-full">
        <NavbarBg className="block h-[82px] w-full" />
        <PageContainer className="absolute inset-0 text-nav-text">
          <div className="relative flex h-[82px] w-full items-center">
            <Link
              to="/"
              className="absolute top-1/2 right-0 -translate-y-1/2 transition-opacity hover:opacity-80"
              aria-label="נבט — דף הבית"
            >
              <img src={logotype} alt="נבט" className="h-[41px] w-auto" />
            </Link>

            <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-14 lg:gap-20">
              <Link to="/#story" className={navLinkClass(isStoryActive)}>
                הסיפור שלנו
              </Link>
              <Link to="/shop?category=candy" className={navLinkClass(isCandyActive)}>
                סוכריות נבט
              </Link>
              <Link to="/shop?category=merch" className={navLinkClass(isMerchActive)}>
                מוצרים נוספים
              </Link>
            </nav>

            <div className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center gap-4">
              <button
                type="button"
                onClick={openCart}
                className="relative flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center text-nav-text transition-opacity hover:opacity-80"
                aria-label={`פתיחת סל קניות${itemCount > 0 ? `, ${itemCount} פריטים` : ''}`}
              >
                <CartIcon />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-cream px-0.5 font-book text-[10px] leading-none text-text-brown">
                    {itemCount}
                  </span>
                )}
              </button>
              <Link
                to="/"
                className="transition-opacity hover:opacity-80"
                aria-label="נבט — דף הבית"
              >
                <img src={logo} alt="" className="h-[50px] w-10 object-contain" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </div>
    </header>
  )
}
