import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
  MessageSquare,
} from 'lucide-react'
import { contact, site } from '../data/content'
import { Section, SectionHeading } from '../components/Section'

type Status = 'idle' | 'sending' | 'success' | 'error'

const socialLinks = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <Mail size={16} />,
    color: 'var(--color-accent)',
  },
  {
    label: 'LinkedIn',
    value: '/in/emmanuelngwoke',
    href: site.linkedin,
    icon: <Linkedin size={16} />,
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'Emma001code',
    href: site.github,
    icon: <Github size={16} />,
    color: 'var(--color-ink)',
  },
  {
    label: 'ORCID',
    value: '0009-0002-6375-5913',
    href: site.orcid,
    icon: <span className="font-mono text-[9px] font-bold leading-none">ID</span>,
    color: '#A6CE39',
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={contact.eyebrow}
        title={contact.title}
        subtitle={contact.body}
      />

      <div className="grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="font-mono mb-1 text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
            Find me on
          </p>
          <div>
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
                }
                className="group flex items-center justify-between py-3.5 transition"
                style={{
                  borderBottom:
                    i < socialLinks.length - 1
                      ? '1px solid var(--color-line)'
                      : 'none',
                }}
              >
                <div className="flex items-center gap-3.5">
                  <span style={{ color: link.color, opacity: 0.9 }}>{link.icon}</span>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-[var(--color-ink)]">
                      {link.label}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--color-ink-faint)] transition group-hover:text-[var(--color-accent)]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col border border-[var(--color-line)] bg-[var(--color-canvas-elevated)] p-5 sm:p-6">
          <div
            className="mb-6 h-px"
            style={{
              background: 'linear-gradient(90deg, var(--color-accent), transparent)',
            }}
          />
          <div className="mb-5">
            <div className="mb-4 flex size-10 items-center justify-center rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <MessageSquare size={18} />
            </div>
            <h3 className="mb-2 text-base font-bold text-[var(--color-ink)]">Send a message</h3>
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {contact.formIntro}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-3">
            <div>
              <label className="font-mono mb-1.5 block text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                Name
              </label>
              <input
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="font-mono mb-1.5 block text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)]"
              />
            </div>
            <div className="flex-1">
              <label className="font-mono mb-1.5 block text-[10px] tracking-wider text-[var(--color-ink-faint)] uppercase">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full resize-none rounded-sm border border-[var(--color-line)] bg-[var(--color-canvas)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                Message sent — thanks for reaching out.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-600 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  )
}
