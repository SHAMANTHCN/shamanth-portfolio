import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [pct,     setPct]     = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start    = performance.now()
    const duration = 1800
    let rafId

    function step(now) {
      const p = Math.min(((now - start) / duration) * 100, 100)
      setPct(p)
      if (p < 100) {
        rafId = requestAnimationFrame(step)
      } else {
        setTimeout(() => setVisible(false), 350)
      }
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#050508',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 28,
      opacity: pct >= 100 ? 0 : 1,
      transition: pct >= 100 ? 'opacity 0.4s' : 'none',
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(52px,11vw,84px)',
          fontWeight: 900, letterSpacing: 10,
          background: 'linear-gradient(135deg, #00f5ff, #bf5fff)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>SCN</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: 4,
          textTransform: 'uppercase', color: '#7986cb', marginTop: 8,
        }}>
          initialising portfolio.exe
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: 220 }}>
        <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${pct}%`, borderRadius: 2,
            background: 'linear-gradient(90deg, #00f5ff, #bf5fff)',
            boxShadow: '0 0 10px #00f5ff',
            transition: 'width 0.05s linear',
          }} />
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: '#3f4a7a',
          letterSpacing: 2, marginTop: 6, textAlign: 'right',
        }}>
          {Math.floor(pct)}%
        </div>
      </div>

      {/* Scanlines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.04) 2px,rgba(0,0,0,.04) 4px)',
      }} />
    </div>
  )
}
