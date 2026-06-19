import productSaffron from '../assets/figma/product-saffron-box.png'
import productNatural from '../assets/figma/product-natural-box.png'
import productRose from '../assets/figma/product-rose-box.png'
import cardSaffron from '../assets/figma/group-saffron.png'
import cardNatural from '../assets/figma/group-natural.png'
import cardRose from '../assets/figma/group-rose.png'

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
  cardImage?: string
  features: string[]
}

const placeholder = (label: string, color: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect fill="${color}" width="400" height="500"/><text x="200" y="250" text-anchor="middle" fill="#fcf7ee" font-size="28" font-family="serif">${label}</text></svg>`,
  )}`

export const products: Product[] = [
  {
    id: 'candy-saffron',
    slug: 'saffron',
    name: 'זעפרן',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description:
      'סוכריות נבט בטעם זעפרן — מתיקות טבעית עם ניחוח עדין של זעפרן אמיתי, בלי תמציות מלאכותיות.',
    price: 49.9,
    accentColor: 'saffron',
    flavorLabel: 'בטעם זעפרן',
    image: productSaffron,
    cardImage: cardSaffron,
    features: ['זעפרן אמיתי', 'קריסטלים טבעיים', 'ללא תמציות מלאכותיות'],
  },
  {
    id: 'candy-natural',
    slug: 'natural',
    name: 'טבעי',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description:
      'סוכריות נבט בטעם טבעי — הטעם הנקי והטהור של סוכר קריסטלי, בדיוק כמו שהטבע התכוון.',
    price: 42.9,
    accentColor: 'natural',
    flavorLabel: 'בטעם טבעי',
    image: productNatural,
    cardImage: cardNatural,
    features: ['חומר גלם יחיד', 'תהליך איטי וטבעי', 'ללא קיצורי דרך'],
  },
  {
    id: 'candy-rose',
    slug: 'rose-water',
    name: 'מי ורדים',
    category: 'candy',
    tagline: 'סוכריות נבט',
    description:
      'סוכריות נבט בטעם מי ורדים — מתיקות עדינה עם ניחוח פרחוני של מי ורדים אמיתיים.',
    price: 44.9,
    accentColor: 'rose',
    flavorLabel: 'בטעם מי ורדים',
    image: productRose,
    cardImage: cardRose,
    features: ['מי ורדים אמיתיים', 'קריסטלים שלמים', 'מתאים לקפה ותה'],
  },
  {
    id: 'mug-saffron',
    slug: 'mug-saffron',
    name: 'ספל זעפרן',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה בגוון זעפרן — מושלם לרגע מתוק של קפה או תה.',
    price: 59.9,
    accentColor: 'saffron',
    image: placeholder('ספל זעפרן', '#d99f6d'),
    features: ['קרמיקה', '350 מ"ל', 'מתאים למדיח'],
  },
  {
    id: 'mug-natural',
    slug: 'mug-natural',
    name: 'ספל טבעי',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה בגוון טבעי — פשוט, נקי, ויפה על כל שולחן.',
    price: 59.9,
    accentColor: 'natural',
    image: placeholder('ספל טבעי', '#8fa68a'),
    features: ['קרמיקה', '350 מ"ל', 'מתאים למדיח'],
  },
  {
    id: 'mug-rose',
    slug: 'mug-rose',
    name: 'ספל מי ורדים',
    category: 'mug',
    tagline: 'מוצרים נוספים',
    description: 'ספל קרמיקה בגוון ורוד — מתנה מושלמת לחובבי מתיקות עדינה.',
    price: 59.9,
    accentColor: 'rose',
    image: placeholder('ספל ורדים', '#c48c9c'),
    features: ['קרמיקה', '350 מ"ל', 'מתאים למדיח'],
  },
  {
    id: 'bag-saffron',
    slug: 'bag-saffron',
    name: 'שקית זעפרן',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: 'שקית בד בגוון זעפרן — לקחת את נבט איתך לכל מקום.',
    price: 39.9,
    accentColor: 'saffron',
    image: placeholder('שקית זעפרן', '#d99f6d'),
    features: ['בד כותנה', 'סגירה בשרוך', 'ידידותי לסביבה'],
  },
  {
    id: 'bag-natural',
    slug: 'bag-natural',
    name: 'שקית טבעי',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: 'שקית בד בגוון טבעי — מינימליסטית ונקייה, כמו המוצר עצמו.',
    price: 39.9,
    accentColor: 'natural',
    image: placeholder('שקית טבעי', '#8fa68a'),
    features: ['בד כותנה', 'סגירה בשרוך', 'ידידותי לסביבה'],
  },
  {
    id: 'bag-rose',
    slug: 'bag-rose',
    name: 'שקית מי ורדים',
    category: 'bag',
    tagline: 'מוצרים נוספים',
    description: 'שקית בד בגוון ורוד — א ideal לקניות יומיומיות או כמתנה.',
    price: 39.9,
    accentColor: 'rose',
    image: placeholder('שקית ורדים', '#c48c9c'),
    features: ['בד כותנה', 'סגירה בשרוך', 'ידידותי לסביבה'],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category?: ProductCategory | 'merch') {
  if (!category) return products
  if (category === 'merch') return products.filter((p) => p.category === 'mug' || p.category === 'bag')
  return products.filter((p) => p.category === category)
}

export const accentTextClass: Record<AccentColor, string> = {
  saffron: 'text-saffron',
  natural: 'text-natural',
  rose: 'text-rose',
}

export const accentBgClass: Record<AccentColor, string> = {
  saffron: 'bg-saffron-band',
  natural: 'bg-natural-band',
  rose: 'bg-rose-band',
}
