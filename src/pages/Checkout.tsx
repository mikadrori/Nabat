import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { PageContainer } from '../components/layout/PageContainer'
import { formatPrice } from '../lib/cn'

export function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')

  if (items.length === 0) return <Navigate to="/shop" replace />

  const shipping = subtotal >= 150 ? 0 : 29
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name || !address || !city) {
      setError('נא למלא את כל השדות')
      return
    }
    const orderNumber = Math.floor(100000 + Math.random() * 900000)
    clearCart()
    navigate(`/order-success?order=${orderNumber}`)
  }

  return (
    <section className="py-16">
      <PageContainer>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <form onSubmit={handleSubmit} className="order-2 space-y-6 lg:order-1">
          <h1 className="font-display text-4xl">תשלום</h1>

          {error && <p className="text-rose">{error}</p>}

          <div>
            <label className="mb-2 block text-sm">אימייל</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 outline-none focus:border-natural"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm">שם מלא</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 outline-none focus:border-natural"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm">כתובת</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 outline-none focus:border-natural"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm">עיר</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 outline-none focus:border-natural"
            />
          </div>

          <fieldset className="space-y-3 rounded-2xl border border-cream-dark p-4 opacity-70">
            <legend className="px-2 text-sm">פרטי תשלום (דמו)</legend>
            <input
              disabled
              placeholder="מספר כרטיס"
              className="w-full rounded-xl border border-cream-dark bg-cream-dark/30 px-4 py-3"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                disabled
                placeholder="MM/YY"
                className="rounded-xl border border-cream-dark bg-cream-dark/30 px-4 py-3"
              />
              <input
                disabled
                placeholder="CVV"
                className="rounded-xl border border-cream-dark bg-cream-dark/30 px-4 py-3"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-text-brown py-4 text-lg text-cream hover:opacity-90"
          >
            ביצוע הזמנה
          </button>
        </form>

          <aside className="order-1 h-fit rounded-3xl bg-cream-dark/50 p-8 lg:order-2">
          <h2 className="font-display mb-6 text-2xl">סיכום הזמנה</h2>
          <ul className="space-y-4 border-b border-cream-dark pb-6">
            {items.map((item) => (
              <li key={item.productId} className="flex justify-between gap-4">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-price">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>סה״כ ביניים</span>
              <span className="font-price">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>משלוח</span>
              <span className="font-price">{shipping === 0 ? 'חינם' : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>סה״כ</span>
              <span className="font-price">{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
        </div>
      </PageContainer>
    </section>
  )
}
