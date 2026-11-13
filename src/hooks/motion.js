import { useEffect } from 'react'

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * Scroll reveal: one shared IntersectionObserver adds `.is-in` to `.reveal`
 * elements once. The hidden state only applies under `html.motion-ok`, so
 * content stays visible without JS, IntersectionObserver, or with reduced motion.
 */
export function useRevealAll() {
  useEffect(() => {
    const root = document.documentElement
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    root.classList.add('motion-ok')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('motion-ok')
    }
  }, [])
}
