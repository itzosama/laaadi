import { useEffect, useRef, useState, type MutableRefObject } from 'react'
import { useLocation, useNavigate } from 'react-router'
import gsap from 'gsap'

interface NavigationProps {
  lenisRef?: MutableRefObject<any>
}

export default function Navigation({ lenisRef }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#') && location.pathname !== '/') {
      navigate(`/${href}`)
      return
    }

    const lenis = lenisRef?.current
    if (lenis) {
      lenis.scrollTo(href, { offset: -72 })
      return
    }

    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (mobileOpen && overlayRef.current && linksRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      const links = linksRef.current.querySelectorAll('a')
      gsap.fromTo(
        links,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
      )
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between"
        style={{
          background: 'rgba(5, 5, 5, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.06)',
          padding: '0 48px',
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          className="flex items-center"
        >
          <img src="./laaadi.png" alt="laaadi" style={{ height: 34, width: 'auto' }} />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              className="text-[#e7e9ee] hover:text-[#fafafa] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/laaadi/15minfree"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-[#10b981] text-[#050505] hover:bg-[#059669] hover:scale-[1.05] rounded-xl hover:rounded-none transition-all duration-200"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 500,
            padding: '12px 24px',
          }}
        >
          Book Free Assessment
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ gap: 6, width: 32, height: 32 }}
          aria-label="Toggle menu"
        >
          <span
            className="block bg-[#fafafa] transition-all duration-300"
            style={{
              width: 24,
              height: 2,
              transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block bg-[#fafafa] transition-all duration-300"
            style={{
              width: 24,
              height: 2,
              transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
          style={{ background: 'rgba(5, 5, 5, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div ref={linksRef} className="flex flex-col items-center" style={{ gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="text-[#fafafa]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 28,
                  fontWeight: 300,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/laaadi/15minfree"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center bg-[#10b981] text-[#050505] hover:scale-[1.05] rounded-xl hover:rounded-none transition-all duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 500,
                padding: '16px 32px',
              }}
            >
              Book Free Assessment
            </a>
          </div>
        </div>
      )}
    </>
  )
}
