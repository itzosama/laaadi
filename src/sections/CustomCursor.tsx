import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let isHovering = false
    let activeEl: HTMLElement | null = null

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })

      if (!isHovering) {
        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          width: 32,
          height: 32,
          borderRadius: '25%',
          backgroundColor: 'transparent',
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const clickable = target.closest('a, button, [role="button"]') as HTMLElement

      if (clickable) {
        isHovering = true
        activeEl = clickable
        const rect = activeEl.getBoundingClientRect()

        // Hide the dot
        gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 })

        // Morph the circle into a square matching the button's size
        gsap.to(follower, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width + 25,
          height: rect.height + 10,
          borderRadius: '0px',
          backgroundColor: 'rgba(16, 185, 129, 0.05)',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const clickable = target.closest('a, button, [role="button"]') as HTMLElement

      if (clickable) {
        isHovering = false
        activeEl = null

        // Bring back the dot
        gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 })

        // The follower will go back to the circle on the next mouseMove event
      }
    }

    const onScroll = () => {
      if (isHovering && activeEl) {
        const rect = activeEl.getBoundingClientRect()
        gsap.to(follower, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          duration: 0
        })
      }
    }

    const onMouseDown = () => {
      if (!isHovering) {
        gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 })
      } else {
        gsap.to(follower, { scale: 0.95, duration: 0.2 })
      }
    }

    const onMouseUp = () => {
      if (!isHovering) {
        gsap.to([cursor, follower], { scale: 1, duration: 0.2 })
      } else {
        gsap.to(follower, { scale: 1, duration: 0.2 })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#10b981] rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 border border-[#10b981] pointer-events-none z-[9998]"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 32,
          height: 32,
          borderRadius: '50%',
          opacity: 0.5
        }}
      />
    </>
  )
}
