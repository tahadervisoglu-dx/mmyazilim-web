"use client"

import { useState, useEffect } from "react"
import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after preloader animation completes
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds for logo animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}

      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}
