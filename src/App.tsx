import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { PageShell } from './components/layout/PageShell'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Product } from './pages/Product'
import { Checkout } from './pages/Checkout'
import { OrderSuccess } from './pages/OrderSuccess'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </PageShell>
      </CartProvider>
    </BrowserRouter>
  )
}
