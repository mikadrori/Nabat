import { Link } from 'react-router-dom'
import {
  darkCreamBg,
  greenBg,
  heroImage,
  nabatImage,
  orangeBg,
  pinkBg,
} from '../assets/svg'
import { BandSection } from '../components/layout/BandSection'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { ProductCard } from '../components/product/ProductCard'
import { StorySection } from '../components/product/StorySection'
import { getProductsByCategory } from '../data/products'

export function Home() {
  const candies = getProductsByCategory('candy')

  return (
    <>
      <section className="relative overflow-hidden bg-cream py-12 md:py-20">
        <PageContainer>
          <PageGrid className="items-center gap-y-10">
            <div className="col-span-6 flex justify-center md:col-span-3 md:col-start-1 md:justify-end">
              <img
                src={heroImage}
                alt="צנצנת סוכר נבט עם גבישים"
                className="w-full max-w-[493px] object-contain"
              />
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-4">
              <h1 className="font-display text-left text-[clamp(3rem,9.375vw,7.5rem)] leading-[0.85] text-cream-dark">
                כמו
                <br />
                שהטבע התכוון
              </h1>
            </div>
          </PageGrid>
        </PageContainer>
      </section>

      <BandSection bgImage={darkCreamBg} className="py-14 md:py-20">
        <PageContainer>
          <PageGrid className="mb-10 items-end gap-y-4">
            <h2 className="font-display col-span-6 text-[clamp(2rem,3.75vw,3rem)] text-text-brown md:col-span-3 md:col-start-1">
              סוכריות נבט
            </h2>
            <Link
              to="/shop?category=candy"
              className="col-span-6 text-left text-[1.25rem] text-text-brown underline underline-offset-4 hover:opacity-80 md:col-span-3 md:col-start-4"
            >
              לכל המוצרים ←
            </Link>
          </PageGrid>
          <PageGrid>
            {candies.map((product) => (
              <div key={product.id} className="col-span-6 sm:col-span-3 lg:col-span-2">
                <ProductCard product={product} />
              </div>
            ))}
          </PageGrid>
        </PageContainer>
      </BandSection>

      <StorySection id="story" title="למה נבט?" bgImage={orangeBg} align="right">
        <p>למדנו לפחד מסוכר כאילו הוא האויב.</p>
        <p>
          אבל הגוף שלנו בסך הכל צריך את האנרגיה הזאת, והבעיה היא העיבוד התעשייתי — לא המתיקות.
          החלטנו להפסיק להילחם בגוף ולייצר סוכרייה שעושה בדיוק את ההפך — מחזירה את המתיקות לשגרה,
          בלי רגשות אשם.
        </p>
      </StorySection>

      <StorySection title="אז מה עשינו?" bgImage={greenBg} align="right">
        <p>חזרנו למקור.</p>
        <p>
          יצרנו חלופה נקייה ומזמינה המבוססת על חומר גלם יחיד וטהור. בלי רשימות רכיבים ארוכות
          ובלי פשרות, רק אנרגיה מדויקת שפועלת בהרמוניה מוחלטת עם הגוף שלכם.
        </p>
      </StorySection>

      <StorySection title="איך אנחנו עושים את זה?" bgImage={pinkBg} align="right">
        <p>בלי קיצורי דרך.</p>
        <p>
          אנחנו מפיקים את הסוכר מקני סוכר ומעבירים אותו סינון קפדני שמסיר משקעים ומותיר רק מהות
          צלולה וטהורה. במקום תיעוש אגרסיבי, הנוזל מתגבש לאט בתהליך טבעי ואיטי עד לקבלת קריסטל
          נקי ושלם. לגבישים האלו אנחנו מוסיפים רק חומרי גלם אמיתיים כמו זעפרן ומי ורדים, בלי אף
          תמצית מלאכותית.
        </p>
      </StorySection>

      <section className="bg-cream py-16 md:py-24">
        <PageContainer>
          <PageGrid className="items-center gap-y-10">
            <div className="col-span-6 flex justify-center md:col-span-3 md:col-start-1 md:justify-end">
              <img
                src={nabatImage}
                alt=""
                className="max-h-[320px] w-full max-w-md object-contain"
                aria-hidden="true"
              />
            </div>
            <h2 className="font-display col-span-6 text-left text-[clamp(2rem,5.46875vw,4.375rem)] leading-[1.1] text-cream-dark md:col-span-3 md:col-start-4">
              תנו לעצמכם לשחרר לרגע, לנשום, ולהנות מחדש ממתיקות אבל הפעם — בלי רגשות אשם.
            </h2>
          </PageGrid>
        </PageContainer>
      </section>
    </>
  )
}
