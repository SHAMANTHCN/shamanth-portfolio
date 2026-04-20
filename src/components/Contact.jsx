import { useState } from 'react'
import useInView from '../hooks/useInView'
import { personal } from '../data/portfolioData'

const GHIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" fill="none" stroke="rgba(63,74,122,1)" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

/* ── One Piece Straw Hat SVG ── */
function StrawHat({ hovered }) {
  return (
    <svg viewBox="0 0 200 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      {/* Defs: gradients + filters */}
      <defs>
        <radialGradient id="hatGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f5c842"/>
          <stop offset="60%" stopColor="#e8a800"/>
          <stop offset="100%" stopColor="#b87800"/>
        </radialGradient>
        <radialGradient id="hatShade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={hovered ? 'rgba(0,245,255,0.35)' : 'rgba(0,245,255,0.12)'} />
          <stop offset="100%" stopColor="rgba(0,245,255,0)" />
        </radialGradient>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation={hovered ? '4' : '2'} result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <filter id="hatGlow">
          <feGaussianBlur stdDeviation={hovered ? '6' : '2'} result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      {/* Background glow circle */}
      <ellipse cx="100" cy="90" rx="88" ry="75"
        fill="url(#glowGrad)"
        style={{ transition: 'all 0.5s' }}
      />

      {/* Orbit rings */}
      <ellipse cx="100" cy="90" rx="82" ry="68"
        fill="none"
        stroke={hovered ? 'rgba(0,245,255,0.22)' : 'rgba(0,245,255,0.07)'}
        strokeWidth="1"
        strokeDasharray="6 4"
        style={{
          transformOrigin: '100px 90px',
          animation: 'hatOrbit1 12s linear infinite',
          transition: 'stroke 0.4s',
        }}
      />
      <ellipse cx="100" cy="90" rx="70" ry="56"
        fill="none"
        stroke={hovered ? 'rgba(191,95,255,0.18)' : 'rgba(191,95,255,0.06)'}
        strokeWidth="1"
        strokeDasharray="3 5"
        style={{
          transformOrigin: '100px 90px',
          animation: 'hatOrbit2 18s linear infinite reverse',
          transition: 'stroke 0.4s',
        }}
      />

      {/* ── BRIM (wide ellipse) ── */}
      <ellipse cx="100" cy="105" rx="75" ry="18"
        fill="url(#hatGrad)"
        filter="url(#hatGlow)"
        stroke={hovered ? '#00f5ff' : '#d4920a'}
        strokeWidth={hovered ? '1.5' : '1'}
        style={{ transition: 'all 0.4s' }}
      />
      <ellipse cx="100" cy="105" rx="75" ry="18" fill="url(#hatShade)" />

      {/* Brim neon edge glow */}
      <ellipse cx="100" cy="105" rx="75" ry="18"
        fill="none"
        stroke={hovered ? 'rgba(0,245,255,0.7)' : 'rgba(0,245,255,0.0)'}
        strokeWidth="2"
        filter="url(#neonGlow)"
        style={{ transition: 'all 0.5s' }}
      />

      {/* ── CROWN (dome) ── */}
      <path d="M 38 105 Q 40 55 100 50 Q 160 55 162 105"
        fill="url(#hatGrad)"
        filter="url(#hatGlow)"
        stroke={hovered ? '#00f5ff' : '#d4920a'}
        strokeWidth={hovered ? '1.5' : '1'}
        style={{ transition: 'all 0.4s' }}
      />
      <path d="M 38 105 Q 40 55 100 50 Q 160 55 162 105"
        fill="url(#hatShade)"
      />

      {/* Crown neon edge */}
      <path d="M 38 105 Q 40 55 100 50 Q 160 55 162 105"
        fill="none"
        stroke={hovered ? 'rgba(0,245,255,0.65)' : 'rgba(0,245,255,0)'}
        strokeWidth="2"
        filter="url(#neonGlow)"
        style={{ transition: 'all 0.5s' }}
      />

      {/* ── RED BAND ── */}
      <path d="M 44 100 Q 100 92 156 100 Q 100 108 44 100 Z"
        fill={hovered ? '#ff2d78' : '#cc1a1a'}
        filter={hovered ? 'url(#neonGlow)' : 'none'}
        style={{ transition: 'all 0.4s' }}
      />
      {/* Band neon glow */}
      <path d="M 44 100 Q 100 92 156 100"
        fill="none"
        stroke={hovered ? 'rgba(255,45,120,0.8)' : 'rgba(255,45,120,0)'}
        strokeWidth="3"
        filter="url(#neonGlow)"
        style={{ transition: 'all 0.5s' }}
      />

      {/* ── STRAW TEXTURE LINES on crown ── */}
      {[62, 75, 88, 100, 112, 125, 138].map((x, i) => (
        <line key={i}
          x1={x} y1={hovered ? 55 : 57}
          x2={x + (i % 2 === 0 ? -5 : 5)} y2={103}
          stroke={hovered ? 'rgba(0,245,255,0.12)' : 'rgba(0,0,0,0.12)'}
          strokeWidth="0.8"
          style={{ transition: 'all 0.4s' }}
        />
      ))}

      {/* ── STRAW TEXTURE LINES on brim ── */}
      {[-60,-40,-20,0,20,40,60].map((dx, i) => (
        <ellipse key={i}
          cx={100 + dx} cy={105}
          rx={Math.abs(dx) < 20 ? 8 : 6} ry="3"
          fill="none"
          stroke={hovered ? 'rgba(0,245,255,0.1)' : 'rgba(0,0,0,0.1)'}
          strokeWidth="0.7"
          style={{ transition: 'all 0.4s' }}
        />
      ))}

      {/* ── SMILEY FACE (Luffy reference) ── */}
      <g style={{ transition: 'all 0.4s' }}>
        {/* Eyes */}
        <circle cx="88" cy="78" r={hovered ? 3.5 : 3}
          fill={hovered ? '#00f5ff' : '#4a3200'}
          filter={hovered ? 'url(#neonGlow)' : 'none'}
          style={{ transition: 'all 0.3s' }}
        />
        <circle cx="112" cy="78" r={hovered ? 3.5 : 3}
          fill={hovered ? '#00f5ff' : '#4a3200'}
          filter={hovered ? 'url(#neonGlow)' : 'none'}
          style={{ transition: 'all 0.3s' }}
        />
        {/* Smile */}
        <path d="M 88 88 Q 100 97 112 88"
          fill="none"
          stroke={hovered ? '#00f5ff' : '#4a3200'}
          strokeWidth={hovered ? 2.5 : 2}
          strokeLinecap="round"
          filter={hovered ? 'url(#neonGlow)' : 'none'}
          style={{ transition: 'all 0.3s' }}
        />
      </g>

      {/* ── FLOATING PARTICLES on hover ── */}
      {hovered && [
        { cx: 30,  cy: 60,  r: 2,   col: '#00f5ff', delay: '0s'    },
        { cx: 170, cy: 70,  r: 1.5, col: '#bf5fff', delay: '0.3s'  },
        { cx: 50,  cy: 130, r: 2,   col: '#ff2d78', delay: '0.6s'  },
        { cx: 155, cy: 125, r: 1.5, col: '#00f5ff', delay: '0.9s'  },
        { cx: 100, cy: 30,  r: 2,   col: '#bf5fff', delay: '0.15s' },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r}
          fill={p.col}
          filter="url(#neonGlow)"
          style={{ animation: `hatParticle 2s ease-in-out ${p.delay} infinite` }}
        />
      ))}

      {/* ── HOVER TEXT ── */}
      <text x="100" y="148"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        letterSpacing="3"
        fill={hovered ? 'rgba(0,245,255,0.9)' : 'rgba(0,245,255,0)'}
        style={{ transition: 'fill 0.4s', textTransform: 'uppercase' }}
      >
        KING OF PIRATES
      </text>
    </svg>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [hatHovered, setHatHovered] = useState(false)
  const [bounces,    setBounces]    = useState(0)

  function handleHatClick() {
    setBounces(b => b + 1)
  }

  const links = [
    { type: 'text', icon: '📧', label: 'Email',    val: personal.email,             href: `mailto:${personal.email}`, bg: 'rgba(0,245,255,0.09)' },
    { type: 'text', icon: '📱', label: 'Phone',    val: personal.phone,             href: `tel:${personal.phone}`,    bg: 'rgba(191,95,255,0.09)' },
    { type: 'text', icon: '💼', label: 'LinkedIn', val: 'shamanth-c-n-799990312',   href: personal.linkedin,          bg: 'rgba(0,128,255,0.09)' },
    { type: 'node', icon: <GHIcon />, label: 'GitHub', val: 'github.com/SHAMANTHCN', href: personal.github,           bg: 'rgba(255,255,255,0.05)' },
    { type: 'text', icon: '📍', label: 'Location', val: personal.location,          href: null,                       bg: 'rgba(255,45,120,0.09)' },
  ]

  const baseStyle = {
    display: 'block', padding: '15px 18px',
    border: '1px solid rgba(100,120,255,0.10)',
    borderRadius: 6, background: 'rgba(10,10,24,0.88)',
    color: '#e8eaf6', textDecoration: 'none', transition: 'all 0.22s',
  }

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 2, padding: '96px 0' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>// 06. contact</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 72, alignItems: 'center' }}>

          {/* ── LEFT: links ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(-28px)',
            transition: 'opacity 0.6s, transform 0.6s',
          }}>
            <h2 style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 18,
            }}>
              {"Let's "}
              <span style={{ background: 'linear-gradient(135deg,#00f5ff,#bf5fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Build Something
              </span>
              {" Together"}
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(200,210,255,0.6)', lineHeight: 1.85, marginBottom: 36 }}>
              I am actively seeking entry-level cybersecurity analyst roles. Whether you have an
              opportunity, a project, or just want to connect — my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(({ type, icon, label, val, href, bg }) => {
                const inner = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 8, background: bg, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: type === 'node' ? 'inherit' : 20,
                      color: type === 'node' ? '#fff' : 'inherit',
                    }}>{icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#7986cb', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 14, color: '#e8eaf6', fontWeight: 500 }}>{val}</div>
                    </div>
                    {href && <ChevronRight />}
                  </div>
                )
                return href ? (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={baseStyle}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.18)'; e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 0 18px rgba(0,245,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,120,255,0.10)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                  >{inner}</a>
                ) : (
                  <div key={label} style={baseStyle}>{inner}</div>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT: One Piece Straw Hat ── */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 16,
            opacity: inView ? 1 : 0, transition: 'opacity 1s 0.3s',
          }}>
            {/* Hat container */}
            <div
              onMouseEnter={() => setHatHovered(true)}
              onMouseLeave={() => setHatHovered(false)}
              onClick={handleHatClick}
              style={{
                width: 260, height: 220,
                cursor: 'pointer',
                animation: `hatFloat 4s ease-in-out infinite`,
                transform: hatHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)',
                filter: hatHovered ? 'drop-shadow(0 0 18px rgba(0,245,255,0.5)) drop-shadow(0 0 36px rgba(191,95,255,0.25))' : 'drop-shadow(0 0 6px rgba(0,245,255,0.15))',
              }}
            >
              <StrawHat hovered={hatHovered} />
            </div>

            {/* Quote */}
            <div style={{
              textAlign: 'center',
              opacity: hatHovered ? 1 : 0.4,
              transform: hatHovered ? 'translateY(0)' : 'translateY(4px)',
              transition: 'all 0.4s',
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
                color: hatHovered ? '#00f5ff' : '#7986cb',
                transition: 'color 0.4s',
              }}>
                {bounces > 0
                  ? `"I'm gonna be King of the Pirates!" ×${bounces}`
                  : '// hover to activate cyber mode'}
              </p>
            </div>

            {/* Luffy signature lines */}
            <div style={{
              display: 'flex', gap: 8, alignItems: 'center',
              opacity: hatHovered ? 1 : 0,
              transition: 'opacity 0.5s 0.2s',
            }}>
              {['⚡','🏴‍☠️','⚔️'].map((emoji, i) => (
                <span key={i} style={{
                  fontSize: 18,
                  animation: hatHovered ? `hatBounce 0.6s ease ${i * 0.1}s both` : 'none',
                }}>{emoji}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes hatFloat {
          0%,100% { transform: translateY(0px) rotate(-1deg); }
          50%      { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes hatOrbit1 {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes hatOrbit2 {
          from { transform: rotate(0deg);    }
          to   { transform: rotate(-360deg); }
        }
        @keyframes hatParticle {
          0%,100% { opacity: 0.3; transform: translateY(0px);   }
          50%     { opacity: 1;   transform: translateY(-8px);  }
        }
        @keyframes hatBounce {
          0%   { opacity: 0; transform: scale(0) translateY(10px); }
          60%  { transform: scale(1.3) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0);    }
        }
        @keyframes spin    { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes spinrev { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
      `}</style>
    </section>
  )
}
