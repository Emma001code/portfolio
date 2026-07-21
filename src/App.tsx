import { SplashScreen } from './components/SplashScreen'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { CustomCursor } from './components/CustomCursor'
import { MotionFrames } from './components/MotionFrames'
import { Footer } from './components/Footer'
import { ThemeProvider } from './hooks/useTheme'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Research } from './sections/Research'
import { Awards } from './sections/Awards'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <SplashScreen />
      <div className="bg-atmosphere min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <MotionFrames />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Research />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
