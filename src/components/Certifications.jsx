import useInView from '../hooks/useInView'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" style={{ position: 'relative', zIndex: 2, padding: '96px 0' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>// 05. certifications</p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(26px,5vw,44px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#fff 30%,#00f5ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 56 }}>
          Credentials
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(195px,1fr))', gap: 18 }}>
          {certifications.map((cert, i) => (
            <div key={cert.name}
              style={{
                background: 'rgba(10,10,24,0.88)',
                border: '1px solid rgba(100,120,255,0.10)',
                borderRadius: 8, padding: '30px 18px', textAlign: 'center',
                transition: 'all 0.3s', cursor: 'default',
                position: 'relative', overflow: 'hidden',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(22px)',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(191,95,255,0.42)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(191,95,255,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,120,255,0.10)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              {/* top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#bf5fff,#ff2d78)', opacity: 0.5 }} />
              <span style={{ fontSize: 38, marginBottom: 16, display: 'block' }}>{cert.emoji}</span>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, color: '#fff', marginBottom: 7, lineHeight: 1.4 }}>{cert.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#bf5fff' }}>{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
