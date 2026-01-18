"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface LenisContextType {
  lenis: any | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenis = () => useContext(LenisContext)

interface SmoothScrollWrapperProps {
  children: ReactNode
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const [lenis, setLenis] = useState<any>(null)

  useEffect(() => {
    let lenisInstance: any = null

    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      setLenis(lenisInstance)

      function raf(time: number) {
        lenisInstance?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisInstance?.destroy()
    }
  }, [])

  return <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
}
