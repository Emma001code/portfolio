import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-5 sm:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p
        className="font-mono mb-3 font-medium text-[var(--color-accent)] uppercase"
        style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-bold leading-[1.1] tracking-tight text-[var(--color-ink)]"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.025em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-ink-muted)] italic">
          {subtitle}
        </p>
      )}
    </div>
  )
}
