import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, Github, Play, Star, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/content'
import { getTechMeta } from './techIcons'
import { isRealUrl, statusStyles } from './ProjectCard'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-modal-${project.id}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-[640px] overflow-y-auto border border-[var(--color-line)] bg-[var(--color-canvas-elevated)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[220px] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3
                      id={`project-modal-${project.id}`}
                      className="text-lg font-bold text-[var(--color-ink)]"
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star
                        size={14}
                        className="fill-[var(--color-accent)] text-[var(--color-accent)]"
                      />
                    )}
                  </div>
                  <p className="text-xs text-[var(--color-ink-faint)]">{project.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] text-[var(--color-ink-faint)] transition hover:text-[var(--color-ink)]"
                >
                  <X size={14} />
                </button>
              </div>

              {project.badge && (
                <span className="mb-4 inline-flex items-center rounded border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-600 dark:text-sky-300">
                  {project.badge}
                </span>
              )}

              <p className="mb-5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {project.description}
              </p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] p-2.5 text-center"
                    >
                      <p className="text-sm font-bold text-[var(--color-accent)]">{m.value}</p>
                      <p className="mt-0.5 text-[10px] leading-tight text-[var(--color-ink-faint)]">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-5">
                  <p className="font-mono mb-2 text-[10px] tracking-[0.18em] text-[var(--color-ink-faint)] uppercase">
                    Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs leading-relaxed text-[var(--color-ink-muted)]"
                      >
                        <span className="text-[var(--color-accent)]">›</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <p className="font-mono mb-2 text-[10px] tracking-[0.18em] text-[var(--color-ink-faint)] uppercase">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => {
                    const { icon: Icon, color } = getTechMeta(t)
                    return (
                      <div
                        key={t}
                        className="flex items-center gap-1.5 rounded border border-[var(--color-line)] bg-[var(--color-canvas)] px-2 py-1"
                      >
                        <Icon size={12} style={{ color }} aria-hidden />
                        <span className="text-[11px] text-[var(--color-ink-muted)]">{t}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-line)] px-4 py-2 text-xs font-medium text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                )}
                {isRealUrl(project.demo) && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                )}
                {isRealUrl(project.video) && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
                  >
                    <Play size={13} />
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
