import {
  heroImage,
  nabatImage,
} from '../assets/svg'
import { BandSection } from '../components/layout/BandSection'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { ProductCard } from '../components/product/ProductCard'
import { StorySection, StoryBody } from '../components/product/StorySection'
import { getProductsByCategory } from '../data/products'

export function Home() {
  const candies = getProductsByCategory('candy')

  return (
    <>
      <section className="relative overflow-hidden bg-cream py-12 md:py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-y-6 px-2 sm:px-3 md:flex-row md:items-center md:justify-between md:gap-x-4">
          <img
            src={heroImage}
            alt="צנצנת סוכר נבט עם גבישים"
            className="w-full max-w-[493px] shrink-0 object-contain"
          />
          <h1 className="font-display w-full shrink-0 text-right text-[clamp(3rem,9.375vw,7.5rem)] leading-[0.85] text-cream-dark md:w-auto">
            כמו
            <br />
            שהטבע התכוון
          </h1>
        </div>
      </section>

      <BandSection band="darkCream" overlapBelow overlapZIndex={20} className="py-14 md:py-20">
        <PageContainer>
          <PageGrid>
            {candies.map((product) => (
              <div key={product.id} className="col-span-6 sm:col-span-3 lg:col-span-2">
                <ProductCard product={product} variant="minimal" />
              </div>
            ))}
          </PageGrid>
        </PageContainer>
      </BandSection>

      <StorySection id="story" title="למה נבט?" band="orange" columnStart={1}>
        <StoryBody lead="למדנו לפחד מסוכר כאילו הוא האויב.">
          אבל הגוף שלנו בסך הכל צריך את האנרגיה הזאת, והבעיה היא העיבוד התעשייתי - לא המתיקות.
          החלטנו להפסיק להילחם בגוף ולייצר סוכרייה שעושה בדיוק את ההפך - מחזירה את המתיקות לשגרה,
          בלי רגשות אשם.
        </StoryBody>
      </StorySection>

      <StorySection title="אז מה עשינו?" band="green" columnStart={2} className="mt-3">
        <StoryBody lead="חזרנו למקור.">
          יצרנו חלופה נקייה ומזמינה המבוססת על חומר גלם יחיד וטהור. בלי רשימות רכיבים ארוכות
          ובלי פשרות, רק אנרגיה מדויקת שפועלת בהרמוניה מוחלטת עם הגוף שלכם.
        </StoryBody>
      </StorySection>

      <StorySection title="איך אנחנו עושים את זה?" band="pink" columnStart={3} className="mt-3">
        <StoryBody lead="בלי קיצורי דרך.">
          אנחנו מפיקים את הסוכר מקני סוכר ומעבירים אותו סינון קפדני שמסיר משקעים ומותיר רק מהות
          צלולה וטהורה. במקום תיעוש אגרסיבי, הנוזל מתגבש לאט בתהליך טבעי ואיטי עד לקבלת קריסטל
          נקי ושלם. לגבישים האלו אנחנו מוסיפים רק חומרי גלם אמיתיים כמו זעפרן ומי ורדים, בלי אף
          תמצית מלאכותית.
        </StoryBody>
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
              תנו לעצמכם לשחרר לרגע, לנשום, ולהנות מחדש ממתיקות אבל הפעם - בלי רגשות אשם.
            </h2>
          </PageGrid>
        </PageContainer>
      </section>
    </>
  )
}
