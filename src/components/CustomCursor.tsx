import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Custom cursor matching choldaniel.com structure:
 * solid glowing dot + lagging ring. Teal accent for this site.
 * Disabled on touch / reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Ring lags slightly behind the dot (Chol-style lerp)
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 28, mass: 0.35 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 28, mass: 0.35 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const canHover = window.matchMedia('(hover: hover)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || !canHover || reduceMotion) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest(
        'a, button, input, textarea, select, label, [role="button"], .photo-card',
      )
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [mouseX, mouseY])

  if (!enabled) return null

  const ringSize = hovering ? 48 : 32

  return (
    <>
      {/* Dot — 6px + glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          opacity: visible ? 1 : 0,
          background: 'var(--color-accent)',
          boxShadow:
            '0 0 8px 2px var(--color-accent), 0 0 20px color-mix(in srgb, var(--color-accent) 55%, transparent)',
          scale: hovering ? 0.75 : 1,
        }}
      />
      {/* Ring — lags behind */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99998] rounded-full bg-transparent"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          opacity: visible ? 1 : 0,
          border: '1.5px solid color-mix(in srgb, var(--color-accent) 35%, transparent)',
          boxShadow: '0 0 6px 1px color-mix(in srgb, var(--color-accent) 7%, transparent)',
        }}
      />
    </>
  )
}
