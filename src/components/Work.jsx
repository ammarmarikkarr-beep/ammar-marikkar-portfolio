import { useMemo, useState } from 'react'
import './Work.css'

const CATEGORIES = ['All', 'SEO', 'Paid Ads', 'Social Media', 'Content', 'Email']

const PROJECTS = [
  {
    title: 'Organic Traffic Turnaround',
    category: 'SEO',
    result: '+180% organic traffic',
    desc: 'Full on-page, technical, and content SEO overhaul for an e-commerce brand, rebuilding site structure and keyword strategy from the ground up.',
  },
  {
    title: 'Google Ads Lead Engine',
    category: 'Paid Ads',
    result: '4.2x ROAS',
    desc: 'Restructured search and shopping campaigns with tighter audience segmentation and bid strategy, cutting wasted spend and lifting conversions.',
  },
  {
    title: 'Instagram Growth Sprint',
    category: 'Social Media',
    result: '+65% engagement',
    desc: 'Content calendar redesign, reel strategy, and community engagement tactics to grow reach and turn followers into actual leads.',
  },
  {
    title: 'Meta Ads CPA Reduction',
    category: 'Paid Ads',
    result: '-32% CPA',
    desc: 'Creative testing framework and audience refinement across Meta campaigns, lowering cost per acquisition while scaling spend.',
  },
  {
    title: 'Content Hub Build-Out',
    category: 'Content',
    result: '50K+ monthly reach',
    desc: 'Planned and produced a blog and content hub from scratch, establishing topical authority and consistent organic reach.',
  },
  {
    title: 'Lifecycle Email Revamp',
    category: 'Email',
    result: '+24% open rate',
    desc: 'Rebuilt welcome, abandoned cart, and re-engagement flows with sharper segmentation and subject-line testing.',
  },
]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="work" className="section work">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="work-heading">My Portfolio</h2>

        <div className="work-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filtered.map((p) => (
            <article className="work-card" key={p.title}>
              <div className="work-card-top">
                <span className="work-tag">{p.category}</span>
                <span className="work-result">{p.result}</span>
              </div>
              <h3 className="work-title">{p.title}</h3>
              <p className="work-desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
