import { motion } from 'framer-motion'
import { about } from '../data/content'
import { Section, SectionHeading } from '../components/Section'

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />

      <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-20 xl:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 40)}
              className={`text-sm leading-[1.85] font-light ${
                i === 0 ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)]'
              }`}
            >
              {p}
            </p>
          ))}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-[var(--color-accent)] pl-4">
                <dt className="text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
                  {h.label}
                </dt>
                <dd className="mt-1 text-xs text-[var(--color-ink)]">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[340px] xl:max-w-[380px]">
            <div
              className="pointer-events-none absolute inset-0 translate-x-2.5 translate-y-2.5 border border-[var(--color-accent)]/20"
              aria-hidden
            />
            <div className="relative overflow-hidden border border-[var(--color-accent)]/25">
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-6 left-[-24px] flex flex-col gap-2">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col border border-[var(--color-accent)]/20 bg-[var(--color-canvas-elevated)] px-3 py-2"
                >
                  <span
                    className="font-extrabold leading-none text-[var(--color-accent)]"
                    style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
        <div className="shrink-0">
          <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
            Languages
          </p>
          <div>
            {about.languages.map((lang, i) => (
              <div
                key={lang.name}
                className="flex items-center justify-between gap-10 py-2.5"
                style={{
                  borderBottom:
                    i < about.languages.length - 1
                      ? '1px solid var(--color-line)'
                      : 'none',
                }}
              >
                <span className="text-sm text-[var(--color-ink)]">{lang.name}</span>
                <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l border-[var(--color-line)] pl-6 sm:pl-10">
          <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
            Tech Stack
          </p>
          <div className="flex flex-col gap-3">
            {about.techStack.map((group) => (
              <div
                key={group.category}
                className="flex flex-wrap items-baseline gap-5 sm:flex-nowrap"
              >
                <span className="font-mono w-24 shrink-0 text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                  {group.category}
                </span>
                <span className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {i > 0 && ' · '}
                      <span className={i === 0 ? 'text-[var(--color-ink)]' : undefined}>
                        {item}
                      </span>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
