'use client'
import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

import { ReactNode } from "react"

function LenisWrapper({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Initialize Lenis with extra smooth settings
    const lenis = new Lenis({
      duration: 2, // Slightly longer duration for smoother effect
      easing: (t) => 1 - Math.pow(1 - t, 4), // Stronger easing for natural motion
      touchMultiplier: 1.2, // Touch ko thoda natural banaya
      infinite: false,
      lerp: 0.08, // Higher lerp => smoother interpolation
      wheelMultiplier: 0.9, // Thoda wheel speed reduce
    })
    
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    document.documentElement.classList.add('lenis')
    document.body.style.scrollBehavior = 'auto'

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (lenisRef.current) lenisRef.current.destroy()
      document.documentElement.classList.remove('lenis')
      document.body.style.scrollBehavior = ''
    }
  }, [])

  return <>{children}</>
}

export default LenisWrapper
