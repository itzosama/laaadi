import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Guarantee() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current!.querySelector('.guarantee-box'),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
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
    <section id="guarantee" ref={sectionRef} className="py-24 px-6 bg-[rgba(16,185,129,0.02)]">
      <div className="max-w-4xl mx-auto">
        <div className="guarantee-box p-12 rounded-3xl border-2 border-[#10b981] bg-[rgba(16,185,129,0.05)] text-center">
          <div className="text-5xl mb-8">🛡️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-6">
            We agree on a goal and work until achieved.
          </h2>
          <p className="text-xl text-[#e7e9ee] font-light leading-relaxed mb-8">
            Before any system is deployed, we define a specific operational target together. Faster response times. Fewer missed leads. Reduced manual work. If the target is not achieved,
            the system keeps evolving until it is.
          </p>
        </div>
      </div>
    </section>
  )
}
