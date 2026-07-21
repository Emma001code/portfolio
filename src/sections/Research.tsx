import { ExternalLink } from 'lucide-react'
import { research, site } from '../data/content'
import { Section, SectionHeading } from '../components/Section'

type ResearchCard = typeof research.thesis | typeof research.publication

function statusBadgeClass(tone: ResearchCard['statusTone']) {
  if (tone === 'progress') {
    return 'bg-amber-500/10 border-amber-500/25 text-amber-700 dark:text-amber-300'
  }
  return 'bg-[var(--color-accent-soft)] border-[var(--color-accent)]/30 text-[var(--color-accent)]'
}

function ResearchPaperCard({ paper }: { paper: ResearchCard }) {
  return (
    <article className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-canvas-elevated)]">
      <div
        className="h-px"
        style={{
          background: 'linear-gradient(90deg, var(--color-accent), transparent)',
        }}
      />
      <div className="p-4 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="mb-5 flex flex-wrap gap-2">
              {paper.badges.map((badge, i) => (
                <span
                  key={badge}
                  className={`rounded border px-2.5 py-1 text-xs font-medium ${
                    i === 0
                      ? 'border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300'
                      : statusBadgeClass(paper.statusTone)
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <h3 className="mb-3 text-base font-bold leading-snug break-words text-[var(--color-ink)] sm:text-lg">
              {paper.title}
            </h3>
            <p className="mb-1 text-sm font-medium break-words text-[var(--color-accent)]">
              {paper.authors}
            </p>
            <p className="mb-6 text-sm text-[var(--color-ink-faint)]">{paper.venue}</p>
            <p className="mb-6 text-sm leading-[1.85] text-[var(--color-ink-muted)]">
              {paper.abstract}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[2px] border border-[var(--color-line)] bg-[var(--color-canvas)] px-2 py-0.5 text-[10px] tracking-wide text-[var(--color-ink-faint)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] p-5">
              <p className="font-mono mb-4 text-[10px] tracking-[0.18em] text-[var(--color-ink-faint)] uppercase">
                Paper Details
              </p>
              <dl className="space-y-3.5">
                {paper.details.map((d) => (
                  <div key={d.label}>
                    <dt className="mb-0.5 text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                      {d.label}
                    </dt>
                    <dd className="font-mono text-sm text-[var(--color-ink)]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-2">
              {paper.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] p-3 text-xs text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {paper.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-sm border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] p-3 text-center"
                >
                  <p className="text-base font-bold text-[var(--color-accent)]">{h.value}</p>
                  <p className="mt-0.5 text-[10px] text-[var(--color-ink-faint)]">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        eyebrow={research.eyebrow}
        title={research.title}
        subtitle={research.subtitle}
      />
      <div className="space-y-8">
        <ResearchPaperCard paper={research.thesis} />
        <ResearchPaperCard paper={research.publication} />
      </div>
      <p className="mt-6 text-xs text-[var(--color-ink-faint)]">
        ORCID:{' '}
        <a
          href={site.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:underline"
        >
          {site.orcid.replace('https://orcid.org/', '')}
        </a>
      </p>
    </Section>
  )
}
