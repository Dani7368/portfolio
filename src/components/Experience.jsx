import { useEffect, useRef } from 'react'
import { experience } from '../data/content.js'
import { prefersReducedMotion } from '../hooks/motion.js'

export default function Experience() {
  const list = useRef(null)

  // Timeline fill follows normal scroll (no scroll hijacking); one passive
  // listener, rAF-throttled, writing a single CSS variable.
  useEffect(() => {
    const el = list.current
    if (!el) return
    const cards = [...el.querySelectorAll('.exp-card')]
    if (prefersReducedMotion()) {
      el.style.setProperty('--progress', 1)
      cards.forEach((c) => c.classList.add('is-active'))
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const r = el.getBoundingClientRect()
      el.style.setProperty('--progress', Math.min(1, Math.max(0, (vh * 0.65 - r.top) / r.height)).toFixed(4))
      cards.forEach((c) => c.classList.toggle('is-active', c.getBoundingClientRect().top < vh * 0.65))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="experience" className="dark" aria-labelledby="exp-title">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title" id="exp-title">
          Professional Journey
        </h2>
        <div className="exp-list" ref={list}>
          <span className="exp-rail" aria-hidden="true" />
          <ol>
            {experience.map((job) => (
              <li className="exp-card reveal" key={job.company}>
                <div className="exp-header">
                  <div>
                    <p className="exp-company">{job.company}</p>
                    <h3 className="exp-title">{job.role}</h3>
                  </div>
                  <span className="exp-date">{job.period}</span>
                </div>
                <ul className={`exp-groups${job.groups.length > 1 ? ' exp-groups--multi' : ''}`}>
                  {job.groups.map((g) => (
                    <li className="exp-group" key={g.title}>
                      <h4>{g.title}</h4>
                      <p>{g.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
