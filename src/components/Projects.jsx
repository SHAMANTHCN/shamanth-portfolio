import { useState, useRef } from 'react'
import { projects } from '../data/portfolioData'

const GH = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LK = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function ProjectCard({ project, index }) {
  const cardRef           = useRef(null)
  const [tilt,  setTilt]  = useState({ x: 0, y: 0 })
  const [hov,   setHov]   = useState(false)

  function onMove(e) {
    const r  = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2)
    const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2)
    setTilt({ x: dy * -5, y: dx * 5 })
  }

  const iconBtn = {
    width: 36, height: 36,
    border: '1px solid rgba(100,120,255,0.12)',
    borderRadius: 6, background: 'transparent', color: '#7986cb',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none', transition: 'all 0.2s',
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHov(false) }}
      style={{
        background: 'rgba(10,10,24,0.88)',
        border: `1px solid ${hov ? 'rgba(0,245,255,0.24)' : 'rgba(100,120,255,0.10)'}`,
        borderRadius: 10, padding: 30,
        position: 'relative', overflow: 'hidden', cursor: 'default',
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? 'translateY(-8px)' : 'translateY(0)'}`,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s, border-color 0.3s',
        boxShadow: hov ? '0 0 0 1px rgba(0,245,255,0.28), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,245,255,0.07)' : '0 4px 24px rgba(0,0,0,0.28)',
      }}
    >
      {/* gradient overlay on hover */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 10, pointerEvents: 'none',
        background: 'linear-gradient(135deg,rgba(0,245,255,0.07),rgba(191,95,255,0.07),rgba(255,45,120,0.03))',
        opacity: hov ? 1 : 0, transition: 'opacity 0.4s',
      }} />
      {/* top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
        background: 'linear-gradient(90deg,transparent,#00f5ff,#bf5fff,transparent)',
        opacity: hov ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 38, lineHeight: 1 }}>{project.emoji}</span>
        <div style={{ display: 'flex', gap: 9 }}>
          {[{ href: project.github, icon: <GH />, label: 'GitHub' }, { href: project.demo, icon: <LK />, label: 'Demo' }].map(btn => (
            <a key={btn.label} href={btn.href} title={btn.label} target="_blank" rel="noreferrer" style={iconBtn}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00f5ff'; e.currentTarget.style.color = '#00f5ff'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,255,0.28)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,120,255,0.12)'; e.currentTarget.style.color = '#7986cb'; e.currentTarget.style.boxShadow = '' }}
            >{btn.icon}</a>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 5, letterSpacing: 1 }}>{project.title}</div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#bf5fff', marginBottom: 14 }}>{project.subtitle}</div>
        <p style={{ fontSize: 14, color: 'rgba(200,210,255,0.62)', lineHeight: 1.75, marginBottom: 22 }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {project.tech.map(t => (
            <span key={t}
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 1, padding: '4px 9px', borderRadius: 3, background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.13)', color: '#00f5ff', cursor: 'default', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 2, padding: '96px 0', background: 'linear-gradient(180deg,transparent,rgba(255,45,120,0.012) 50%,transparent)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>// 04. projects</p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(26px,5vw,44px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#fff 30%,#00f5ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 56 }}>
          Featured Work
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
