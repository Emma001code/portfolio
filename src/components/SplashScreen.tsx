import { useEffect } from 'react'

/** Dismisses the HTML #preloader — same timing as choldaniel.com (1.3s hold + 0.5s fade). */
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
