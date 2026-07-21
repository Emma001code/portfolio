import { ExternalLink, Github, Play, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/content'
import { getTechMeta } from './techIcons'

export function isRealUrl(url?: string) {
  return Boolean(url && url !== '#')
}

export const statusStyles: Record<Project['status'], string> = {
  Live: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300',
  Completed: 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]',
  'In Development': 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  Prototype: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
}

const TECH_VISIBLE = 4

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (project: Project) => void
}) {
  const visibleTech = project.tech.slice(0, TECH_VISIBLE)
  const extra = project.tech.length - TECH_VISIBLE

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] transition hover:border-[var(--color-accent)]/30"
    >
      <div className="relative h-40 shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute top-2.5 left-2.5">
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)]">
            <Star size={10} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <h3 className="mb-0.5 text-sm font-bold text-[var(--color-ink)]">{project.title}</h3>
          <p className="text-[11px] leading-snug text-[var(--color-ink-faint)]">
            {project.subtitle}
          </p>
        </div>

        {project.badge && (
          <span className="mb-3 inline-flex self-start rounded border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium text-sky-600 dark:text-sky-300">
            {project.badge}
          </span>
        )}

        <p className="mb-4 line-clamp-3 flex-1 text-xs leading-relaxed text-[var(--color-ink-muted)]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1">
          {visibleTech.map((t) => {
            const { icon: Icon, color } = getTechMeta(t)
            return (
              <div
                key={t}
                className="flex items-center gap-1 rounded border border-[var(--color-line)] bg-[var(--color-canvas)] px-1.5 py-1"
              >
                <Icon size={11} style={{ color }} aria-hidden />
                <span className="text-[10px] text-[var(--color-ink-faint)]">{t}</span>
              </div>
            )
          })}
          {extra > 0 && (
            <div className="flex items-center rounded border border-[var(--color-line)] px-1.5 py-1 text-[10px] text-[var(--color-ink-faint)]">
              +{extra}
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="rounded-sm p-1.5 text-[var(--color-ink-muted)] transition hover:bg-[var(--color-canvas)] hover:text-[var(--color-accent)]"
              >
                <Github size={14} />
              </a>
            )}
            {isRealUrl(project.demo) && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="rounded-sm p-1.5 text-[var(--color-ink-muted)] transition hover:bg-[var(--color-canvas)] hover:text-[var(--color-accent)]"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {isRealUrl(project.video) && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} demo video`}
                className="rounded-sm p-1.5 text-[var(--color-ink-muted)] transition hover:bg-[var(--color-canvas)] hover:text-[var(--color-accent)]"
              >
                <Play size={14} />
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-[11px] font-medium text-[var(--color-accent)] transition hover:opacity-80"
          >
            Read more →
          </button>
        </div>
      </div>
    </motion.article>
  )
}
