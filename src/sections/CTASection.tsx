import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{ background: '#050505', padding: '120px 24px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }} className="text-center">
        <h2
          style={{ fontFamily: "var(--font-sans)", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.15, color: '#fafafa' }}
        >
          Every week you wait is another week of{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#10b981' }}>grunt work.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.6,
            color: '#e7e9ee',
            maxWidth: 520,
            margin: '16px auto 0',
          }}
        >
          One 15-minute call. A custom roadmap built for your business. No commitment, no invoice, no follow-up pressure.
        </p>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center" style={{ gap: 24, marginTop: 32 }}>
          {[
            { icon: 'check', text: 'Free, always' },
            { icon: 'clock', text: '15 minutes' },
            { icon: 'shield', text: 'Outcome guaranteed' },
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: '#e7e9ee' }}>
              {item.icon === 'check' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {item.icon === 'clock' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              )}
              {item.icon === 'shield' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              )}
              {item.text}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://calendly.com/laaadi/15minfree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#10b981] text-[#050505] hover:bg-[#059669] hover:scale-[1.05] rounded-xl hover:rounded-none transition-all duration-200"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 500,
            padding: '16px 32px',
            marginTop: 32,
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.1)',
          }}
        >
          Get My Free Automation Map
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  )
}
