import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Code2, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'
import useActiveSection from './useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useActiveSection(ids)

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className="relative mx-auto max-w-7xl rounded-[2rem] bg-forest-900 px-5 py-3 text-white shadow-xl shadow-forest-950/20 sm:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" onClick={close} className="flex items-center gap-2.5 text-lg font-bold">
            <Code2 className="h-7 w-7 text-mustard-500" strokeWidth={2.4} aria-hidden="true" />
            {profile.name}
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={`group relative block py-1.5 transition-colors hover:text-mustard-400 ${
                    active === id ? 'text-mustard-500' : 'text-white/90'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-mustard-500 transition-transform duration-300 ${
                      active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-3 rounded-full border-2 border-mustard-500 py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-colors hover:bg-mustard-500 hover:text-forest-950 sm:flex"
            >
              Let&apos;s Connect
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mustard-500 text-forest-950 transition-colors group-hover:bg-forest-900 group-hover:text-mustard-500">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-full text-mustard-500 transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 pb-3 pt-4">
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={close}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
                        active === id ? 'bg-white/10 text-mustard-400' : 'text-white/90'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={close}
                    className="flex items-center justify-center gap-2 rounded-full bg-mustard-500 px-5 py-3 font-semibold text-forest-950"
                  >
                    Let&apos;s Connect <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
