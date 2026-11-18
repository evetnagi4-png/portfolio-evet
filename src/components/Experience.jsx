import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { experience } from '../data/portfolioData'
import Education from './Education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function TimelineItem({ item, index, open, onToggle }) {
  const panelId = `exp-${item.id}`
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="relative pl-10"
    >
      {/* timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full ring-4 ring-cream-100 ${
          item.current ? 'bg-mustard-500' : 'bg-forest-800'
        }`}
      >
        {item.current && <span className="absolute h-6 w-6 animate-ping rounded-full bg-mustard-500/50 motion-reduce:hidden" />}
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>

      <div
        className={`rounded-3xl bg-white shadow-lg shadow-forest-950/5 ring-1 transition-shadow hover:shadow-xl ${
          item.current ? 'ring-mustard-500/60' : 'ring-forest-950/5'
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 rounded-3xl p-5 text-left sm:p-6"
        >
          <span className="block">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-lg font-bold">{item.role}</span>
              {item.current && (
                <span className="rounded-full bg-mustard-500 px-2.5 py-0.5 text-xs font-bold text-forest-950">Current</span>
              )}
            </span>
            <span className="mt-1 block font-semibold text-forest-800">{item.company}</span>
            <span className="mt-1 block text-sm font-semibold text-mustard-700">{item.period}</span>
            <span className="mt-2 block text-sm text-forest-950/70">{item.summary}</span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`mt-1 h-5 w-5 shrink-0 text-forest-800 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-forest-950/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-forest-950/75">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {item.location}
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-forest-950/80">
                  {item.details.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard-500" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}

export default function Experience() {
  // eYouth is open by default; other items open on click
  const [openId, setOpenId] = useState(experience[0].id)

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-0">
        <div className="lg:pr-12">
          <Reveal>
            <SectionHeading id="experience-title">Experience</SectionHeading>
          </Reveal>

          <div className="relative mt-8">
            {/* vertical timeline line */}
            <span className="absolute bottom-6 left-3 top-6 w-0.5 bg-mustard-500/50" aria-hidden="true" />
            <ol className="space-y-5">
              {experience.map((item, i) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={i}
                  open={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </ol>
          </div>
        </div>

        <Education />
      </div>
    </section>
  )
}
