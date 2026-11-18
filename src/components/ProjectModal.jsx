import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const { name, short, image, imageAlt, tech, highlights, liveUrl, githubUrl } = project

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      // keep keyboard focus inside the dialog
      const items = dialogRef.current.querySelectorAll(FOCUSABLE)
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-forest-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream-50 shadow-2xl sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-forest-900 text-white shadow-lg transition-colors hover:bg-forest-700"
        >
          <X className="h-5 w-5" />
        </button>

        <img src={image} alt={imageAlt} width="1100" height="687" className="aspect-[16/10] w-full object-cover object-top" />

        <div className="p-6 sm:p-8">
          <h3 id="project-modal-title" className="text-2xl font-extrabold">{name}</h3>
          <p className="mt-1 text-forest-950/70">{short}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map((t) => (
              <li key={t} className="rounded-full bg-mustard-400/30 px-3 py-1 text-xs font-bold text-forest-900">{t}</li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold">What I built</h4>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-forest-950/80">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard-500" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800">
                Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-semibold ring-1 ring-forest-950/15 transition-all hover:ring-mustard-500">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
