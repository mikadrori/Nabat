import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HomeLink } from './HomeLink'
import { logo, logotype } from '../../assets/svg'
import { useCart } from '../../context/CartContext'
import { CartIcon } from '../ui/CartIcon'
import { NavbarBg } from './NavbarBg'
import { cn } from '../../lib/cn'

const navItems = [
  {
    to: '/#story',
    label: 'הסיפור שלנו',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#story',
  },
  {
    to: '/#candies',
    label: 'סוכריות נבט',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#candies',
  },
  {
    to: '/shop',
    label: 'כל המוצרים',
    isActive: (pathname: string) => pathname === '/shop',
  },
] as const

const navLinkClass = (active: boolean) =>
  cn(
    'relative px-4 py-2 text-[1.25rem] text-nav-text',
    'transition-[opacity,letter-spacing] duration-500 ease-in-out',
    active
      ? 'font-medium-weight tracking-[0.06em] opacity-100'
      : 'font-book tracking-[0.04em] opacity-80 hover:opacity-100',
  )

export function Header() {
  const { itemCount, openCart } = useCart()
  const { pathname, hash } = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

  const activeTo =
    navItems.find((item) =>
      item.to === '/shop' ? item.isActive(pathname) : item.isActive(pathname, hash),
    )?.to ?? null

  useEffect(() => {
    const updateIndicator = () => {
      if (!activeTo || !navRef.current) {
        setIndicator((prev) => ({ ...prev, visible: false }))
        return
      }

      const activeEl = linkRefs.current[activeTo]
      if (!activeEl) return

      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeEl.getBoundingClientRect()

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        visible: true,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTo, pathname, hash])

  return (
    <header className="fixed top-0 right-0 left-0 z-40 w-full">
      <div className="relative h-[82px] w-full">
        <NavbarBg className="block h-[82px] w-full" />

        <div className="absolute top-1/2 right-[var(--edge-inset)] z-10 flex -translate-y-1/2 items-center text-nav-text">
          <HomeLink className="transition-opacity hover:opacity-80" aria-label="נבט - דף הבית">
            <img src={logotype} alt="נבט" className="h-[41px] w-auto" />
          </HomeLink>
        </div>

        <nav
          ref={navRef}
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-nav-text md:flex md:gap-12 lg:gap-16"
        >
            {navItems.map((item) => {
              const active =
                item.to === '/shop'
                  ? item.isActive(pathname)
                  : item.isActive(pathname, hash)

              return (
                <NavLink
                  key={item.to}
                  ref={(el) => {
                    linkRefs.current[item.to] = el
                  }}
                  to={item.to}
                  className={navLinkClass(active)}
                  isActive={() => false}
                  onClick={() => {
                    if (item.to === '/shop' && pathname === '/shop') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                >
                  {item.label}
                </NavLink>
              )
            })}

            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute bottom-1 h-px bg-nav-text',
                'transition-[left,width,opacity] duration-500 ease-in-out',
                indicator.visible ? 'opacity-100' : 'opacity-0',
              )}
              style={{ left: indicator.left, width: indicator.width }}
            />
          </nav>

        <div className="absolute top-1/2 left-[var(--edge-inset)] z-10 flex -translate-y-1/2 items-center gap-4 text-nav-text">
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center justify-center transition-opacity hover:opacity-80"
            aria-label={`פתיחת סל קניות${itemCount > 0 ? `, ${itemCount} פריטים` : ''}`}
          >
            <CartIcon />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-text-brown px-1 font-book text-[11px] text-cream">
                {itemCount}
              </span>
            )}
          </button>
          <HomeLink className="transition-opacity hover:opacity-80" aria-label="נבט - דף הבית">
            <img src={logo} alt="" className="h-[50px] w-auto" aria-hidden="true" />
          </HomeLink>
        </div>
      </div>
    </header>
  )
}
