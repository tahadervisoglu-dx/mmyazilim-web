"use client"
import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "BlueSkyDX",
    tag: "Creative Frontend",
    year: "2024",
    image: "/modern-blue-gradient-creative-frontend-website.jpg",
    url: "https://blueskydx.ai",
  },
  {
    title: "E-Mentor Car",
    tag: "B2B System",
    year: "2024",
    image: "/dark-fleet-management-b2b-dashboard-system.jpg",
    url: "https://e-mentorcar.com",
  },
  {
    title: "Medeniyet Veteriner",
    tag: "Corporate SEO",
    year: "2024",
    image: "/veterinary-clinic-corporate-website-green-nature.jpg",
    url: "https://medeniyetveteriner.com.tr",
  },
  {
    title: "Demiray Nakliyat",
    tag: "Logistics Web",
    year: "2024",
    image: "/logistics-transportation-company-website-trucks.jpg",
    url: "https://www.demiraynakliyat.com",
  },
  {
    title: "Buera Mühendislik",
    tag: "Engineering",
    year: "2024",
    image: "/engineering-construction-company-industrial-websit.jpg",
    url: "https://bueramuhendislik.com.tr",
  },
  {
    title: "Eras Elektrik",
    tag: "Industrial",
    year: "2024",
    image: "/electrical-industrial-company-website-power-energy.jpg",
    url: "https://www.eraselektrik.com.tr",
  },
]

function FloatingImage({
  image,
  isVisible,
}: {
  image: string
  isVisible: boolean
}) {
  const [mounted, setMounted] = useState(false)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    setPortalContainer(document.body)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 150)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted || !portalContainer) return null

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <div className="w-[400px] h-[300px] rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-[#303030] relative bg-[#1a1a1a]">
        <AnimatePresence mode="popLayout" initial={false}>
          {image && (
            <motion.img
              key={image}
              src={image}
              alt=""
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>,
    portalContainer,
  )
}

function ProjectRow({
  project,
  index,
  onHover,
  onLeave,
}: {
  project: (typeof projects)[0]
  index: number
  onHover: (image: string) => void
  onLeave: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(project.url, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(project.image)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onLeave()
      }}
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div className="flex items-center justify-between py-8 border-b border-[#252525] hover:border-[#404040] transition-colors">
        {/* Left: Project Name */}
        <motion.h3
          className={`text-4xl md:text-6xl lg:text-7xl font-bold font-mono uppercase tracking-tight transition-colors duration-300 ${
            isHovered ? "text-[#00d4ff]" : "text-[#e0e0e0]"
          }`}
        >
          {project.title}
        </motion.h3>

        {/* Right: Metadata */}
        <div className="flex items-center gap-6">
          <span
            className={`text-sm font-mono transition-colors duration-300 ${
              isHovered ? "text-[#00d4ff]" : "text-[#606060]"
            }`}
          >
            {project.tag}
          </span>
          <span
            className={`text-sm font-mono transition-colors duration-300 ${
              isHovered ? "text-[#00d4ff]/60" : "text-[#404040]"
            }`}
          >
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [isMoreHovered, setIsMoreHovered] = useState(false)

  const handleMoreClick = () => {
    const contactSection = document.getElementById("iletisim")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-32 px-6" ref={containerRef}>
      <FloatingImage image={hoveredImage || ""} isVisible={!!hoveredImage} />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold text-[#e0e0e0] mb-16 font-mono"
        >
          {"<Projelerimiz />"}
        </motion.h2>

        {/* Editorial List */}
        <div className="border-t border-[#252525]">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              onHover={(image) => setHoveredImage(image)}
              onLeave={() => setHoveredImage(null)}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projects.length * 0.1 }}
            onMouseEnter={() => setIsMoreHovered(true)}
            onMouseLeave={() => setIsMoreHovered(false)}
            onClick={handleMoreClick}
            className="group cursor-pointer relative"
          >
            <div className="flex items-center justify-between py-8 border-b border-[#252525] hover:border-[#404040] transition-colors">
              {/* Three dots */}
              <motion.h3
                className={`text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight transition-colors duration-300 ${
                  isMoreHovered ? "text-[#00d4ff]" : "text-[#606060]"
                }`}
              >
                . . .
              </motion.h3>

              {/* Hover message */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMoreHovered ? 1 : 0,
                  x: isMoreHovered ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base font-mono text-[#00d4ff]"
              >
                Daha fazla işimiz için bize ulaşın →
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
