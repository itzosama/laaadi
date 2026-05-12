import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelector('.founder-content'),
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
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
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-[rgba(16,185,129,0.02)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 founder-content">
            <h2 className="text-3xl md:text-5xl font-light text-[#fafafa] mb-8">
              Why I focus on <span className="text-[#10b981]">GCC businesses</span>
            </h2>
            <p className="text-[#e7e9ee] text-lg font-light leading-relaxed mb-6">
              I've seen too many businesses in the region struggle with manual processes that drain their energy and profit. My mission is to bridge the gap between world-class AI tools and local [...]
            </p>
            <p className="text-[#e7e9ee] text-lg font-light leading-relaxed mb-8">
              Whether you're in Dubai, Riyadh, or Kuwait City, manual work is the same silent killer. I help you eliminate it so you can focus on growth.
            </p>

          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-[rgba(16,185,129,0.05)] rounded-3xl border border-[rgba(16,185,129,0.1)] flex items-center justify-center text-6xl">
            <img src="./laaadi.png" alt="Founder" />
          </div>
        </div>
      </div>
    </section>
  )
}
