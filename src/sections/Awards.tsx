import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { awards, type AwardItem } from '../data/content'
import { Section, SectionHeading } from '../components/Section'

function CertRow({ item }: { item: AwardItem }) {
  const inner = (
    <>
      <div className="flex size-8 shrink-0 items-center justify-center rounded bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <BadgeCheck size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[var(--color-ink)]">{item.title}</p>
        <p className="truncate text-xs text-[var(--color-ink-faint)]">
          {item.org} · {item.period}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {item.badge && (
          <span className="rounded border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-accent)]">
            {item.badge}
          </span>
        )}
        {item.href && (
          <ExternalLink size={12} className="text-[var(--color-ink-faint)]" aria-hidden />
        )}
      </div>
    </>
  )

  const className =
    'flex items-center gap-3 rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] p-3.5 transition hover:border-[var(--color-accent)]/30'

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

function AwardCard({ item }: { item: AwardItem }) {
  const body = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <Award size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="mb-0.5 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h4>
        <p className="mb-1 text-xs text-[var(--color-accent)]">{item.org}</p>
        <p className="text-xs text-[var(--color-ink-faint)]">{item.description}</p>
      </div>
      <span className="font-mono mt-0.5 shrink-0 text-xs text-[var(--color-ink-faint)]">
        {item.period}
      </span>
    </div>
  )

  const className =
    'rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] p-4 transition hover:border-[var(--color-accent)]/30'

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className}`}
      >
        {body}
      </a>
    )
  }

  return <div className={className}>{body}</div>
}

export function Awards() {
  const honour = awards.filter((a) => a.kind === 'award')
  const certs = awards.filter((a) => a.kind === 'certification')

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications & Awards"
        subtitle="Scholarships, professional certifications, and focused coursework."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-x-hidden">
          <p className="font-mono mb-5 text-[11px] tracking-widest text-[var(--color-ink-faint)] uppercase">
            Certifications ({certs.length})
          </p>
          <div className="space-y-2">
            {certs.map((item) => (
              <CertRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="overflow-x-hidden">
          <p className="font-mono mb-5 text-[11px] tracking-widest text-[var(--color-ink-faint)] uppercase">
            Awards & Honours ({honour.length})
          </p>
          <div className="space-y-3">
            {honour.map((item) => (
              <AwardCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
