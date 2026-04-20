import { useState } from 'react'
import useInView from '../hooks/useInView'
import { aboutTags } from '../data/portfolioData'

export default function About() {
  const [ref, inView]   = useInView()
  const [hovered, setHovered] = useState(false)

  const slideL = {
    opacity:    inView ? 1 : 0,
    transform:  inView ? 'none' : 'translateX(-28px)',
    transition: 'opacity 0.6s, transform 0.6s',
  }
  const slideR = {
    opacity:    inView ? 1 : 0,
    transform:  inView ? 'none' : 'translateX(28px)',
    transition: 'opacity 0.6s 0.15s, transform 0.6s 0.15s',
  }

  return (
    <section id="about" style={{
      position: 'relative', zIndex: 2, padding: '96px 0',
      background: 'linear-gradient(180deg,transparent,rgba(0,245,255,0.012) 50%,transparent)',
    }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#00f5ff', marginBottom: 10, opacity: 0.8 }}>
          // 01. about me
        </p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(26px,5vw,44px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#fff 30%,#00f5ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 56 }}>
          Who I Am
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 56, alignItems: 'center' }}>

          {/* ── Avatar ── */}
          <div style={{ ...slideL, position: 'relative', maxWidth: 300 }}>
            {/* Glow aura */}
            <div style={{
              position: 'absolute',
              inset: hovered ? -14 : -4,
              borderRadius: 16,
              background: hovered
                ? 'linear-gradient(135deg,#00f5ff,#bf5fff,#ff2d78)'
                : 'linear-gradient(135deg,rgba(0,245,255,0.28),rgba(191,95,255,0.28))',
              opacity: hovered ? 0.48 : 0.16,
              filter: hovered ? 'blur(16px)' : 'blur(8px)',
              transition: 'all 0.5s',
              zIndex: -1,
            }} />

            {/* Frame */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: '100%', aspectRatio: '1/1', maxWidth: 300,
                borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer',
                border: hovered ? '2px solid rgba(191,95,255,0.8)' : '2px solid rgba(0,245,255,0.28)',
                boxShadow: hovered ? '0 0 50px rgba(191,95,255,0.5)' : '0 0 18px rgba(0,245,255,0.1)',
                transition: 'border-color 0.4s, box-shadow 0.5s',
              }}
            >
              {/* Normal */}
              <img src="/avatar-normal.png" alt="Shamanth C N"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  opacity: hovered ? 0 : 1,
                  transform: hovered ? 'scale(1.08)' : 'scale(1)',
                  transition: 'opacity 0.5s, transform 0.6s' }} />

              {/* Hover */}
              <img src="/avatar-hover.png" alt="Shamanth — Cyber Mode"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? 'scale(1)' : 'scale(0.94)',
                  transition: 'opacity 0.5s, transform 0.6s' }} />

              {/* Scanlines on hover */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,245,255,0.03) 3px,rgba(0,245,255,0.03) 4px)',
                opacity: hovered ? 1 : 0, transition: 'opacity 0.4s',
              }} />

              {/* Hover label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '36px 14px 14px',
                background: 'linear-gradient(transparent,rgba(5,5,8,0.9))',
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.4s', textAlign: 'center',
              }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#00f5ff' }}>
                  // cyber mode activated
                </span>
              </div>
            </div>

            {/* Corner brackets */}
            {[
              { top: -8,    left: -8,   borderWidth: '2px 0 0 2px' },
              { top: -8,    right: -8,  borderWidth: '2px 2px 0 0' },
              { bottom: -8, left: -8,   borderWidth: '0 0 2px 2px' },
              { bottom: -8, right: -8,  borderWidth: '0 2px 2px 0' },
            ].map((s, i) => (
              <span key={i} style={{
                position: 'absolute', width: 20, height: 20,
                borderColor: hovered ? '#bf5fff' : '#00f5ff',
                borderStyle: 'solid', opacity: 0.8,
                transition: 'border-color 0.4s', ...s,
              }} />
            ))}
          </div>

          {/* ── Text ── */}
          <div style={slideR}>
            <p style={{ fontSize: 17, color: 'rgba(200,210,255,0.74)', lineHeight: 1.9, marginBottom: 18 }}>
              I am a dynamic MCA graduate with hands-on cybersecurity experience in threat detection,
              vulnerability assessment, and secure system design. Previously worked as a{' '}
              <strong style={{ color: '#00f5ff', fontWeight: 600 }}>Payment Risk &amp; Compliance Specialist</strong>,
              conducting cybersecurity threat analysis, AML/KYC vulnerability assessments, and forensic audit reporting.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(200,210,255,0.74)', lineHeight: 1.9, marginBottom: 34 }}>
              My passion bridges offensive security and data intelligence — from identifying XSS vulnerabilities
              through penetration testing to building blockchain-based tamper-proof document systems using Ethereum and Web3.js.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {aboutTags.map(tag => (
                <span key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 1,
                    padding: '6px 13px', borderRadius: 3,
                    border: '1px solid rgba(0,245,255,0.18)', color: '#00f5ff',
                    background: 'rgba(0,245,255,0.04)', cursor: 'default', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.1)'; e.currentTarget.style.transform = 'scale(1.07)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,255,0.22)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.04)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
