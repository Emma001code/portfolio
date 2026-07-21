import {
  experience,
  experienceCategories,
  type ExperienceItem,
} from '../data/content'
import { Section, SectionHeading } from '../components/Section'

function ExperienceRole({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex flex-col gap-6 border-b border-l border-[var(--color-line)] py-7 pl-6 sm:flex-row sm:gap-8 sm:pl-8">
      <div className="min-w-0 flex-1">
        <span className="font-mono mb-3 inline-block rounded-[2px] border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] px-2 py-0.5 text-[10px] tracking-widest text-[var(--color-ink-faint)] uppercase">
          {item.badge}
        </span>
        <h3
          className="mb-1 font-extrabold leading-tight tracking-tight text-[var(--color-ink)]"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}
        >
          {item.title}
        </h3>
        <span className="font-mono mb-4 block text-xs tracking-wider text-[var(--color-accent)] uppercase">
          {item.org}
        </span>
        <div>
          {item.bullets.map((b, i) => (
            <div
              key={b.slice(0, 48)}
              className="flex items-start gap-3 py-2.5 text-sm leading-[1.55] text-[var(--color-ink-muted)]"
              style={{
                borderBottom:
                  i < item.bullets.length - 1
                    ? '1px solid var(--color-line)'
                    : 'none',
              }}
            >
              <span className="mt-0.5 shrink-0 text-[10px] font-bold text-[var(--color-accent)]">
                ›
              </span>
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 sm:min-w-[120px] sm:text-right">
        <span className="font-mono mb-1 block text-xs tracking-wide whitespace-nowrap text-[var(--color-ink-faint)]">
          {item.period}
        </span>
        <span className="mb-2 block text-[11px] text-[var(--color-ink-faint)]">
          {item.location}
        </span>
        <span
          className={`font-mono inline-block rounded-[2px] border px-2 py-0.5 text-[10px] tracking-wider uppercase ${
            item.status === 'Active'
              ? 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
              : 'border-[var(--color-line)] text-[var(--color-ink-faint)]'
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  )
}

export function Experience() {
  const groups = experienceCategories
    .map((category) => ({
      category,
      items: experience.filter((item) => item.category === category),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience & Leadership"
        title="Work & Community"
        subtitle="Shipping products, mentoring peers, and contributing where it counts."
      />
      <div className="space-y-14">
        {groups.map(({ category, items }) => (
          <div key={category}>
            <p className="font-mono mb-0 border-b border-[var(--color-line)] pb-3 text-[10px] tracking-[0.25em] text-[var(--color-ink-faint)] uppercase">
              {category}
            </p>
            {items.map((item) => (
              <ExperienceRole key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
