import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.step-card'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We analyze your workflows, systems, and operational bottlenecks.'
    },
    {
      num: '02',
      title: 'Prioritization',
      desc: 'The highest-impact automation opportunities are identified first.'
    },
    {
      num: '03',
      title: 'Architecture',
      desc: 'A scalable system structure is designed around your operations.'
    },
    {
      num: '04',
      title: 'Blueprint',
      desc: 'You receive a clear execution plan with tools, timelines, and scope.'
    },
    {
      num: '05',
      title: 'Deployment',
      desc: 'Systems, automations, and integrations are built and launched.'
    },
    {
      num: '06',
      title: 'Optimization',
      desc: 'Workflows are refined continuously as operations evolve.'
    }
  ]

  return (
    <section id="how-we-work" ref={sectionRef} className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-[#fafafa] mb-16 text-center">
          How I <span className="text-[#10b981]">fix it</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="step-card relative p-8 rounded-2xl border border-[rgba(16,185,129,0.1)] bg-[rgba(16,185,129,0.02)]">
              <div className="text-6xl font-bold text-[rgba(16,185,129,0.1)] absolute top-4 right-8">{s.num}</div>
              <h3 className="text-2xl font-medium text-[#fafafa] mb-4 relative z-10">{s.title}</h3>
              <p className="text-[#e7e9ee] font-light leading-relaxed relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
