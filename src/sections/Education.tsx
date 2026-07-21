import { education } from '../data/content'
import { Section, SectionHeading } from '../components/Section'

export function Education() {
  const { featured, entries } = education

  return (
    <Section id="education">
      <SectionHeading
        eyebrow={education.eyebrow}
        title={education.title}
        subtitle={education.subtitle}
      />

      <div className="relative pl-6 sm:pl-10">
        {/* Timeline line */}
        <div
          className="absolute top-0 bottom-0 left-0 w-px"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-accent), color-mix(in srgb, var(--color-accent) 8%, transparent))',
          }}
          aria-hidden
        />

        {/* Featured degree */}
        <div className="relative pb-12 sm:pb-16">
          <div
            className="absolute top-1 -left-[27px] size-3 rounded-full bg-[var(--color-accent)] sm:-left-[35px]"
            style={{ boxShadow: '0 0 0 4px color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
            aria-hidden
          />
          <p className="font-mono mb-3 text-[11px] tracking-widest text-[var(--color-accent)] uppercase">
            {featured.period} · {featured.location}
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3
                className="mb-1 font-extrabold leading-none tracking-tight text-[var(--color-ink)]"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {featured.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-2 mb-6 text-sm font-semibold text-[var(--color-accent)]">
                {featured.school}
              </p>
              <div className="flex flex-wrap items-center gap-3 border-y border-[var(--color-line)] py-4">
                <span className="font-mono shrink-0 text-[10px] tracking-widest text-[var(--color-ink-faint)] uppercase">
                  {featured.metricLabel}
                </span>
                <span
                  className="font-extrabold tracking-tight text-[var(--color-accent)]"
                  style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}
                >
                  {featured.metric}
                </span>
                <span className="ml-auto shrink-0 rounded-[2px] border border-[var(--color-accent)]/30 px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                  {featured.badge}
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono mb-3 text-[10px] tracking-widest text-[var(--color-ink-faint)] uppercase">
                Top Courses
              </p>
              <div>
                {featured.topCourses.map((course, i) => (
                  <div
                    key={course}
                    className="flex items-center gap-2.5 py-2.5"
                    style={{
                      borderBottom:
                        i < featured.topCourses.length - 1
                          ? '1px solid var(--color-line)'
                          : 'none',
                    }}
                  >
                    <span className="size-1 shrink-0 rounded-full bg-[var(--color-accent)]/50" />
                    <span className="text-sm text-[var(--color-ink-muted)]">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary entries */}
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="relative mb-8 flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-start sm:justify-between"
          >
            <div
              className="absolute top-1 -left-[27px] size-2.5 rounded-full border border-[var(--color-ink-faint)] bg-[var(--color-canvas)] sm:-left-[35px]"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="mb-0.5 text-sm font-semibold text-[var(--color-ink)]">{entry.name}</p>
              <p className="mb-3 text-xs text-[var(--color-ink-faint)]">{entry.detail}</p>
              {entry.note && (
                <p className="mb-3 text-xs text-[var(--color-ink-muted)]">{entry.note}</p>
              )}
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[2px] border border-[var(--color-line)] px-2 py-0.5 text-[10px] tracking-wide text-[var(--color-ink-faint)] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="font-mono mb-2 text-xs tracking-wide text-[var(--color-ink-faint)]">
                {entry.period}
              </p>
              <span className="font-mono inline-block rounded-[2px] border border-[var(--color-line)] px-2 py-0.5 text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                {entry.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
