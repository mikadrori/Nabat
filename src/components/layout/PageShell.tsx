import type { ReactNode } from 'react'
import { DevGridOverlay } from './DevGridOverlay'
import { Header } from './Header'
import { CartDrawer } from '../cart/CartDrawer'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      {import.meta.env.DEV && <DevGridOverlay />}
      <Header />
      <main>{children}</main>
      <CartDrawer />
    </div>
  )
}
