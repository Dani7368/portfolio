import { useEffect, useRef, useState } from 'react'
import { nav, person } from '../data/content.js'
import { Close, Menu } from './Icons.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef(null)
  const sheetRef = useRef(null)

  // Mark the section currently crossing the middle of the viewport.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Mobile menu: Escape closes and returns focus; closes if resized to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 860px)')
    const onMq = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    sheetRef.current?.querySelector('a')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <header className="nav">
      <nav className="nav__bar" aria-label="Primary">
        <a className="nav__logo" href="#top" aria-label={`${person.name}, back to top`}>
          {person.firstName}
          <span>.</span>
        </a>
        <ul className="nav__links">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={toggleRef}
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>
      <div id="nav-sheet" ref={sheetRef} className="nav__sheet" hidden={!open}>
        <ul>
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
