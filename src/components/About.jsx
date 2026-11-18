import { about } from '../data/portfolioData'
import { iconMap } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <SectionHeading id="about-title">About Me</SectionHeading>
          <div className="mt-5 max-w-xl space-y-4 leading-relaxed text-forest-950/80">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {about.qualities.map(({ icon, label }, i) => {
            const Icon = iconMap[icon]
            return (
              <Reveal as="li" key={label} delay={i * 0.1} className="flex flex-col items-center gap-3 px-3 text-center lg:border-l lg:border-mustard-500/40">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg shadow-forest-950/10 transition-transform duration-300 hover:-translate-y-1 hover:rotate-6">
                  <Icon className="h-7 w-7 text-mustard-500" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
