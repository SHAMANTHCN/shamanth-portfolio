import CyberBackground from './components/CyberBackground'
import LoadingScreen   from './components/LoadingScreen'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Skills          from './components/Skills'
import Experience      from './components/Experience'
import Projects        from './components/Projects'
import Certifications  from './components/Certifications'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CyberBackground />
      {/* CRT scanlines */}
      <div style={{
        position:'fixed',inset:0,zIndex:1,pointerEvents:'none',
        background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.04) 2px,rgba(0,0,0,.04) 4px)',
      }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
