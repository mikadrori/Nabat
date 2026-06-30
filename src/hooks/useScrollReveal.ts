import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
