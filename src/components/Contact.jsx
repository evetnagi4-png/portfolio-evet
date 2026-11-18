import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Reveal from './Reveal'

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Hello Evet, let’s work together')}`

const socials = [
  { label: 'GitHub profile', href: profile.github, Icon: GithubIcon, external: true },
  { label: 'LinkedIn profile', href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'Send an email', href: mailto, Icon: Mail },
]

function CodeWindowIllustration() {
  return (
    <svg viewBox="0 0 360 300" className="h-auto w-full" role="img" aria-label="Illustration of a code editor window">
      <circle cx="210" cy="150" r="120" fill="#F6AA1C" opacity="0.95" />
      <rect x="70" y="40" width="230" height="190" rx="14" fill="#12301F" />
      <circle cx="90" cy="60" r="5" fill="#F6AA1C" />
      <circle cx="106" cy="60" r="5" fill="#F9BE45" />
      <circle cx="122" cy="60" r="5" fill="#E9E6DA" />
      <g strokeLinecap="round" strokeWidth="6">
        <path d="M92 92h28" stroke="#6C8F7B" /><path d="M130 92h90" stroke="#F6AA1C" />
        <path d="M110 116h60" stroke="#F9BE45" /><path d="M180 116h70" stroke="#6C8F7B" />
        <path d="M110 140h90" stroke="#6C8F7B" /><path d="M92 164h44" stroke="#F6AA1C" />
        <path d="M146 164h80" stroke="#F9BE45" />
      </g>
      <rect x="236" y="176" width="84" height="84" rx="14" fill="#F6AA1C" transform="rotate(8 278 218)" />
      <path d="M258 206l-14 12 14 12M298 206l14 12-14 12M284 200l-12 36" fill="none" stroke="#12301F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" transform="rotate(8 278 218)" />
      <g fill="#2B6045">
        <ellipse cx="62" cy="228" rx="13" ry="38" transform="rotate(-18 62 228)" />
        <ellipse cx="92" cy="236" rx="12" ry="34" transform="rotate(24 92 236)" />
        <ellipse cx="42" cy="244" rx="10" ry="28" transform="rotate(-38 42 244)" />
      </g>
      <rect x="40" y="262" width="66" height="10" rx="5" fill="#12301F" />
    </svg>
  )
}

export default function Contact() {
  return (
    <>
      {/* curved edge from the cream page into the dark contact block */}
      <div className="-mb-px bg-cream-100" aria-hidden="true">
        <svg className="block h-12 w-full text-forest-900 sm:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0 80V50C220 0 520 0 760 30s480 30 680-20v70z" fill="currentColor" />
        </svg>
      </div>

      <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-forest-900 pb-16 pt-4 text-white sm:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative z-10">
            <h2 id="contact-title" className="text-3xl font-extrabold text-mustard-500 sm:text-4xl">
              Let&apos;s Work Together!
            </h2>
            <p className="mt-3 max-w-lg text-lg text-white/90">
              Feel free to reach out for collaboration or just to say hi.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={mailto}
                className="group inline-flex items-center gap-2 rounded-full bg-mustard-500 px-8 py-4 text-lg font-bold text-forest-950 ring-4 ring-mustard-500/30 transition-all hover:-translate-y-0.5 hover:bg-mustard-400"
              >
                Contact Me
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} className="text-white/90 underline decoration-mustard-500 decoration-2 underline-offset-4 transition-colors hover:text-mustard-400">
                {profile.email}
              </a>
            </div>

            <ul className="mt-8 flex gap-4">
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-mustard-500 hover:text-forest-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto w-full max-w-sm md:max-w-md">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <CodeWindowIllustration />
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
