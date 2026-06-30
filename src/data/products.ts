import productSaffron from '../assets/קופסה כתומה.png'
import productNatural from '../assets/קופסה ירוקה.png'
import productRose from '../assets/קופסה ורודה.png'
import mug1 from '../assets/Mug 1.png'
import mug2 from '../assets/Mug 2.png'
import mug3 from '../assets/Mug 3.png'
import mugsTower2 from '../assets/mugs tower2.png'
import bag1Front from '../assets/bag 1 front.png'
import bag1Back from '../assets/bag 1 back.png'
import bag2Front from '../assets/bag 2 front.png'
import bag2Back from '../assets/bag 2 back.png'
import bag3Front from '../assets/bag 3 front.png'
import bag3Back from '../assets/bag 3 back.png'
import bag1Both from '../assets/bag 1 both.png'
import bag2Both from '../assets/bag 2 both.png'
import bag3Both from '../assets/bag 3 both.png'
import {
  orangeCrystalBg,
  greenCrystalBg,
  pinkCrystalBg,
  orangeBg,
  greenBg,
  pinkBg,
} from '../assets/svg'

export type ProductCategory = 'candy' | 'mug' | 'bag'

export type AccentColor = 'saffron' | 'natural' | 'rose'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  tagline: string
  description: string
  price: number
  accentColor: AccentColor
  flavorLabel?: string
  image: string
  hoverImage?: string
  galleryImages?: string[]
  crystalBg?: string
  features: string[]
}

const bagDescription = 'תיק בד רב פעמי- לנשום לשחרר ולהנות מהמתיקות מחדש'
const bagFeatures = ['100% כותנה']
const mugFeatures = ['קרמיקה', 'מתאים למדיח']
const candyDescriptionBase =
  'סוכריות נבט טהורות למתיקות טבעית ומאוזנת, כמו שהטבע התכוון.'
const candyFeatures = [
  '100% חומרי גלם טבעיים',
  'אנרגיה מיידית ונקייה',
  'הקלה על מערכת העיכול',
  'הרגעת שיעול וכאבי גרון',
]

export const products: Product[] = [
  {
    id: 'candy-rose',
    slug: 'rose-water',
    name: 'מי ורדים',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description: `${candyDescriptionBase} בטעם מי ורדים`,
    price: 44.9,
    accentColor: 'rose',
    flavorLabel: 'בטעם מי ורדים',
    image: productRose,
    crystalBg: pinkCrystalBg,
    features: candyFeatures,
  },
  {
    id: 'candy-natural',
    slug: 'natural',
    name: 'טבעי',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description: candyDescriptionBase,
    price: 42.9,
    accentColor: 'natural',
    flavorLabel: 'בטעם טבעי',
    image: productNatural,
    crystalBg: greenCrystalBg,
    features: candyFeatures,
  },
  {
    id: 'candy-saffron',
    slug: 'saffron',
    name: 'זעפרן',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description: `${candyDescriptionBase} בטעם זעפרן אמיתי`,
    price: 49.9,
    accentColor: 'saffron',
    flavorLabel: 'בטעם זעפרן',
    image: productSaffron,
    crystalBg: orangeCrystalBg,
    features: candyFeatures,
  },
  {
    id: 'mug-saffron',
    slug: 'mug-saffron',
    name: 'ספל זעפרן',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה מפנק, מתאים לשתייה חמה וקרה',
    price: 39.9,
    accentColor: 'saffron',
    image: mug1,
    hoverImage: mugsTower2,
    galleryImages: [mug1, mugsTower2],
    features: mugFeatures,
  },
  {
    id: 'mug-natural',
    slug: 'mug-natural',
    name: 'ספל טבעי',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה מפנק, מתאים לשתייה חמה וקרה',
    price: 39.9,
    accentColor: 'natural',
    image: mug3,
    hoverImage: mugsTower2,
    galleryImages: [mug3, mugsTower2],
    features: mugFeatures,
  },
  {
    id: 'mug-rose',
    slug: 'mug-rose',
    name: 'ספל מי ורדים',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה מפנק, מתאים לשתייה חמה וקרה',
    price: 39.9,
    accentColor: 'rose',
    image: mug2,
    hoverImage: mugsTower2,
    galleryImages: [mug2, mugsTower2],
    features: mugFeatures,
  },
  {
    id: 'bag-saffron',
    slug: 'bag-saffron',
    name: 'שקית זעפרן',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: bagDescription,
    price: 29.9,
    accentColor: 'saffron',
    image: bag3Front,
    hoverImage: bag3Back,
    galleryImages: [bag3Front, bag3Back, bag3Both],
    features: bagFeatures,
  },
  {
    id: 'bag-natural',
    slug: 'bag-natural',
    name: 'שקית טבעי',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: bagDescription,
    price: 29.9,
    accentColor: 'natural',
    image: bag1Front,
    hoverImage: bag1Back,
    galleryImages: [bag1Front, bag1Back, bag1Both],
    features: bagFeatures,
  },
  {
    id: 'bag-rose',
    slug: 'bag-rose',
    name: 'שקית מי ורדים',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: bagDescription,
    price: 29.9,
    accentColor: 'rose',
    image: bag2Front,
    hoverImage: bag2Back,
    galleryImages: [bag2Front, bag2Back, bag2Both],
    features: bagFeatures,
  },
]

export const bagVariantOrder = ['bag-natural', 'bag-rose', 'bag-saffron'] as const
export const mugVariantOrder = ['mug-natural', 'mug-rose', 'mug-saffron'] as const

export function bagSortIndex(id: string) {
  const index = bagVariantOrder.indexOf(id as (typeof bagVariantOrder)[number])
  return index === -1 ? bagVariantOrder.length : index
}

export function mugSortIndex(id: string) {
  const index = mugVariantOrder.indexOf(id as (typeof mugVariantOrder)[number])
  return index === -1 ? mugVariantOrder.length : index
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

const bagSubtitles: Record<string, string> = {
  'bag-natural': 'לשחרר',
  'bag-rose': 'לנשום',
  'bag-saffron': 'להנות',
}

export function getProductDisplayTitles(product: Product) {
  const mainTitle =
    product.category === 'candy'
      ? 'סוכריות נבט טבעיות'
      : product.category === 'bag'
        ? 'תיק בד'
        : 'ספל'

  const subtitle =
    product.category === 'candy'
      ? product.name
      : product.category === 'bag'
        ? bagSubtitles[product.id]
        : undefined

  return { mainTitle, subtitle }
}

export function getProductSizeLabel(product: Product): string | undefined {
  if (product.category === 'candy') return '200 גרם'
  if (product.category === 'mug') return "350 מל'"
  if (product.category === 'bag') return '38x42 ס"מ'
  return undefined
}

function shuffleProducts<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function getSuggestedProducts(product: Product): Product[] {
  return shuffleProducts(getShopProducts().filter((p) => p.id !== product.id))
}

export function getProductsByCategory(category?: ProductCategory | 'merch') {
  if (!category) return products
  if (category === 'merch') return products.filter((p) => p.category === 'mug' || p.category === 'bag')
  const items = products.filter((p) => p.category === category)
  if (category === 'bag') {
    return items.sort((a, b) => bagSortIndex(a.id) - bagSortIndex(b.id))
  }
  if (category === 'mug') {
    return items.sort((a, b) => mugSortIndex(a.id) - mugSortIndex(b.id))
  }
  return items
}

export function getShopProducts() {
  const candies = products.filter((p) => p.category === 'candy')
  const bags = products.filter((p) => p.category === 'bag')
  const mugs = products.filter((p) => p.category === 'mug')
  return [...candies, ...bags, ...mugs]
}

export const accentTextClass: Record<AccentColor, string> = {
  saffron: 'text-saffron',
  natural: 'text-natural',
  rose: 'text-rose',
}

export const accentBgClass: Record<AccentColor, string> = {
  saffron: 'bg-saffron',
  natural: 'bg-natural',
  rose: 'bg-rose',
}

export const accentBgImage: Record<AccentColor, string> = {
  saffron: orangeBg,
  natural: greenBg,
  rose: pinkBg,
}
