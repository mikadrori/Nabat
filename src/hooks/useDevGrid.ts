import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'nabat-dev-grid'

export function useDevGrid() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!import.meta.env.DEV) return
    setVisible(localStorage.getItem(STORAGE_KEY) === '1')
  }, [])

  const toggle = useCallback(() => {
    if (!import.meta.env.DEV) return
    setVisible((current) => {
      const next = !current
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
      return next
    })
  }, [])

  useEffect(() => {
    if (!import.meta.env.DEV) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'G' && event.shiftKey) {
        event.preventDefault()
        toggle()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle])

  return {
    visible: import.meta.env.DEV && visible,
    toggle,
  }
}
