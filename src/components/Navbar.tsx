import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, sectionIds, site } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (id: string) =>
    [
      'text-sm font-medium transition-colors',
      activeId === id
        ? 'text-[var(--color-accent)]'
        : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-colors',
        scrolled
          ? 'border-[var(--color-line)] bg-[var(--color-canvas)]/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-medium text-[var(--color-ink)]">
          <img
            src={site.avatar}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full object-cover ring-1 ring-[var(--color-line)]"
          />
          <span className="hidden sm:inline">{site.shortName}</span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
         
          <a
            href={site.cvPath}
            download
            aria-label="Download CV"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Download size={16} />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden items-center rounded-lg bg-[var(--color-accent)] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] sm:inline-flex"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-canvas)] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-lg px-3 py-2.5 ${linkClass(link.id)}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </a>
            <a
              href={site.cvPath}
              download
              className="mt-1 inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-3 py-2.5 text-sm font-medium text-[var(--color-ink)]"
              onClick={() => setOpen(false)}
            >
              <Download size={14} />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
