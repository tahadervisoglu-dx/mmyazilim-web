"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showShockwave, setShowShockwave] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile ? ["start end", "end start"] : ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const manifestoText =
    "Dijital gürültünün ortasında, sessizce mükemmelliği inşa ediyoruz. Biz sadece kod yazmıyoruz; karmaşık fikirleri, akıcı deneyimlere dönüştürüyoruz."

  const words = manifestoText.split(" ")

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.7 && !showShockwave) {
        setShowShockwave(true)
        setTimeout(() => setShowShockwave(false), 800)
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, showShockwave])

  const progressBarWidth = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"])

  return (
    <section ref={sectionRef} className="relative md:h-[220vh] h-auto bg-[#0a0a0a]" id="manifesto">
      <div className="md:sticky md:top-0 md:h-screen overflow-hidden flex items-center justify-center px-6 py-20 md:py-0">
        {showShockwave && (
          <>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-cyan-500/50" />
            </motion.div>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-400/30" />
            </motion.div>
          </>
        )}

        <motion.div
          className="max-w-4xl w-full"
          animate={
            showShockwave
              ? {
                  x: [0, -4, 4, -4, 4, 0],
                  y: [0, 2, -2, 2, -2, 0],
                  filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          <p className="text-2xl md:text-3xl lg:text-5xl leading-relaxed text-center">
            {words.map((word, index) => {
              const start = (index / words.length) * 0.65
              const end = ((index + 1) / words.length) * 0.65

              return <Word key={index} word={word} progress={smoothProgress} start={start} end={end} />
            })}
          </p>
        </motion.div>

        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-0.5 bg-zinc-800/50 rounded-full overflow-hidden">
          <motion.div
            style={{ width: progressBarWidth }}
            className="h-full bg-gradient-to-r from-cyan-500/50 to-cyan-400/70 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

interface WordProps {
  word: string
  progress: any
  start: number
  end: number
}

function Word({ word, progress, start, end }: WordProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block mr-2 text-[#e0e0e0]">
      {word}
    </motion.span>
  )
}
