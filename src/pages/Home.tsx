import { Link } from 'react-router-dom'
import { ProductCard } from '../components/product/ProductCard'
import { StorySection } from '../components/product/StorySection'
import { getProductsByCategory } from '../data/products'
import jarImage from '../assets/figma/jar.png'

export function Home() {
  const candies = getProductsByCategory('candy')

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.85] tracking-wide text-cream-dark">
              כמו
              <br />
              שהטבע התכוון
            </h1>
          </div>
          <div className="relative order-1 flex justify-center md:order-2">
            <div className="absolute -right-4 top-8 h-32 w-32 rotate-[132deg] rounded-full bg-saffron/30 blur-2xl" />
            <div className="absolute bottom-8 left-0 h-28 w-28 rotate-[74deg] rounded-full bg-rose/30 blur-2xl" />
            <div className="absolute right-12 top-1/2 h-24 w-24 -rotate-12 rounded-full bg-natural/30 blur-2xl" />
            <img
              src={jarImage}
              alt="צנצנת סוכר נבט"
              className="relative z-10 max-h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <div
        className="h-6 bg-cream-dark"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />

      <section className="bg-cream-dark px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-text-brown">סוכריות נבט</h2>
            <Link
              to="/shop?category=candy"
              className="text-lg text-text-brown underline underline-offset-4 hover:opacity-80"
            >
              לכל המוצרים ←
            </Link>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {candies.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div
        className="h-6 bg-cream"
        style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
      />

      <StorySection id="story" title="למה נבט?" bgClass="bg-saffron-band" align="right">
        <p className="font-medium text-[1.375rem]">למדנו לפחד מסוכר כאילו הוא האויב.</p>
        <p>
          אבל הגוף שלנו בסך הכל צריך את האנרגיה הזאת, והבעיה היא העיבוד התעשייתי — לא המתיקות.
          החלטנו להפסיק להילחם בגוף ולייצר סוכרייה שעושה בדיוק את ההפך — מחזירה את המתיקות לשגרה,
          בלי רגשות אשם.
        </p>
      </StorySection>

      <StorySection title="אז מה עשינו?" bgClass="bg-natural-band" align="right">
        <p className="font-medium text-[1.375rem]">חזרנו למקור.</p>
        <p>
          יצרנו חלופה נקייה ומזמינה המבוססת על חומר גלם יחיד וטהור. בלי רשימות רכיבים ארוכות
          ובלי פשרות, רק אנרגיה מדויקת שפועלת בהרמוניה מוחלטת עם הגוף שלכם.
        </p>
      </StorySection>

      <StorySection title="איך אנחנו עושים את זה?" bgClass="bg-rose-band" align="right">
        <p className="font-medium text-[1.375rem]">בלי קיצורי דרך.</p>
        <p>
          אנחנו מפיקים את הסוכר מקני סוכר ומעבירים אותו סינון קפדני שמסיר משקעים ומותיר רק מהות
          צלולה וטהורה. במקום תיעוש אגרסיבי, הנוזל מתגבש לאט בתהליך טבעי ואיטי עד לקבלת קריסטל
          נקי ושלם. לגבישים האלו אנחנו מוסיפים רק חומרי גלם אמיתיים כמו זעפרן ומי ורדים, בלי אף
          תמצית מלאכותית.
        </p>
      </StorySection>

      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-2">
          <h2 className="font-display text-[clamp(2rem,5vw,4.375rem)] leading-tight tracking-wide text-cream-dark">
            תנו לעצמכם לשחרר לרגע, לנשום, ולהנות מחדש ממתיקות אבל הפעם — בלי רגשות אשם.
          </h2>
          <div className="flex justify-center">
            <img src={jarImage} alt="" className="max-h-[280px] object-contain opacity-90" />
          </div>
        </div>
      </section>
    </>
  )
}
