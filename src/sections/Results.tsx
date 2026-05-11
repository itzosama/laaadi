import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelectorAll('.stat-item'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { label: 'Time Saved', value: '75%', desc: 'Reduction in manual processing time' },
    { label: 'Accuracy', value: '99.9%', desc: 'Elimination of human entry errors' },
    { label: 'ROI', value: '3x', desc: 'Average return on automation spend' },
    { label: 'Team Capacity', value: '2.4x', desc: 'More output without increasing headcount' },
    { label: 'Human Dependency', value: '-80%', desc: 'Less reliance on memory and manual coordination' },
    { label: 'Operational Noise', value: '-74%', desc: 'Reduced internal back-and-forth and confusion' }
  ]

  return (
    <section id="results" ref={sectionRef} className="py-24 px-6 bg-[rgba(16,185,129,0.02)] border-y border-[rgba(16,185,129,0.1)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="text-5xl md:text-6xl font-bold text-[#10b981] mb-4">{s.value}</div>
              <div className="text-xl font-medium text-[#fafafa] mb-2">{s.label}</div>
              <p className="text-[#e7e9ee] font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
