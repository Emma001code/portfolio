import { useEffect } from 'react'

export function SplashScreen() {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    const root = document.getElementById('root')
    if (!preloader) {
      if (root) root.style.visibility = 'visible'
      return
    }

    const hold = window.setTimeout(() => {
      preloader.style.opacity = '0'
      if (root) root.style.visibility = 'visible'
      window.setTimeout(() => preloader.remove(), 500)
    }, 1300)

    return () => window.clearTimeout(hold)
  }, [])

  return null
}
