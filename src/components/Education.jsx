import { education } from '../data/portfolioData'
import { iconMap } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <div id="education" className="lg:border-l lg:border-mustard-500/40 lg:pl-12">
      <Reveal>
        <SectionHeading id="education-title">Education &amp; Certifications</SectionHeading>
      </Reveal>

      <ul className="mt-8 space-y-4" aria-labelledby="education-title">
        {education.map(({ icon, title, org, period }, i) => {
          const Icon = iconMap[icon]
          return (
            <Reveal as="li" key={title} delay={i * 0.08} className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-forest-950/5 ring-1 ring-forest-950/5 transition-all hover:-translate-y-1 hover:ring-mustard-500/60">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest-900 text-mustard-500 transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold leading-snug">{title}</h3>
                <p className="text-sm text-forest-950/70">{org}</p>
                <p className="mt-0.5 text-sm font-semibold text-mustard-700">{period}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )
}
