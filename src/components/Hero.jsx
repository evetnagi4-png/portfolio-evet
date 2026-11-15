import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, ReactIcon } from './BrandIcons'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const socials = [
  { label: 'GitHub profile', href: profile.github, Icon: GithubIcon, external: true },
  { label: 'LinkedIn profile', href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'Send an email', href: `mailto:${profile.email}`, Icon: Mail },
]

const float = (distance, duration, delay = 0) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
})

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-10 sm:pt-14 lg:pb-32 lg:pt-16">
      {/* Dark green swoosh bleeding off the bottom-right edge */}
      <div className="absolute -right-[12%] bottom-0 h-[26%] w-[75%] rounded-tl-[100%] bg-forest-900 lg:right-0 lg:h-[34%] lg:w-[48%]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text column */}
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.p variants={item} className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-mustard-700">
            {profile.role}
            <span className="h-0.5 w-16 bg-mustard-500/70" aria-hidden="true" />
          </motion.p>

          <motion.h1 variants={item} className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl xl:text-[3.5rem]">
            Hi, I&apos;m <span className="text-ochre">{profile.name}</span>
            <span className="mt-2 block text-3xl font-bold leading-tight sm:text-4xl xl:text-[2.6rem]">
              I build modern &amp;
              <br />
              <span className="relative inline-block">
                responsive
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7c40-6 100-6 196-2" fill="none" stroke="#F6AA1C" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              web experiences.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-md text-base leading-relaxed text-forest-950/80 sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-forest-950/20 transition-all hover:-translate-y-0.5 hover:bg-forest-800"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download="Evet-Nagi-CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold shadow-lg shadow-forest-950/10 ring-1 ring-forest-950/5 transition-all hover:-translate-y-0.5 hover:ring-mustard-500"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex gap-4">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-forest-900 shadow-md shadow-forest-950/10 transition-all hover:-translate-y-1 hover:bg-forest-900 hover:text-mustard-500"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual column */}
        <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative mx-auto aspect-square w-[88%] sm:w-[82%]">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-mustard-500"
            />
            {/* Outline ring, offset like the reference */}
            <div className="absolute -bottom-4 -left-4 right-6 top-12 -z-10 rounded-full border-[3px] border-forest-800" aria-hidden="true" />

            {/* Cut-out portrait: head and shoulders pop out above the circle, the body is clipped by the circle's lower arc */}
            <div
              className="absolute inset-x-0 bottom-0 h-[110%]"
              style={{
                WebkitMaskImage: 'linear-gradient(#000, #000), radial-gradient(circle closest-side at 50% 54.545%, #000 99%, transparent 100%)',
                WebkitMaskSize: '100% 54.545%, 100% 100%',
                WebkitMaskPosition: 'top, center',
                WebkitMaskRepeat: 'no-repeat',
                maskImage: 'linear-gradient(#000, #000), radial-gradient(circle closest-side at 50% 54.545%, #000 99%, transparent 100%)',
                maskSize: '100% 54.545%, 100% 100%',
                maskPosition: 'top, center',
                maskRepeat: 'no-repeat',
              }}
            >
              <motion.img
                src={profile.photo}
                alt={profile.photoAlt}
                width="498"
                height="818"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto max-w-none"
              />
            </div>

            {/* Floating React badge */}
            <motion.div {...float(10, 4.5)} className="absolute -right-2 bottom-[4%] sm:bottom-[22%] z-10 sm:-right-8">
              <div className="flex -rotate-12 items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-forest-950/15">
                <ReactIcon className="h-9 w-9" />
                <span className="text-xl font-bold text-[#0E7C99]">React</span>
              </div>
            </motion.div>

            {/* Decorative marks */}
            <motion.svg {...float(8, 5, 0.5)} className="absolute -left-2 top-[8%] h-12 w-14 sm:-left-8" viewBox="0 0 56 48" fill="none" stroke="#17402B" strokeWidth="5" strokeLinecap="round" aria-hidden="true">
              <path d="M4 12l34 8M4 32h20" />
            </motion.svg>
            <motion.svg {...float(8, 6, 1)} className="absolute -right-1 top-[14%] h-12 w-12 sm:-right-6" viewBox="0 0 48 48" fill="none" stroke="#17402B" strokeWidth="5" strokeLinecap="round" aria-hidden="true">
              <path d="M30 6l14-6M34 28l8 2" transform="translate(-6 8)" />
            </motion.svg>
            <motion.svg {...float(12, 5.5, 0.8)} className="absolute -left-4 bottom-[26%] h-10 w-10 sm:-left-10" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M4 4l32 16L4 36z" fill="#F6AA1C" />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  )
}
