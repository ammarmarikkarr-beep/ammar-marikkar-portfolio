import './Hero.css'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-liquid" aria-hidden="true">
        <span className="liquid liquid-one" />
        <span className="liquid liquid-two" />
        <span className="liquid liquid-three" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="hero-eyebrow"
            variants={item}
          >
            Digital Marketer & Content Creator
          </motion.p>

          <motion.h1
            className="hero-title"
            variants={item}
          >
            Elevate Your <span>Digital Presence</span>
          </motion.h1>

          <motion.p
            className="hero-sub"
            variants={item}
          >
            I help brands grow through data-driven strategies,
            compelling content, and creative campaigns that
            deliver real results.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={item}
          >
            <a href="#work" className="btn hero-btn-primary">
              View My Work <span>→</span>
            </a>

            <a href="#contact" className="btn hero-btn-glass">
              Let&apos;s Connect <span>✉</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
