'use client'
import { useEffect, useRef } from 'react'

function SmoothScrollWrapper({ children }) {
  const isScrollingRef = useRef(false)
  const targetYRef = useRef(0)
  const currentYRef = useRef(0)
  const rafIdRef = useRef(null)

  useEffect(() => {
    // Initialize positions
    targetYRef.current = window.scrollY
    currentYRef.current = window.scrollY

    const updateScroll = () => {
      const difference = targetYRef.current - currentYRef.current
      const speed = difference * 0.1 // Smoothness factor
      
      if (Math.abs(difference) < 1) {
        currentYRef.current = targetYRef.current
        isScrollingRef.current = false
        window.scrollTo(0, currentYRef.current)
        return
      }
      
      currentYRef.current += speed
      window.scrollTo(0, currentYRef.current)
      
      if (isScrollingRef.current) {
        rafIdRef.current = requestAnimationFrame(updateScroll)
      }
    }

    const handleWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      
      const delta = e.deltaY
      targetYRef.current += delta * 1.2
      
      // Boundary checks
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      targetYRef.current = Math.max(0, Math.min(targetYRef.current, maxScroll))
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true
        rafIdRef.current = requestAnimationFrame(updateScroll)
      }
    }

    const handleKeydown = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
      if (keys.includes(e.key)) {
        e.preventDefault()
        
        let scrollAmount = 0
        switch(e.key) {
          case 'ArrowUp':
            scrollAmount = -100
            break
          case 'ArrowDown':
          case ' ':
            scrollAmount = 100
            break
          case 'PageUp':
            scrollAmount = -window.innerHeight * 0.8
            break
          case 'PageDown':
            scrollAmount = window.innerHeight * 0.8
            break
          case 'Home':
            targetYRef.current = 0
            break
          case 'End':
            targetYRef.current = document.documentElement.scrollHeight - window.innerHeight
            break
        }
        
        if (scrollAmount !== 0) {
          targetYRef.current += scrollAmount
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight
          targetYRef.current = Math.max(0, Math.min(targetYRef.current, maxScroll))
        }
        
        if (!isScrollingRef.current) {
          isScrollingRef.current = true
          rafIdRef.current = requestAnimationFrame(updateScroll)
        }
      }
    }

    const handleResize = () => {
      currentYRef.current = window.scrollY
      targetYRef.current = window.scrollY
    }

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    document.addEventListener('keydown', handleKeydown, { passive: false })
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true })
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', handleResize)
      
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return <>{children}</>
}

export default SmoothScrollWrapper