"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [logoLanded, setLogoLanded] = useState(false)
  const [revealComplete, setRevealComplete] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set dimensions on client side only
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: revealComplete ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        if (revealComplete) {
          onComplete()
        }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{
          clipPath: "circle(150% at 60px 44px)",
        }}
        animate={{
          clipPath: logoLanded ? "circle(0% at 60px 44px)" : "circle(150% at 60px 44px)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        onAnimationComplete={() => {
          if (logoLanded) {
            setRevealComplete(true)
          }
        }}
        style={{
          filter: logoLanded ? "blur(40px)" : "blur(0px)",
          transition: "filter 1.2s ease-out",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: logoLanded ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          background: "radial-gradient(circle at 60px 44px, transparent 0%, rgba(0,0,0,0.8) 30%, black 60%)",
        }}
      />

      {dimensions.width > 0 && (
        <motion.div
          className="relative z-10"
          initial={{
            rotate: 0,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          animate={{
            rotate: [0, 720],
            x: [0, 0, -dimensions.width / 2 + 60],
            y: [0, 0, -dimensions.height / 2 + 44],
            scale: [1, 1, 0.3],
            filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.6, 1],
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          onAnimationComplete={() => setLogoLanded(true)}
        >
          <Image
            src="/logo.png"
            alt="MM Yazılım Logo"
            width={160}
            height={160}
            className="w-40 h-40 object-contain"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  )
}
