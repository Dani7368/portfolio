import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title" id="about-title">
          About Me
        </h2>
        <div className="about-text reveal">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
