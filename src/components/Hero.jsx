import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-liquid" aria-hidden="true">
        <span className="liquid liquid-one" />
        <span className="liquid liquid-two" />
        <span className="liquid liquid-three" />
      </div>

      <div className="container hero-container">
        <div className="hero-left">
          <p className="hero-eyebrow">Digital Marketer & Content Creator</p>

          <h1 className="hero-title">
            Elevate Your <span>Digital Presence</span>
          </h1>

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

        <div className="hero-right">
          <img
            src="/images/ammar-photo.jpg"
            alt="Ammar Marikkar"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  )
}
