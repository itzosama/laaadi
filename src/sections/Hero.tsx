import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface HeroProps {
  lenisRef: any
}

export default function Hero({ lenisRef }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRowRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .fromTo(headlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
      .fromTo(ctaRowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .fromTo(trustRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .fromTo(scrollHintRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.2)

    return () => { tl.kill() }
  }, [])

  const cyclingTextRef = useRef<HTMLSpanElement>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["I find it.", "I analyze it.", "I solve it."]

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length
      
      const tl = gsap.timeline()
      tl.to(cyclingTextRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentWordIndex(nextIndex)
          gsap.set(cyclingTextRef.current, { y: -20, opacity: 0 })
        }
      }).to(cyclingTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [currentWordIndex])

  const scrollTo = (href: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(href, { offset: -72 })
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: '100vh', zIndex: 1, padding: '0 24px' }}
    >
      {/* Badge */}
      <div
        ref={labelRef}
        className="inline-flex items-center opacity-0"
        style={{
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: 100,
          padding: '8px 20px',
          marginBottom: 32,
          marginTop: 72,
        }}
      >
        <span
          className="inline-block rounded-full bg-[#10b981] mr-3"
          style={{ width: 6, height: 6 }}
        />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#10b981',
          }}
        >
          For businesses with less than 50 employees
        </span>
      </div>

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="opacity-0"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: '#fafafa',
          maxWidth: 800,
        }}
      >
        Inefficiencies is costing your business
        <br />
        hours every week.
        <br />
        <em style={{ fontStyle: 'italic', fontWeight: 700 }}>
          {' '}
          <span 
            className="inline-block relative overflow-hidden text-[#10b981]" 
            style={{ verticalAlign: 'bottom', height: '1.2em', minWidth: '4.5ch' }}
          >
            <span 
              ref={cyclingTextRef} 
              className="inline-block"
            >
              {words[currentWordIndex]}
            </span>
          </span>
        </em>
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="opacity-0"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.6,
          color: '#e7e9ee',
          maxWidth: 600,
          marginTop: 24,
        }}
      >
        Free 15-minute call. I map every hour your team loses to manual work and give you a written automation roadmap with specific tools, real costs, and real time savings. The report is yours whether you hire me or not.
      </p>

      {/* CTA Row */}
      <div
        ref={ctaRowRef}
        className="flex flex-col sm:flex-row items-center opacity-0"
        style={{ gap: 16, marginTop: 40 }}
      >
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
          }}
        >
          Get My Free Automation Map
          <span className="ml-2">→</span>
        </a>
        <a
          href="https://wa.me/97125644038"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-[#10b981] hover:border-[rgba(16, 185, 129,0.5)] hover:bg-[rgba(16, 185, 129,0.05)] hover:scale-[1.05] rounded-xl hover:rounded-none transition-all duration-200"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 500,
            padding: '16px 32px',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            background: 'rgba(5, 5, 5, 0.6)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Message on WhatsApp
        </a>
      </div>

      {/* Trust indicators */}
      <div
        ref={trustRef}
        className="flex flex-wrap items-center justify-center opacity-0"
        style={{ gap: 24, marginTop: 24 }}
      >
        {['Free assessment', 'No commitment', '15 minutes'].map((item) => (
          <span
            key={item}
            className="inline-flex items-center"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: '#e7e9ee',
            }}
          >
            <span className="text-[#4ade80] mr-2">✓</span>
            {item}
          </span>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="flex flex-col items-center opacity-0"
        style={{ marginTop: 32, marginBottom: 48 }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: '#e7e9ee',
          }}
        >
          Want to know how I work?{' '}
          <a
            href="#how-it-works"
            onClick={(e) => { e.preventDefault(); scrollTo('#how-it-works') }}
            className="text-[#10b981] underline hover:no-underline transition-all"
          >
            See my process
          </a>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="mt-3 text-[#e7e9ee]"
          style={{
            animation: 'bounce 2s ease infinite',
          }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}</style>
      </div>
    </section>
  )
}
