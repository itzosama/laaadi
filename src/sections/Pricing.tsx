import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelector('.pricing-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-[#fafafa] mb-16 text-center">
          Simple <span className="text-[#10b981]">value-based</span> pricing
        </h2>

        <div className="pricing-card p-12 rounded-3xl border border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#10b981] text-[#050505] px-6 py-2 font-bold text-sm rounded-bl-2xl">
            MOST POPULAR
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-medium text-[#fafafa] mb-2">The AI   Automation Roadmap</h3>
            <p className="text-[#e7e9ee] font-light">A complete diagnostic and execution plan for your business.</p>
          </div>
          <span>Starts from</span>
          <div className="text-5xl font-bold text-[#fafafa] mb-8">

            1,500 <span className="text-xl font-light text-[#e7e9ee]">USD</span>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              'Full workflow audit',
              'Tool selection & cost analysis',
              'ROI projection report',
              'Implementation guide',
              '1 month of support'
            ].map((item, i) => (
              <li key={i} className="flex items-center text-[#e7e9ee] font-light">
                <span className="text-[#10b981] mr-3">✓</span> {item}
              </li>
            ))}
          </ul>

          <a
            href="https://calendly.com/laaadi/15minfree"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-center bg-[#10b981] text-[#050505] rounded-xl hover:rounded-none font-medium hover:bg-[#059669] hover:scale-[1.05] transition-all duration-200"
          >
            Get Started with a Free Call
          </a>
        </div>
      </div>
    </section>
  )
}
