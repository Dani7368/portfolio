import { hero, person } from '../data/content.js'

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
