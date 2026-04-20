import useInView from '../hooks/useInView'
import { experiences } from '../data/portfolioData'

const DOT_COLORS = { cyan: '#00f5ff', violet: '#bf5fff', pink: '#ff2d78', blue: '#0080ff' }

function TimelineItem({ exp, index }) {
  const [ref, inView] = useInView()
  const dot = DOT_COLORS[exp.color] || '#00f5ff'

  return (
    <div ref={ref} style={{
      position: 'relative', marginBottom: 44,
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateX(-22px)',
      transition: `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`,
    }}>
      {/* Dot */}
      <div style={{
        position: 'absolute', left: -48, top: 4,
        width: 14, height: 14, borderRadius: '50%',
        background: '#050508', border: `2px solid ${dot}`,
        boxShadow: `0 0 12px ${dot}`,
      }}>
        <div style={{ position: 'absolute', inset: 3, borderRadius: '50%', background: dot, boxShadow: `0 0 8px ${dot}` }} />
      </div>

      {/* Card */}
      <div
        style={{ background: 'rgba(10,10,24,0.88)', border: '1px solid rgba(100,120,255,0.10)', borderRadius: 8, padding: 28, transition: 'all 0.3s' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.18)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(0,245,255,0.05)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,120,255,0.10)'; e.currentTarget.style.boxShadow = '' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 5 }}>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 15, fontWeight: 700, color: dot, letterSpacing: 1 }}>{exp.company}</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#7986cb', background: 'rgba(0,245,255,0.05)', padding: '3px 10px', borderRadius: 3, border: '1px solid rgba(100,120,255,0.1)' }}>
            {exp.period} · {exp.location}
          </span>
        </div>
        <div style={{ fontSize: 15, color: '#bf5fff', fontWeight: 600, marginBottom: 14 }}>{exp.role}</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {exp.points.map((pt, i) => (
            <li key={i} style={{ fontSize: 14, color: 'rgba(200,210,255,0.68)', paddingLeft: 18, position: 'relative', lineHeight: 1.65 }}>
              <span style={{ position: 'absolute', left: 0, color: '#00f5ff', fontSize: 11 }}>▸</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 2, padding: '96px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>// 03. experience</p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(26px,5vw,44px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#fff 30%,#00f5ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 56 }}>
          Career Timeline
        </h2>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg,#00f5ff,#bf5fff,transparent)' }} />
          {experiences.map((exp, i) => <TimelineItem key={i} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  )
}
