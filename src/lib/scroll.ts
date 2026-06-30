export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  window.scrollTo({ top: 0, left: 0, behavior })
}

export function scrollToElement(id: string, behavior: ScrollBehavior = 'smooth') {
  const scroll = () => {
    const el = document.getElementById(id)
    if (!el) return false
    el.scrollIntoView({ behavior, block: 'start' })
    return true
  }

  if (scroll()) return

  let attempts = 0
  let frameId = 0

  const retry = () => {
    if (scroll() || attempts >= 30) return
    attempts += 1
    frameId = requestAnimationFrame(retry)
  }

  frameId = requestAnimationFrame(retry)

  return () => cancelAnimationFrame(frameId)
}
