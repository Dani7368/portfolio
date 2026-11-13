import { projects } from '../data/content.js'
import Architecture from './Architecture.jsx'
import { GitHub } from './Icons.jsx'

function Project({ p }) {
  return (
    <article className="project reveal" aria-labelledby={`${p.id}-title`}>
      <header className="project__header">
        <div>
          <p className="project__kind">{p.kind}</p>
          <h3 className="project__name" id={`${p.id}-title`}>
            {p.name}
          </h3>
          <p className="project__subtitle">{p.subtitle}</p>
        </div>
        <a className="btn-primary" href={p.repo} target="_blank" rel="noopener noreferrer">
          <GitHub /> View on GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </header>

      <div className="project__body">
        <div className="project__intro">
          <section className="project__block" aria-labelledby={`${p.id}-problem`}>
            <h4 id={`${p.id}-problem`}>Problem</h4>
            <p>{p.problem}</p>
          </section>
          <section className="project__block" aria-labelledby={`${p.id}-overview`}>
            <h4 id={`${p.id}-overview`}>Overview</h4>
            <p>{p.overview}</p>
          </section>
          <section className="project__block" aria-labelledby={`${p.id}-built`}>
            <h4 id={`${p.id}-built`}>What I built</h4>
            <ul className="bullets">
              {p.cv.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
          <section className="project__block" aria-labelledby={`${p.id}-tech`}>
            <h4 id={`${p.id}-tech`}>Technologies</h4>
            <ul className="tags">
              {p.tech.map((t) => (
                <li className="tag" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Architecture nodes={p.architecture} />

        <section aria-labelledby={`${p.id}-challenges`}>
          <h4 className="sub-title" id={`${p.id}-challenges`}>
            Technical challenges
          </h4>
          <ul className="challenges">
            {p.challenges.map((c) => (
              <li className="challenge" key={c.title}>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title" id="projects-title">
          Featured Project
        </h2>
        {projects.map((p) => (
          <Project key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
