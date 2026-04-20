import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { skillCategories } from '../data/portfolioData'

const COLORS = {
  cyan:   { bar: 'linear-gradient(90deg,#0080ff,#00f5ff)', glow: '#00f5ff', accent: '#00f5ff', border: 'rgba(0,245,255,0.18)' },
  violet: { bar: 'linear-gradient(90deg,#ff2d78,#bf5fff)', glow: '#bf5fff', accent: '#bf5fff', border: 'rgba(191,95,255,0.18)' },
  blue:   { bar: 'linear-gradient(90deg,#00f5ff,#0080ff)', glow: '#0080ff', accent: '#0080ff', border: 'rgba(0,128,255,0.18)' },
  pink:   { bar: 'linear-gradient(90deg,#bf5fff,#ff2d78)', glow: '#ff2d78', accent: '#ff2d78', border: 'rgba(255,45,120,0.18)' },
}

function SkillCard({ cat, index, startAnim }) {
  const [filled,  setFilled]  = useState(false)
  const [hovered, setHovered] = useState(false)
  const c = COLORS[cat.color] || COLORS.cyan

  useEffect(() => {
    if (!startAnim) return
    const t = setTimeout(() => setFilled(true), 180 + index * 90)
    return () => clearTimeout(t)
  }, [startAnim, index])

  const card = {
    background: 'rgba(10,10,24,0.88)',
    border: `1px solid ${hovered ? c.border : 'rgba(100,120,255,0.10)'}`,
    borderRadius: 8, padding: 28,
    transform: hovered ? 'translateY(-4px)' : 'none',
    transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
    opacity: startAnim ? 1 : 0,
    transitionDelay: `${index * 0.08}s`,
  }

  /* Tools card (chip grid) */
  if (cat.tools) {
    return (
      <div style={card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg,${c.accent},#bf5fff)`,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left', transition: 'transform 0.4s',
        }} />
        <div style={{ fontSize: 28, marginBottom: 12 }}>{cat.emoji}</div>
        <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: c.accent, textTransform: 'uppercase', marginBottom: 18 }}>{cat.title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {cat.tools.map(tool => (
            <span key={tool}
              style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 1,
                padding: '5px 11px', borderRadius: 4,
                border: 'rgba(255,45,120,0.24) 1px solid',
                color: 'rgba(255,180,210,0.9)', background: 'rgba(255,45,120,0.06)',
                cursor: 'default', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(255,45,120,0.32)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >{tool}</span>
          ))}
        </div>
      </div>
    )
  }

  /* Skills card (progress bars) */
  return (
    <div style={card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg,${c.accent},#bf5fff)`,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.4s',
      }} />
      <div style={{ fontSize: 28, marginBottom: 12 }}>{cat.emoji}</div>
      <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: c.accent, textTransform: 'uppercase', marginBottom: 18 }}>{cat.title}</div>
      {cat.skills.map(({ name, pct }) => (
        <div key={name} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#e8eaf6' }}>{name}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#7986cb' }}>{pct}%</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 2,
              background: c.bar, boxShadow: `0 0 8px ${c.glow}`,
              width: filled ? `${pct}%` : '0%',
              transition: `width 1.1s cubic-bezier(.16,1,.3,1) ${index * 0.04}s`,
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 2, padding: '96px 0' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>// 02. skills</p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(26px,5vw,44px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#fff 30%,#00f5ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 56 }}>
          Technical Arsenal
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(255px,1fr))', gap: 22 }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} startAnim={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
