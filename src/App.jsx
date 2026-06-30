import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
return (
    <>
      <div className="mesh-bg" aria-hidden="true">
        <div className="blob" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Tools />
      <Contact />
      <Footer />
    </>
  )
}
