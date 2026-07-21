import { gallery } from '../data/content'

/** Alternating tilts matching choldaniel.com photo-card transforms */
const tilts = [
  { rotate: -5, y: -14 },
  { rotate: 4, y: 12 },
  { rotate: -3, y: -8 },
  { rotate: 6, y: 16 },
  { rotate: -4, y: -10 },
  { rotate: 3, y: 8 },
]

export function MotionFrames() {
  const loop = [...gallery, ...gallery]

  return (
    <div className="relative mt-6 overflow-hidden sm:mt-10" aria-label="Photo gallery">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16"
        style={{ background: 'linear-gradient(to right, var(--color-canvas), transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16"
        style={{ background: 'linear-gradient(to left, var(--color-canvas), transparent)' }}
      />
      <div className="ticker-photo flex items-center py-4 sm:py-6">
        {loop.map((photo, i) => {
          const tilt = tilts[i % tilts.length]
          return (
            <div
              key={`${photo.src}-${i}`}
              className="photo-card mx-4 shrink-0 overflow-hidden rounded-sm sm:rounded-none"
              style={{
                transform: `rotate(${tilt.rotate}deg) translateY(${tilt.y}px)`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={200}
                height={280}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
