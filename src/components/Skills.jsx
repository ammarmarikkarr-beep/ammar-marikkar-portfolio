import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const TECHNICAL = [
  { label: 'SEO & SEM', value: 90 },
  { label: 'Google Ads', value: 85 },
  { label: 'Meta Ads', value: 85 },
  { label: 'Analytics & Data', value: 80 },
]

const CREATIVE = [
  { label: 'Content Creation', value: 88 },
  { label: 'Social Media Strategy', value: 90 },
  { label: 'Video Editing', value: 82 },
  { label: 'Email Marketing', value: 85 },
]

function Bar({ label, value, visible, delay }) {
  return (
    <div className="bar-row">
      <div className="bar-top">
        <span>{label}</span>
        <span className="bar-pct">{value}%</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{
            width: visible ? `${value}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <p className="eyebrow">What I bring</p>
        <h2 className="skills-heading">My Skills</h2>

        <div className="skills-grid">
          <div className="skills-col">
            <h3 className="skills-col-title">Technical</h3>
            {TECHNICAL.map((s, i) => (
              <Bar key={s.label} {...s} visible={visible} delay={i * 100} />
            ))}
          </div>
          <div className="skills-col">
            <h3 className="skills-col-title">Creative</h3>
            {CREATIVE.map((s, i) => (
              <Bar key={s.label} {...s} visible={visible} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
