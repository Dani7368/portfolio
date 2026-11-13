import { skills } from '../data/content.js'
import { Api, Database, Layers, Pen, Terminal } from './Icons.jsx'

const glyphs = { database: Database, api: Api, terminal: Terminal, pen: Pen, layers: Layers }

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title" id="skills-title">
          Tools &amp; Technologies
        </h2>
        <ul className="skills-grid">
          {skills.map((s, i) => (
            <li className="skill-group reveal" key={s.category} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <h3>{s.category}</h3>
              <ul className="skill-tags" aria-label={s.category}>
                {s.items.map((it) => {
                  const Glyph = glyphs[it.glyph]
                  return (
                    <li className="skill-tag" key={it.name}>
                      {it.dev ? (
                        <i className={`${it.dev} colored skill-icon`} aria-hidden="true" />
                      ) : (
                        <span className="skill-icon skill-icon--glyph" aria-hidden="true">
                          <Glyph />
                        </span>
                      )}
                      {it.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
