"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const HeroCanvas = dynamic(() => import("./hero-canvas").then((mod) => mod.HeroCanvas), {
  ssr: false,
})

export function HeroBackground() {
  const [isReady, setIsReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [supportsWebGL, setSupportsWebGL] = useState(true)

  useEffect(() => {
    const checkMobile = window.innerWidth < 768
    setIsMobile(checkMobile)

    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        return !!gl
      } catch (e) {
        return false
      }
    }
    setSupportsWebGL(checkWebGL())

    // Start particles after preloader completes (3 seconds)
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isReady || isMobile || !supportsWebGL) return null

  return (
    <div className="absolute inset-0 z-0">
      <HeroCanvas />
    </div>
  )
}
