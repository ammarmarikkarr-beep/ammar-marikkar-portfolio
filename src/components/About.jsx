import useReveal from '../hooks/useReveal'
import './About.css'

const SPECIALTIES = [
  'Search Engine Optimization (SEO)',
  'Google & Meta Ads (PPC)',
  'Social Media Strategy',
  'Content Marketing',
  'Email Marketing',
  'Video Editing & Production',
]

const STATS = [
  { value: '30+', label: 'Campaigns Run' },
  { value: '15+', label: 'Brands Worked With' },
  { value: '2–3', label: 'Years Experience' },
  { value: '4.2x', label: 'Avg. ROAS Delivered' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="eyebrow">About me</p>
        <h2 className="about-heading">
          Marketing that's judged by
          <br />
          numbers, not opinions.
        </h2>

        <div className="about-grid reveal" ref={ref}>
          <div className="about-text">
            <p>
              I'm a digital marketing executive with 2–3 years of hands-on experience
              running SEO, paid advertising, social media, content, and email campaigns
              for brands that need real, trackable growth — not vanity metrics.
            </p>
            <p>
              I work end-to-end: research and strategy, creative execution, campaign
              setup, and the analytics that tell us what actually worked. Every project
              is built around one question — did it move the number that matters?
            </p>

            <div className="specialties">
              {SPECIALTIES.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
