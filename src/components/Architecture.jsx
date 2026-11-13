import { useId, useState } from 'react'

/**
 * Processing pipeline of SafeNet:
 *   Capture → OCR → { ML classifier | Rule engine } → Risk score → Live dashboard
 * Only components present in the project source are shown.
 */
export default function Architecture({ nodes }) {
  const [active, setActive] = useState(nodes[0].id)
  const uid = useId()
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const order = nodes.map((n) => n.id)
  const current = byId[active]

  // Plain render helper (not a component) so buttons keep focus across re-renders.
  const node = (id, tag) => {
    const n = byId[id]
    return (
      <button
        key={id}
        type="button"
        className="pipeline__node"
        aria-pressed={active === id}
        aria-describedby={`${uid}-detail`}
        onMouseEnter={() => setActive(id)}
        onFocus={() => setActive(id)}
        onClick={() => setActive(id)}
      >
        {tag && <span className="pipeline__tag">{tag}</span>}
        <span className="pipeline__step">{String(order.indexOf(id) + 1).padStart(2, '0')}</span>
        <span className="pipeline__label">{n.label}</span>
        <span className="pipeline__tech">{n.tech}</span>
      </button>
    )
  }
  const link = (k) => <span key={k} className="pipeline__link" aria-hidden="true" />

  return (
    <figure className="pipeline" aria-labelledby={`${uid}-title`}>
      <figcaption className="pipeline__head">
        <h4 className="pipeline__title" id={`${uid}-title`}>
          Processing pipeline
        </h4>
        <p className="pipeline__note">
          Text is extracted with OCR, then scored by a machine-learning classifier or a weighted rule engine.
        </p>
      </figcaption>

      <div className="pipeline__flow">
        {node('input')}
        {link(1)}
        {node('ocr')}
        {link(2)}
        <div className="pipeline__branch" role="group" aria-label="Detection stage">
          {node('ml', 'Prototype')}
          {node('rules', 'Web app')}
        </div>
        {link(3)}
        {node('score')}
        {link(4)}
        {node('dash')}
      </div>

      <p className="pipeline__detail" id={`${uid}-detail`} aria-live="polite">
        <strong>{current.label}</strong>
        {current.detail}
      </p>
    </figure>
  )
}
