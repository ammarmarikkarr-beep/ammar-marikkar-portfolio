import './Hero.css'

const TICKER = [
  { label: 'CTR', value: '+38%', up: true },
  { label: 'ROAS', value: '5.1x', up: true },
  { label: 'CPA', value: '-32%', up: false },
  { label: 'Organic Traffic', value: '+180%', up: true },
  { label: 'Email Open Rate', value: '+24%', up: true },
  { label: 'Engagement', value: '+65%', up: true },
  { label: 'CPC', value: '-21%', up: false },
  { label: 'Conversions', value: '+210%', up: true },
]

export default function Hero() {
  const loopItems = [...TICKER, ...TICKER]

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow">Digital Marketing Executive · Dubai, UAE</p>

        <h1 className="hero-title">
          I turn marketing budgets
          <br />
          into <span className="hero-accent">measurable growth.</span>
        </h1>

        <p className="hero-sub">
          I'm Ammar Marikkar — I plan, run, and optimize SEO, paid ads, social, content,
          email, and video campaigns, using data at every step to drive real ROI.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-ghost">Let's connect</a>
        </div>
      </div>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {loopItems.map((item, i) => (
            <div className="ticker-chip" key={i}>
              <span className="ticker-label">{item.label}</span>
              <span className={`ticker-value ${item.up ? 'up' : 'down'}`}>
                {item.up ? '▲' : '▼'} {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
