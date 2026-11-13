import { person } from '../data/content.js'
import { GitHub, Globe, LinkedIn, Mail, Phone, Pin } from './Icons.jsx'

const items = [
  { k: 'Email', v: person.email, href: `mailto:${person.email}`, Icon: Mail },
  { k: 'Phone', v: person.phoneDisplay, href: person.phoneHref, Icon: Phone },
  { k: 'LinkedIn', v: person.linkedinHandle, href: person.linkedin, Icon: LinkedIn, external: true },
  { k: 'GitHub', v: person.githubHandle, href: person.github, Icon: GitHub, external: true },
  { k: 'Portfolio', v: 'dani7368.github.io/portfolio', href: person.portfolio, Icon: Globe, external: true },
  { k: 'Location', v: person.location, Icon: Pin },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title" id="contact-title">
          Get in Touch
        </h2>
        <address className="contact-grid">
          <span className="sr-only">{person.name}</span>
          {items.map(({ k, v, href, Icon, external }) => {
            const inner = (
              <>
                <span className="contact-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span>
                  <span className="contact-k">{k}</span>
                  <span className="contact-v">{v}</span>
                </span>
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </>
            )
            return href ? (
              <a
                key={k}
                className="contact-item reveal"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {inner}
              </a>
            ) : (
              <div key={k} className="contact-item reveal">
                {inner}
              </div>
            )
          })}
        </address>
      </div>
    </section>
  )
}
