import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    step: 'PHASE 1',
    title: 'Operational Audit',
    desc: 'We identify bottlenecks, delays, and repetitive manual work.',
    tag: 'Assessment',
    tagType: 'free' as const,
  },
  {
    step: 'PHASE 2',
    title: 'Systems Mapping',
    desc: 'Your workflows, tools, and processes are mapped end-to-end.',
    tag: 'Workflow analysis',
    tagType: 'free' as const,
  },
  {
    step: 'PHASE 3',
    title: 'Automation Blueprint',
    desc: 'A clear execution plan is created around impact and scalability.',
    tag: 'Custom strategy',
    tagType: 'free' as const,
  },
  {
    step: 'PHASE 4',
    title: 'Infrastructure Setup',
    desc: 'Core systems, automations, and integrations are deployed.',
    tag: 'Implementation',
    tagType: 'paid' as const,
  },
  {
    step: 'PHASE 5',
    title: 'AI Integration',
    desc: 'AI workflows are embedded into daily operations.',
    tag: 'AI enablement',
    tagType: 'paid' as const,
  },
  {
    step: 'PHASE 6',
    title: 'Team Alignment',
    desc: 'Teams are trained to operate within the new system.',
    tag: 'Onboarding',
    tagType: 'paid' as const,
  },
  {
    step: 'PHASE 7',
    title: 'Optimization Cycle',
    desc: 'Systems are refined continuously as the business grows.',
    tag: 'Ongoing support',
    tagType: 'optional' as const,
  },
]


const tagStyles = {
  free: { background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80' },
  paid: { background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' },
  optional: { background: 'rgba(138, 143, 152, 0.1)', color: '#e7e9ee' },
}

export default function Roadmap() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

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

      stepsRef.current.forEach((step, i) => {
        if (!step) return
        gsap.fromTo(
          step,
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.15,
            scrollTrigger: { trigger: step, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ background: '#050505', padding: '120px 24px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }} className="text-center">
        {/* Label */}
        <div
          className="inline-flex items-center"
          style={{ border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 100, padding: '6px 16px' }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#10b981' }}>
            HOW IT WORKS
          </span>
        </div>

        <h2
          style={{ fontFamily: "var(--font-sans)", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.15, color: '#fafafa', marginTop: 24 }}
        >
          Your Roadmap
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 640, margin: '64px auto 0', position: 'relative' }}>
        {/* Vertical line */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1))',
          }}
        />

        {steps.map((s, i) => (
          <div
            key={i}
            ref={(el) => { stepsRef.current[i] = el }}
            className="opacity-0"
            style={{ display: 'flex', gap: 24, paddingLeft: 0, paddingBottom: i < steps.length - 1 ? 48 : 0 }}
          >
            {/* Timeline dot */}
            <div className="hidden md:flex flex-col items-center" style={{ minWidth: 24 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: '2px solid #10b981',
                  background: i === 0 ? '#10b981' : '#050505',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Content */}
            <div className="text-left">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#e7e9ee' }}>
                {s.step}
              </span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 400, color: '#fafafa', marginTop: 8 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: '#e7e9ee', marginTop: 8 }}>
                {s.desc}
              </p>
              <span
                className="inline-block mt-3"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  borderRadius: 100,
                  padding: '4px 12px',
                  ...tagStyles[s.tagType],
                }}
              >
                {s.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
