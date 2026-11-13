import { education, languages, service } from '../data/content.js'

export default function Education() {
  return (
    <section id="education" className="dark" aria-labelledby="edu-title">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title" id="edu-title">
          Education &amp; Background
        </h2>
        <div className="edu-grid">
          <article className="edu-card reveal">
            <p className="edu-card__label">Education</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="edu-date">{education.period}</p>
            <span className="edu-spec">{education.specialization}</span>
          </article>
          <article className="edu-card reveal" style={{ transitionDelay: '70ms' }}>
            <p className="edu-card__label">Military service</p>
            <h3>{service.role}</h3>
            <p>{service.org}</p>
            <p className="edu-date">{service.period}</p>
          </article>
          <article className="edu-card reveal" style={{ transitionDelay: '140ms' }}>
            <p className="edu-card__label">Languages</p>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <b>{l.name}</b>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
