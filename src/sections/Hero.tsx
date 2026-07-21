import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24">
      <div className="pointer-events-none absolute top-20 right-[12%] size-40 rounded-full bg-[var(--color-glow)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-canvas-elevated)]/80 px-3 py-1 text-sm text-[var(--color-accent)]">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            {site.availability}
          </p>

          <p className="font-mono mb-3 text-sm tracking-widest text-[var(--color-ink-faint)] uppercase">
            {site.location}
          </p>

          <h1
            className="font-extrabold leading-none tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Emmanuel <span className="text-[var(--color-accent)]">Ngwoke</span>
          </h1>

          <p className="mt-4 mb-6 text-xl font-bold text-[var(--color-accent)]">{site.role}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-sm">
            {site.tagline} Mastercard Foundation Scholar · African Leadership University.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-[var(--color-line)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Get in Touch
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <SocialLink href={site.github} label="GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink href={site.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="Email">
              <Mail size={18} />
            </SocialLink>
            <a
              href={site.orcid}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
              className="font-mono inline-flex h-10 items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] px-3 text-xs font-semibold text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              ORCID
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {children}
    </a>
  )
}
