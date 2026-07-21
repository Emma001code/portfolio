import type { ReactNode } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { navLinks, site } from '../data/content'

const primaryNav = navLinks.filter((l) =>
  ['about', 'projects', 'research', 'experience'].includes(l.id),
)
const moreNav = [
  ...navLinks.filter((l) =>
    ['education', 'certifications', 'contact'].includes(l.id),
  ),
  { id: 'orcid', label: 'ORCID', href: site.orcid },
]

export function Footer() {
  const year = new Date().getFullYear()
  const [first, ...rest] = site.name.split(' ')
  const last = rest.join(' ')

  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="size-9 shrink-0 overflow-hidden rounded-full"
                style={{ border: '2px solid color-mix(in srgb, var(--color-accent) 40%, transparent)' }}
              >
                <img
                  src={site.avatar}
                  alt={site.name}
                  className="size-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-ink)]">
                  {first}{' '}
                  <span className="text-[var(--color-accent)]">{last}</span>
                </p>
                <p className="font-mono text-[11px] text-[var(--color-ink-faint)]">
                  {site.role}
                </p>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-[var(--color-ink-muted)]">
              Building health-tech and scalable systems across Africa. Based in Kigali, Rwanda.
            </p>
            <div className="flex items-center gap-1.5">
              <FooterIcon href={site.github} label="GitHub">
                <Github size={14} />
              </FooterIcon>
              <FooterIcon href={site.linkedin} label="LinkedIn">
                <Linkedin size={14} />
              </FooterIcon>
              <FooterIcon href={`mailto:${site.email}`} label="Email">
                <Mail size={14} />
              </FooterIcon>
              <a
                href={site.orcid}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="font-mono flex h-8 items-center rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] px-2 text-[9px] font-semibold text-[var(--color-ink-faint)] transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
              >
                ORCID
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono mb-4 text-[10px] tracking-widest text-[var(--color-ink-faint)] uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {primaryNav.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-xs text-[var(--color-ink-muted)] transition hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono mb-4 text-[10px] tracking-widest text-[var(--color-ink-faint)] uppercase">
              More
            </p>
            <ul className="space-y-2.5">
              {moreNav.map((link) => (
                <li key={link.id}>
                  <a
                    href={'href' in link ? link.href : `#${link.id}`}
                    {...('href' in link
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-xs text-[var(--color-ink-muted)] transition hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-ink-faint)]">
            {site.location.split('·')[0].trim()} · Open to relocation
          </p>
          <p className="text-xs text-[var(--color-ink-faint)]">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
        <p className="mt-2 text-[10px] text-[var(--color-ink-faint)]">
          Built with React · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  const external = !href.startsWith('mailto:')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="flex size-8 items-center justify-center rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] text-[var(--color-ink-faint)] transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
    >
      {children}
    </a>
  )
}
