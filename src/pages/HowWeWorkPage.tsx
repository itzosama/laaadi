import ParticleBackground from '../sections/ParticleBackground'
import CustomCursor from '../sections/CustomCursor'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

export default function HowWeWorkPage() {
  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1, background: '#050505' }}>
        <section style={{ padding: '140px 24px 96px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div
              className="inline-flex items-center"
              style={{ border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 100, padding: '6px 16px' }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#10b981' }}>
                HOW WE WORK
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#fafafa',
                marginTop: 20,
              }}
            >
              What you can expect
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#e7e9ee',
                maxWidth: 720,
                marginTop: 18,
              }}
            >
              A clear scope, fast iterations, and a handoff that your team can run without you being dependent on me.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginTop: 48 }}>
              {[
                {
                  title: 'Scope first',
                  desc: 'We define the exact systems, workflows, and success metrics before any build starts.',
                },
                {
                  title: 'Working demos early',
                  desc: 'You see results quickly, then we refine based on real feedback instead of long delays.',
                },
                {
                  title: 'Security and reliability',
                  desc: 'Access is limited, secrets stay private, and the automation is built to fail safely.',
                },
                {
                  title: 'Documentation + training',
                  desc: 'Your team gets SOPs, walkthroughs, and clear ownership so it doesn’t break after launch.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(16, 185, 129, 0.1)',
                    borderRadius: 20,
                    padding: 28,
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 400, color: '#fafafa' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, color: '#e7e9ee', lineHeight: 1.7, marginTop: 10 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

