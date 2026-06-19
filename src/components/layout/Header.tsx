import { Link, NavLink } from 'react-router-dom'
import { logo, logotype } from '../../assets/svg'
import { useCart } from '../../context/CartContext'
import { CartIcon } from '../ui/CartIcon'
import { cn } from '../../lib/cn'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'px-6 py-6 text-[1.25rem] tracking-wide transition-opacity hover:opacity-80',
    isActive && 'opacity-100 underline underline-offset-8',
  )

export function Header() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-nav-green text-nav-text">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-8">
        <div className="flex items-center gap-4 text-nav-text">
          <Link to="/" className="transition-opacity hover:opacity-80" aria-label="נבט — דף הבית">
            <img src={logotype} alt="נבט" className="h-[41px] w-auto" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-nav-text/40 transition-colors hover:bg-nav-text/10"
            aria-label={`פתיחת סל קניות${itemCount > 0 ? `, ${itemCount} פריטים` : ''}`}
          >
            <CartIcon />
            {itemCount > 0 && (
              <span className="absolute -top-1 -left-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cream px-1 text-[11px] font-medium text-text-brown">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          <NavLink to="/#story" className={navLinkClass}>
            הסיפור שלנו
          </NavLink>
          <NavLink to="/shop?category=candy" className={navLinkClass}>
            סוכריות נבט
          </NavLink>
          <NavLink to="/shop?category=merch" className={navLinkClass}>
            מוצרים נוספים
          </NavLink>
        </nav>

        <Link
          to="/"
          className="text-nav-text transition-opacity hover:opacity-80"
          aria-label="נבט — דף הבית"
        >
          <img src={logo} alt="" className="h-[50px] w-auto" aria-hidden="true" />
        </Link>
      </div>
      <div className="h-3 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }} />
    </header>
  )
}
