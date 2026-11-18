import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="projects-title">Featured Projects</SectionHeading>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </section>
  )
}
