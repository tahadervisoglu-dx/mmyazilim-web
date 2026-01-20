"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactSection() {
  const [contactInfo, setContactInfo] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactInfo.trim()) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactInfo: contactInfo.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Bir hata oluştu')
      }

      console.log("Contact info submitted:", contactInfo)
      setIsSubmitted(true)
      setContactInfo("")
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu')
      console.error('Form submission error:', err)
    } finally {
      setIsLoading(false)
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
            <motion.div
              key="input-form"
              className="flex flex-col items-center justify-center gap-4"
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full">
                <div className="flex items-center justify-center gap-4 w-full">
                  {/* Giant Input Field */}
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Başlayalım mı?"
                    disabled={isLoading}
                    className="flex-1 bg-transparent border-0 border-b-2 border-zinc-800 focus:border-zinc-600 outline-none text-6xl md:text-7xl text-white text-center font-serif transition-all duration-300 placeholder:text-white/70 placeholder:font-serif disabled:opacity-50"
                  />

                  {/* Arrow Icon - appears when typing */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || !contactInfo.trim()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: contactInfo.length > 0 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white hover:text-zinc-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="w-12 h-12 md:w-16 md:h-16" />
                    )}
                  </motion.button>
                </div>

                {/* Description Text */}
                <motion.p
                  animate={{ opacity: isFocused ? 0.3 : 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/60 text-lg md:text-xl text-center font-serif max-w-2xl"
                >
                  İster eposta, ister telefon numarası, isterseniz bir not bırakabilirsiniz...
                </motion.p>
              </form>

              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-lg md:text-xl text-center font-serif"
                >
                  {error}
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success-message"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center space-y-6"
            >
              <p className="text-5xl md:text-6xl text-cyan-400/90 font-serif">Notunuzu Aldık.</p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false)
                  setError("")
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="text-white/70 hover:text-white text-lg font-serif underline underline-offset-4 transition-colors"
              >
                Yeni mesaj gönder
              </motion.button>
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
