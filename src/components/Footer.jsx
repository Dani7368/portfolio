import { person } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {person.name} ·{' '}
      <a href={person.github} target="_blank" rel="noopener noreferrer">
        {person.githubHandle}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </footer>
  )
}
