import { useEffect, useState } from 'react'
import { personal, typedRoles, heroStats } from '../data/portfolioData'

/* ── Typing hook ───────────────────────────────── */
function useTyped(roles) {
  const [text,    setText]    = useState('')
  const [ri,      setRi]      = useState(0)
  const [ci,      setCi]      = useState(0)
  const [deleting,setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[ri]
    let t
    if (!deleting) {
      if (ci < role.length) t = setTimeout(() => setCi(c => c + 1), 78)
      else                   t = setTimeout(() => setDeleting(true), 2000)
    } else {
      if (ci > 0) t = setTimeout(() => setCi(c => c - 1), 38)
      else { setDeleting(false); setRi(r => (r + 1) % roles.length) }
    }
    setText(role.slice(0, ci))
    return () => clearTimeout(t)
  }, [ci, deleting, ri, roles])

  return text
}

export default function Hero() {
  const typed = useTyped(typedRoles)
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t) }, [])

  function fade(delay) {
    return {
      opacity:    ready ? 1 : 0,
      transform:  ready ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
    }
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 62, position: 'relative', zIndex: 2,
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
          gap: 60, alignItems: 'center',
        }}>

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div style={{ ...fade(0.2), display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 3,
              textTransform: 'uppercase', color: '#00f5ff',
              border: '1px solid rgba(0,245,255,0.28)', padding: '6px 15px', borderRadius: 2, marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f5ff',
                boxShadow: '0 0 8px #00f5ff', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 style={{ ...fade(0.35),
              fontFamily: "'Orbitron',sans-serif",
              fontSize: 'clamp(38px,7vw,66px)', fontWeight: 900, lineHeight: 1, marginBottom: 6,
            }}>
              <span style={{ display: 'block', background: 'linear-gradient(135deg,#fff 30%,#00f5ff 60%,#bf5fff 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Shamanth
              </span>
              <span style={{ display: 'block', fontSize: '0.48em',
                color: 'rgba(255,255,255,0.26)', WebkitTextFillColor: 'rgba(255,255,255,0.26)' }}>
                C N
              </span>
            </h1>

            {/* Typed role */}
            <p style={{ ...fade(0.5),
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 'clamp(13px,2vw,17px)', color: '#bf5fff', marginBottom: 22, minHeight: 26,
            }}>
              {typed}
              <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#00f5ff',
                verticalAlign: 'text-bottom', marginLeft: 2, animation: 'blink 1s step-end infinite' }} />
            </p>

            {/* Tagline */}
            <p style={{ ...fade(0.65),
              fontSize: 16, color: 'rgba(200,210,255,0.68)', lineHeight: 1.85, maxWidth: 500, marginBottom: 36,
            }}>
              {personal.tagline}
            </p>

            {/* Buttons */}
            <div style={{ ...fade(0.8), display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#projects" style={{
                fontFamily: "'Orbitron',sans-serif", fontSize: 11, fontWeight: 600,
                letterSpacing: 2, textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 3,
                background: 'linear-gradient(135deg,#00f5ff,#0080ff)', color: '#050508',
                boxShadow: '0 0 24px rgba(0,245,255,0.32)', transition: 'all 0.3s', display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,245,255,0.58)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.32)' }}
              >View Projects</a>

              <a href="#contact" style={{
                fontFamily: "'Orbitron',sans-serif", fontSize: 11, fontWeight: 600,
                letterSpacing: 2, textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 3,
                background: 'transparent', color: '#bf5fff',
                border: '1px solid rgba(191,95,255,0.45)',
                boxShadow: '0 0 14px rgba(191,95,255,0.12)', transition: 'all 0.3s', display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(191,95,255,0.45)'; e.currentTarget.style.borderColor = '#bf5fff' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 14px rgba(191,95,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(191,95,255,0.45)' }}
              >Contact Me</a>
            </div>
          </div>

          {/* ── RIGHT: Terminal ── */}
          <div style={fade(0.8)}>
            <div style={{
              background: 'rgba(10,10,24,0.88)',
              border: '1px solid rgba(0,245,255,0.15)',
              borderRadius: 8, overflow: 'hidden',
              boxShadow: '0 0 60px rgba(0,245,255,0.06), 0 24px 60px rgba(0,0,0,0.55)',
            }}>
              {/* Title bar */}
              <div style={{
                background: 'rgba(0,245,255,0.04)', padding: '11px 15px',
                display: 'flex', alignItems: 'center', gap: 7,
                borderBottom: '1px solid rgba(100,120,255,0.1)',
              }}>
                {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
                  <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
                ))}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#7986cb', margin: '0 auto', letterSpacing: 1 }}>
                  analyst.json
                </span>
              </div>
              {/* Body */}
              <div style={{ padding: 26, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, lineHeight: 2.1 }}>
                <span style={{ color: 'rgba(200,210,255,0.35)' }}>{'{'}</span><br/>
                &nbsp;&nbsp;<span style={{ color: '#bf5fff' }}>"name"</span><span style={{ color: 'rgba(200,210,255,0.35)' }}>:</span> <span style={{ color: '#f8c555' }}>"{personal.name}"</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: '#bf5fff' }}>"role"</span><span style={{ color: 'rgba(200,210,255,0.35)' }}>:</span> <span style={{ color: '#f8c555' }}>"Cybersecurity Analyst"</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: '#bf5fff' }}>"location"</span><span style={{ color: 'rgba(200,210,255,0.35)' }}>:</span> <span style={{ color: '#f8c555' }}>"Bangalore, IN"</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: '#bf5fff' }}>"focus"</span><span style={{ color: 'rgba(200,210,255,0.35)' }}>:</span> <span style={{ color: 'rgba(200,210,255,0.35)' }}>["Threat Analysis","AML/KYC","PenTest"]</span>,<br/>
                &nbsp;&nbsp;<span style={{ color: '#bf5fff' }}>"status"</span><span style={{ color: 'rgba(200,210,255,0.35)' }}>:</span> <span style={{ color: '#00f5ff' }}>AVAILABLE</span><br/>
                <span style={{ color: 'rgba(200,210,255,0.35)' }}>{'}'}</span>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginTop: 14, background: 'rgba(100,120,255,0.1)', borderRadius: 6, overflow: 'hidden' }}>
              {heroStats.map(({ num, label }) => (
                <div key={label} style={{ background: 'rgba(10,10,24,0.88)', padding: 18, textAlign: 'center' }}>
                  <span style={{ display: 'block', fontFamily: "'Orbitron',sans-serif", fontSize: 24, fontWeight: 800, color: '#00f5ff', textShadow: '0 0 14px rgba(0,245,255,0.38)' }}>{num}</span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#7986cb', marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px #00f5ff} 50%{opacity:.5;box-shadow:0 0 3px #00f5ff} }
      `}</style>
    </section>
  )
}
