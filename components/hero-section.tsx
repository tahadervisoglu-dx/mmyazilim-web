"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "./typewriter-text"
import { HeroBackground } from "./hero-background"
import { useLenis } from "./smooth-scroll-wrapper"

export function HeroSection() {
  const { lenis } = useLenis()

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("iletisim")
    if (contactSection) {
      if (lenis) {
        lenis.scrollTo(contactSection, {
          offset: 0,
          duration: 1.5,
          easing: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
        })
      } else {
        // Fallback to native smooth scroll
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <HeroBackground />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="font-mono text-sm text-[#606060] mb-8">{"<MM Yazılım />"}</div>

          <TypewriterText
            text="Yazılımın Dünyası"
            className="text-6xl md:text-8xl font-bold text-[#e0e0e0] font-mono"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl font-mono"
          >
            Modern teknolojilerle işinizi geleceğe taşıyoruz.
            <br />
            Web, mobil ve kurumsal yazılım çözümleri.
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.5, duration: 0.6 }}
            onClick={handleScrollToContact}
            className="mt-8 px-8 py-3 bg-transparent border border-white/80 text-white/90 font-mono text-sm tracking-wider rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
          >
            BİZE ULAŞIN
          </motion.button>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.9) 70%, #0a0a0a 100%)",
          filter: "blur(1px)",
        }}
      />
    </section>
  )
}
