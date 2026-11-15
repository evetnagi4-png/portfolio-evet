import { motion } from 'framer-motion'
import { ArrowUpRight, Info } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const btn =
  'inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5'

export default function ProjectCard({ project, index, onOpen }) {
  const { name, short, image, imageAlt, tech, liveUrl, githubUrl } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest-950/10 ring-1 ring-forest-950/5 transition-shadow hover:shadow-2xl hover:shadow-forest-950/15"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View details of ${name}`}
        className="relative block aspect-[16/10] overflow-hidden rounded-none bg-cream-200"
      >
        <img
          src={image}
          alt={imageAlt}
          width="1100"
          height="687"
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-forest-900 text-mustard-500 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">
          <button type="button" onClick={() => onOpen(project)} className="text-left transition-colors hover:text-forest-700">
            {name}
          </button>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-forest-950/70">{short}</p>

        <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Technologies used in ${name}`}>
          {tech.map((t) => (
            <li key={t} className="rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold text-forest-800">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-5">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${name} (opens in a new tab)`} className={`${btn} bg-forest-900 text-white hover:bg-forest-800`}>
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {/* Only rendered when a real repository URL exists in the data */}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub (opens in a new tab)`} className={`${btn} bg-cream-100 text-forest-900 ring-1 ring-forest-950/15 hover:ring-mustard-500`}>
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
          <button type="button" onClick={() => onOpen(project)} aria-label={`View details of ${name}`} className={`${btn} bg-cream-100 text-forest-900 ring-1 ring-forest-950/15 hover:ring-mustard-500`}>
            <Info className="h-4 w-4" aria-hidden="true" /> Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}
