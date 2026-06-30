import { footerLogo } from '../../assets/svg'
import { FooterBg } from './FooterBg'
import { HomeLink } from './HomeLink'

export function Footer() {
  return (
    <footer className="mt-auto w-full -translate-y-px leading-[0]">
      <FooterBg className="block h-8 w-full md:h-10" />
      <div className="relative min-h-[clamp(2.25rem,6vw,3.25rem)] bg-nav-green py-3 md:py-3.5">
        <HomeLink
          className="absolute top-1/2 right-[var(--edge-inset)] -translate-y-1/2 transition-opacity hover:opacity-80"
          aria-label="נבט - דף הבית"
        >
          <img src={footerLogo} alt="נבט" className="h-[clamp(2.25rem,6vw,3.25rem)] w-auto" />
        </HomeLink>
        <p className="absolute top-1/2 left-[var(--edge-inset)] -translate-y-1/2 font-book text-xs text-nav-text/70 md:text-sm">
          © Nabat Candy 2026
        </p>
      </div>
    </footer>
  )
}
