import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo-bg" aria-hidden="true">
        <img src="/images/ammar-photo.jpg" alt="" />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your <span>Digital Presence</span>
          </h1>

          <p className="hero-role">
            Digital Marketer & Content Creator
          </p>

          <p className="hero-sub">
            I help brands grow through data-driven strategies, compelling content,
            and creative campaigns that deliver real results.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn hero-btn-primary">
              View My Work <span>→</span>
            </a>

            <a href="#contact" className="btn hero-btn-glass">
              Let&apos;s Connect <span>✉</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
