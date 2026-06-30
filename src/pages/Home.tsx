import { Link } from 'react-router-dom'
import { darkCreamBg } from '../assets/svg'
import { BandSection } from '../components/layout/BandSection'
import { HeroVideoSection } from '../components/layout/HeroVideoSection'
import { PageContainer } from '../components/layout/PageContainer'
import { PageGrid } from '../components/layout/PageGrid'
import { ProductCard } from '../components/product/ProductCard'
import { STORY_LAYOUTS, StorySection } from '../components/product/StorySection'
import { getProductsByCategory } from '../data/products'

export function Home() {
  const candies = getProductsByCategory('candy')

  return (
    <>
      <HeroVideoSection />

      <BandSection
        id="candies"
        bgImage={darkCreamBg}
        bgPreserveEdges
        className="-mt-[clamp(0.75rem,1.5vw,1.125rem)] scroll-mt-[82px]"
      >
        <PageContainer>
          <PageGrid>
            {candies.map((product) => (
              <div key={product.id} className="col-span-6 sm:col-span-3 lg:col-span-2">
                <ProductCard product={product} />
              </div>
            ))}
          </PageGrid>
          <div className="mt-10 flex justify-center md:mt-14">
            <Link
              to="/shop"
              className="font-book text-[clamp(1.125rem,2.5vw,1.5rem)] text-text-brown underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              לכל המוצרים
            </Link>
          </div>
        </PageContainer>
      </BandSection>

      <StorySection
        id="story"
        title="למה נבט?"
        textColor="saffron"
        layout={STORY_LAYOUTS.orange}
      >
        <p>למדנו לפחד מסוכר כאילו הוא האויב.</p>
        <p>
          אבל הגוף שלנו בסך הכל צריך את האנרגיה הזאת, והבעיה היא העיבוד התעשייתי - לא המתיקות.
          החלטנו להפסיק להילחם בגוף ולייצר סוכרייה טבעית וטהורה שעושה בדיוק את ההפך- מחזירה את
          המתיקות לשגרה, בלי רגשות אשם.
        </p>
      </StorySection>

      <StorySection title="אז מה עשינו?" textColor="natural" layout={STORY_LAYOUTS.green}>
        <p>חזרנו למקור.</p>
        <p>
          יצרנו חלופה נקייה ומזמינה המבוססת על חומר גלם יחיד וטהור. בלי רשימות רכיבים ארוכות
          ובלי פשרות, רק אנרגיה מדויקת שפועלת בהרמוניה מוחלטת עם הגוף שלכם.
        </p>
      </StorySection>

      <StorySection
        title="איך אנחנו עושים את זה?"
        textColor="rose"
        layout={STORY_LAYOUTS.pink}
      >
        <p>בלי קיצורי דרך.</p>
        <p>
          אנחנו מפיקים את הסוכר הטבעי מקני סוכר ומעבירים אותו סינון קפדני שמסיר משקעים ומותיר
          תמצית צלולה וטהורה.
        </p>
        <p>
          במקום תיעוש אגרסיבי, הנוזל מתגבש לאטו בתהליך טבעי ואיטי עד לקבלת קריסטל נקי ושלם.
          לגבישים האלו אנחנו מוסיפים רק חומרי גלם טבעיים ואיכותיים כמו זעפרן ומי ורדים, ללא
          תמציות מלאכותית.
        </p>
      </StorySection>

      <BandSection bgImage={darkCreamBg} className="min-h-[clamp(16rem,38vw,28rem)]">
        <PageContainer className="flex min-h-[clamp(16rem,38vw,28rem)] items-center py-16 md:py-24">
          <PageGrid className="items-center gap-y-10">
            <h2 className="font-display col-span-6 text-left text-[clamp(2.25rem,6.25vw,5.625rem)] leading-none tracking-[2.1px] text-cream md:col-span-4 md:col-start-2">
              תנו לעצמכם לשחרר לרגע, לנשום, ולהנות מחדש ממתיקות אבל הפעם-
              <br />
              בלי רגשות אשם.
            </h2>
          </PageGrid>
        </PageContainer>
      </BandSection>
    </>
  )
}
