"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 3.5 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, 5)

      return () => clearTimeout(timeout)
    }
  }, [started, displayText, text])

  return (
    <div className={className}>
      {displayText}
      <motion.span
        className="inline-block w-1 h-[0.9em] bg-[#e0e0e0] ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
    </div>
  )
}
