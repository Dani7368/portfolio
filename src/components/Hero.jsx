import { hero, person } from '../data/content.js'
import { GitHub, LinkedIn, Mail, Phone } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__inner">
        <p className="hero__eyebrow">
          {person.title} · {person.location}
        </p>
        <h1 id="hero-name">
          {person.firstName}
          <br />
          <em>{person.lastName}</em>
        </h1>
        <p className="hero__sub">{hero.support}</p>
        <div className="hero__contacts">
          <a className="hero__contact" href={`mailto:${person.email}`}>
            <Mail /> {person.email}
          </a>
          <a className="hero__contact" href={person.phoneHref}>
            <Phone /> {person.phoneDisplay}
          </a>
          <a className="hero__contact" href={person.github} target="_blank" rel="noopener noreferrer">
            <GitHub /> {person.githubHandle}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="hero__contact" href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedIn /> LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="hero__btns">
          <a className="btn-primary" href="#projects">
            View My Work
          </a>
          {person.resumePdf && (
            <a className="btn-ghost" href={`${import.meta.env.BASE_URL}${person.resumePdf}`} download>
              Download Resume
            </a>
          )}
          <a className="btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
