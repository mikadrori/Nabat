import { PageContainer } from '../components/layout/PageContainer'
import { Link, useSearchParams } from 'react-router-dom'

export function OrderSuccess() {
  const [searchParams] = useSearchParams()
  const orderNumber = searchParams.get('order') ?? '000000'

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <PageContainer className="max-w-lg text-center">
        <h1 className="font-display text-4xl text-natural">תודה על ההזמנה!</h1>
        <p className="mt-4 font-book text-lg text-text-brown/80">
          מספר הזמנה: <span className="font-display">{orderNumber}</span>
        </p>
        <p className="mt-2 text-text-brown/60">זוהי הזמנת דמו — לא בוצע חיוב.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block rounded-full bg-text-brown px-8 py-3 text-cream hover:opacity-90"
        >
          חזרה לחנות
        </Link>
      </PageContainer>
    </section>
  )
}
