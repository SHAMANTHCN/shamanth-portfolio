import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'          },
  { label: 'Exp',      href: '#experience'      },
  { label: 'Projects', href: '#projects'        },
  { label: 'Certs',    href: '#certifications'  },
  { label: 'Contact',  href: '#contact'         },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      let cur = ''
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 62, padding: '0 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: scrolled ? 'rgba(5,5,8,0.96)' : 'rgba(5,5,8,0.7)',
    backdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid rgba(0,245,255,0.18)' : '1px solid rgba(100,120,255,0.10)',
    transition: 'all 0.3s',
  }

  return (
    <>
      <nav style={nav}>
        <a href="#hero" style={{
          fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 800,
          color: '#00f5ff', letterSpacing: 2,
          textShadow: '0 0 20px rgba(0,245,255,0.45)',
        }}>SCN</a>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none' }} className="desk-nav">
          {LINKS.map(({ label, href }) => {
            const isActive = active === href.slice(1)
            return (
              <li key={href}>
                <a href={href} style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                  color: isActive ? '#00f5ff' : '#7986cb',
                  padding: '7px 13px', borderRadius: 4,
                  transition: 'color 0.2s', position: 'relative', display: 'block',
                }}>
                  {label}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: 4, left: 13, right: 13,
                      height: 1, background: '#00f5ff', borderRadius: 1, display: 'block',
                    }} />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="burger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2, background: '#00f5ff', borderRadius: 1,
              transition: 'all 0.3s',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 62, left: 0, right: 0, zIndex: 99,
          background: 'rgba(5,5,8,0.97)',
          borderBottom: '1px solid rgba(0,245,255,0.14)',
          padding: '10px 24px',
        }}>
          {LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{
              display: 'block',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
              color: '#7986cb', padding: '12px 8px',
            }}>{label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .burger    { display: flex !important; }
        }
      `}</style>
    </>
  )
}
