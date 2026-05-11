import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current!.children

      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

  const problems = [
    {
      num: '[01]',
      title: 'Endless manual data entry, Human Error',
      desc: 'Your team spends hours copying data between spreadsheets and tools. It\'s tedious, error-prone, and wastes valuable talent on copy-paste work. Small mistakes in manual work lead to big costs and lost clients.'
    },
    {
      num: '[02]',
      title: 'Off-the-shelf tools don\'t fit',
      desc: 'You subscribe to new software, but nobody uses it. Tools get abandoned because they were added on top of workflows instead of being built into them.'
    },
    {
      num: '[03]',
      title: 'Scattered business data',
      desc: 'Information lives in emails, WhatsApp threads, and someone\'s memory. Finding the right data takes hours instead of a single click.'
    },
    {
      num: '[04]',
      title: 'Reports that take all week',
      desc: 'Generating weekly status updates requires pulling data from five different places. By the time the report is ready, the data is already outdated.'
    }
  ]

  return (
    <section id="problem" ref={sectionRef} className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-[rgba(16,185,129,0.3)] text-[#10b981] text-xs tracking-widest font-semibold uppercase mb-6">
            The Problem
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#fafafa] mb-6">
            The work that <span className="font-semibold text-white">consumes your week.</span>
          </h2>
          <p className="text-[#e7e9ee] max-w-2xl font-light text-lg">
            Most businesses try to fix inefficiencies by hiring more people or working longer hours. That is treating the symptom, not the root cause. The real fix is structural.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#080808] hover:border-[rgba(16,185,129,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden group"
            >
              {/* Subtle green gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,185,129,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-mono text-[#10b981] bg-[rgba(16,185,129,0.1)] px-3 py-1 rounded-full border border-[rgba(16,185,129,0.2)]">
                    {p.num}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#fafafa] mb-4 group-hover:text-white transition-colors">{p.title}</h3>
                <p className="text-[#a1a1aa] font-light text-sm leading-relaxed flex-grow">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-[#e7e9ee] font-light text-base leading-relaxed">
            Most teams try to solve this by adding new policies or pushing harder without improving the underlying structure.<br /><br />
            That's just a band-aid. <span className="text-[#10b981] font-medium">The real fix is structural</span>, and that is what we build.
          </p>
        </div>
      </div>
    </section>
  )
}
