import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Tech Stack', href: '#tools' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (window.scrollY < 260) {
        setActiveLink('#home')
        return
      }

      let currentSection = '#home'
      const scrollPosition = window.scrollY + 170

      NAV_LINKS.forEach((link) => {
        if (link.href === '#home') return

        const section = document.querySelector(link.href)
        if (!section) return

        if (scrollPosition >= section.offsetTop) {
          currentSection = link.href
        }
      })

      setActiveLink(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (event, href) => {
    event.preventDefault()
    setIsOpen(false)
    setActiveLink(href)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduceMotion ? 'auto' : 'smooth'

    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior,
      })

      window.history.replaceState(null, '', window.location.pathname)
      return
    }

    const section = document.querySelector(href)

    if (!section) return

    const headerOffset = window.innerWidth <= 768 ? 105 : 125
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY
    const scrollPosition = sectionPosition - headerOffset

    window.scrollTo({
      top: scrollPosition,
      behavior,
    })

    window.history.replaceState(null, '', href)
  }

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-shell">
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-brand"
            onClick={(event) => scrollToSection(event, '#home')}
          >
            Ammar Marikkar
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
                className={activeLink === link.href ? 'active' : ''}
                aria-current={activeLink === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={`nav-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`nav-mobile ${isOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className={activeLink === link.href ? 'active' : ''}
              aria-current={activeLink === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
