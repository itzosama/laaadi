import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleBackground from '../sections/ParticleBackground'
import CustomCursor from '../sections/CustomCursor'
import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Results from '../sections/Results'
import Review from '../sections/Review'
import Roadmap from '../sections/Roadmap'
import HowWeWorkSection from '../sections/HowWeWorkSection'
import Guarantee from '../sections/Guarantee'
import Pricing from '../sections/Pricing'
import Founder from '../sections/Founder'
import FAQ from '../sections/FAQ'
import CTASection from '../sections/CTASection'
import BlogCards from '../sections/BlogCards'
import Footer from '../sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!location.hash) return

    const hash = location.hash
    const t = window.setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(hash, { offset: -72 })
        return
      }
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)

    return () => window.clearTimeout(t)
  }, [location.hash])

  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Navigation lenisRef={lenisRef} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero lenisRef={lenisRef} />
        <Problem />
        <Results />
        {/* <Review /> */}
        <Roadmap />
        <HowWeWorkSection />
        <Guarantee />
        <Pricing />
        <Founder />
        <FAQ />
        <CTASection />
        {/* <BlogCards /> */}
        <Footer />
      </main>
    </>
  )
}
