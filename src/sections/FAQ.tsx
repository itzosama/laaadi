import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'How much does AI implementation cost?',
    a: 'Single automation starts at 1500 USD (~5500 AED). Full systems range from 3500–5000 USD (~13,000–18,000 AED). Larger multi-system builds are scoped after assessment.'
  },
  {
    q: 'Is the assessment really free?',
    a: 'Yes. 15-minute call + operational review. No charge. You also receive a clear breakdown of opportunities.'
  },
  {
    q: 'How long does implementation take?',
    a: 'Simple automations take under a week. Full systems usually take 2–4 weeks depending on complexity. Sometimes it can take up to 6 weeks.'
  },
  {
    q: 'Why not just hire a consultancy?',
    a: 'Consultancies deliver reports. I build systems. You get working infrastructure, not documentation. Moreover, they charge higher prices and your ROI is low compared to ours.'
  },
  {
    q: 'What happens after setup?',
    a: 'Optional ongoing support is available for updates, improvements, and system expansion as your business grows.'
  },
  {
    q: 'Do we need technical staff?',
    a: 'No. I handle setup and train your team to operate everything through simple interfaces.'
  },
  {
    q: 'Do you work on-site?',
    a: 'No. Everything is handled remotely — from setup to deployment and optimization — so the system can be built and maintained without disrupting your operations.'
  },
  {
    q: 'What is AI implementation?',
    a: 'Replacing manual workflows with AI integrated automated systems for tasks like follow-ups, reporting, bookings, operations, tracking and much more.'
  },
  {
    q: 'What does outcome-based guarantee mean?',
    a: 'We define one measurable outcome before starting. If it is not achieved after deployment, the system is refined until it is.'
  },
  {
    q: 'What if we already use AI tools?',
    a: 'We audit existing systems, identify inefficiencies, and replace or optimize what is not working.'
  },
  {
    q: 'What if we already have reports from Consultancy that we want?',
    a: 'Then we go through the reports, verify the gaps, and build the systems based on the reports.'
  }
]

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      const items = sectionRef.current?.querySelectorAll('.faq-item')
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 10 },
          {
            opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{ background: '#0a0a0a', padding: '120px 24px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{ fontFamily: "var(--font-sans)", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.15, color: '#fafafa' }}
        >
          Questions
        </h2>

        <div style={{ marginTop: 64 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item opacity-0"
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}
            >
              <button
                className="w-full flex items-center justify-between text-left"
                style={{ padding: '24px 0' }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 400,
                    color: openIndex === i ? '#10b981' : '#fafafa',
                    paddingRight: 16,
                  }}
                >
                  {faq.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: '#e7e9ee',
                  }}
                >
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? 300 : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#e7e9ee',
                    paddingBottom: 24,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
