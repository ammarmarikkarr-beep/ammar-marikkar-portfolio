import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Tech Stack', href: '#tools' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))
      let currentSection = '#home'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const sectionTop = section.offsetTop - 140
        if (window.scrollY >= sectionTop) {
          currentSection = `#${id}`
        }
      })

      setActiveLink(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setIsOpen(false)
  }

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-shell">
        <div className="nav-inner">
          <a href="#home" className="nav-brand" onClick={() => handleLinkClick('#home')}>
            Ammar Marikkar
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={activeLink === link.href ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={`nav-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
              onClick={() => handleLinkClick(link.href)}
              className={activeLink === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
