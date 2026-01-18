"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLenis } from "./smooth-scroll-wrapper"
import { usePathname } from "next/navigation"

export function Navbar() {
  const { lenis } = useLenis()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleScrollOrNavigate = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    if (isHomePage) {
      // Already on home page, just scroll
      const target = document.querySelector(targetId)
      if (target && lenis) {
        lenis.scrollTo(target, {
          offset: -80,
          duration: 1.5,
          easing: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
        })
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${targetId}`
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#252525]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: isHomePage ? 2.5 : 0, duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="pl-6">
          <Link href="/">
            <Image src="/logo.png" alt="MM Yazılım Logo" width={48} height={48} className="w-12 h-12 object-contain" />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 font-mono text-sm text-[#808080] pr-6">
          <a
            href="#services"
            onClick={(e) => handleScrollOrNavigate(e, "#services")}
            className="hover:text-[#e0e0e0] transition-colors"
          >
            Hizmetler
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollOrNavigate(e, "#projects")}
            className="hover:text-[#e0e0e0] transition-colors"
          >
            Projeler
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollOrNavigate(e, "#contact")}
            className="hover:text-[#e0e0e0] transition-colors"
          >
            İletişim
          </a>
          <Link href="/blog" className="hover:text-[#e0e0e0] transition-colors">
            Blog
          </Link>
          <Link href="/hakkimizda" className="hover:text-[#e0e0e0] transition-colors">
            Hakkımızda
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden pr-6 text-[#808080] hover:text-[#e0e0e0] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#252525]"
          >
            <div className="flex flex-col gap-4 py-6 px-6 font-mono text-sm text-[#808080]">
              <a
                href="#services"
                onClick={(e) => handleScrollOrNavigate(e, "#services")}
                className="hover:text-[#e0e0e0] transition-colors py-2"
              >
                Hizmetler
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScrollOrNavigate(e, "#projects")}
                className="hover:text-[#e0e0e0] transition-colors py-2"
              >
                Projeler
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollOrNavigate(e, "#contact")}
                className="hover:text-[#e0e0e0] transition-colors py-2"
              >
                İletişim
              </a>
              <Link href="/blog" className="hover:text-[#e0e0e0] transition-colors py-2">
                Blog
              </Link>
              <Link href="/hakkimizda" className="hover:text-[#e0e0e0] transition-colors py-2">
                Hakkımızda
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
