import { motion } from 'framer-motion'

// Fade + slide-up when scrolled into view (once). Reduced motion is handled by <MotionConfig> in App.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Tag>
  )
}
