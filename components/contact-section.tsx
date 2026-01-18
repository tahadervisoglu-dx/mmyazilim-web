"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactSection() {
  const [contactInfo, setContactInfo] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactInfo.trim()) {
      console.log("Contact info submitted:", contactInfo)
      setIsSubmitted(true)
    }
  }

  return (
    <section
      id="iletisim"
      className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cyan-400/10 pointer-events-none z-50"
          />
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-8">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="input-form"
              onSubmit={handleSubmit}
              className="flex items-center justify-center gap-4"
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Giant Input Field */}
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Başlayalım mı?"
                className="flex-1 bg-transparent border-0 border-b-2 border-zinc-800 focus:border-zinc-600 outline-none text-6xl md:text-7xl text-white text-center font-serif transition-all duration-300 placeholder:text-white/70 placeholder:font-serif"
              />

              {/* Arrow Icon - appears when typing */}
              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: contactInfo.length > 0 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white hover:text-zinc-400 transition-colors"
              >
                <ArrowRight className="w-12 h-12 md:w-16 md:h-16" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl text-cyan-400/90 font-serif">Notunuzu Aldık.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 px-8"
        animate={{ opacity: isFocused ? 0.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Copyright */}
          <div className="text-zinc-600 text-xs uppercase font-mono tracking-wider">MM Yazılım © 2025</div>

          {/* Social Links */}
          <div className="flex gap-6 text-zinc-600 text-xs uppercase font-mono tracking-wider">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-zinc-800">/</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-800">/</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
