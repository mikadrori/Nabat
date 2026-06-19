import type { ReactNode } from 'react'
import { Header } from './Header'
import { CartDrawer } from '../cart/CartDrawer'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>{children}</main>
      <CartDrawer />
    </div>
  )
}
