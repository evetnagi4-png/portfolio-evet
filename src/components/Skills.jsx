import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import { iconMap } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const chip = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function LaptopIllustration() {
  return (
    <svg viewBox="0 0 320 260" className="h-auto w-full" role="img" aria-label="Illustration of a laptop showing code">
      <circle cx="210" cy="120" r="100" fill="#F6AA1C" />
      <path d="M60 232c0-30 60-40 120-40s100 10 100 40z" fill="#17402B" opacity="0.12" />
      <rect x="62" y="50" width="196" height="132" rx="10" fill="#E9E6DA" />
      <rect x="70" y="58" width="180" height="116" rx="5" fill="#1F4D35" />
      <path d="M130 94l-22 24 22 24M190 94l22 24-22 24M168 86l-16 64" fill="none" stroke="#F6AA1C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 190h244l-14 22H52z" fill="#D9D5C6" />
      <rect x="128" y="190" width="64" height="5" rx="2.5" fill="#BDB8A6" />
      <path d="M262 150c18-30 40-14 30 14s-26 30-30-14z" fill="#2B6045" />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="skills-title">My Skills</SectionHeading>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08} className="rounded-3xl bg-white p-6 shadow-lg shadow-forest-950/5 ring-1 ring-forest-950/5">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <motion.ul
                  variants={list}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="mt-4 flex flex-wrap gap-2.5"
                >
                  {group.skills.map(({ name, icon }) => {
                    const Icon = iconMap[icon]
                    return (
                      <motion.li
                        key={name}
                        variants={chip}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2 rounded-full bg-cream-200 px-3.5 py-2 text-sm font-medium transition-colors hover:bg-mustard-400/40"
                      >
                        <Icon className="h-4 w-4 text-forest-800" aria-hidden="true" />
                        {name}
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mx-auto hidden w-full max-w-xs lg:block">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <LaptopIllustration />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
