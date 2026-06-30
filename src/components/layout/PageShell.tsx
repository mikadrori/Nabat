import type { ReactNode } from 'react'
import { DevGridOverlay } from './DevGridOverlay'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToHash } from './ScrollToHash'
import { CartDrawer } from '../cart/CartDrawer'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-cream">
      {import.meta.env.DEV && <DevGridOverlay />}
      <ScrollToHash />
      <Header />
      <main className="flex-1 pt-[82px]">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
