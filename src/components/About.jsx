import { about, summary } from '../data/content.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title" id="about-title">
          Full-Stack Developer
        </h2>
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="about-summary">{summary}</p>
          </div>
          <ul className="about-cards">
            {about.highlights.map((h, i) => (
              <li className="card reveal" key={h.title} style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
