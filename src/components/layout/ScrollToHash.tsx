import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToElement, scrollToTop } from '../../lib/scroll'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const cancel = scrollToElement(hash.replace('#', ''))
      return cancel
    }

    scrollToTop()
  }, [pathname, hash])

  return null
}
