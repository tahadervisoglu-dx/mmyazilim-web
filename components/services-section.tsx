"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Code2, Smartphone, Database, Globe, Layers, Zap, Cloud, Shield, Cpu } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Geliştirme",
    description: "Modern, hızlı ve responsive web uygulamaları",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformları için native çözümler",
  },
  {
    icon: Database,
    title: "Veritabanı Yönetimi",
    description: "Güvenli ve ölçeklenebilir veri mimarisi",
  },
  {
    icon: Cloud,
    title: "Cloud Çözümleri",
    description: "Bulut tabanlı altyapı ve servisler",
  },
  {
    icon: Code2,
    title: "Özel Yazılım",
    description: "İhtiyaçlarınıza özel kurumsal çözümler",
  },
  {
    icon: Layers,
    title: "API Entegrasyonu",
    description: "Sistemlerinizi birbirine bağlayan güçlü API'ler",
  },
  {
    icon: Zap,
    title: "Performans",
    description: "Optimize edilmiş ve hızlı sistemler",
  },
  {
    icon: Shield,
    title: "Güvenlik",
    description: "Sıfır güven prensibi ile güvenli sistemler",
  },
  {
    icon: Cpu,
    title: "AI & ML",
    description: "Yapay zeka destekli akıllı çözümler",
  },
]

export function ServicesSection() {
  const parentRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(stickyRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scrollYProgressSpring = useSpring(scrollYProgress, springConfig)

  const topX = useTransform(scrollYProgressSpring, [0, 1], ["0%", "-50%"])
  const bottomX = useTransform(scrollYProgressSpring, [0, 1], ["-50%", "0%"])

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="services" ref={parentRef} className="relative md:h-[400vh] h-auto">
      <div
        ref={stickyRef}
        className="md:sticky md:top-0 md:h-screen md:overflow-hidden flex items-center py-20 md:py-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="w-full px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#e0e0e0] mb-16 font-mono"
            >
              {"<Hizmetlerimiz />"}
            </motion.h2>

            <div className="hidden md:block space-y-6">
              <motion.div style={{ x: topX }} className="flex gap-6 mb-6 will-change-transform">
                {services.slice(0, 5).map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      delay: isInView ? index * 0.1 : (4 - index) * 0.05,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="min-w-[350px] p-8 bg-[#1a1a1a] border border-[#303030] rounded-lg hover:border-[#505050] transition-colors"
                  >
                    <service.icon className="w-12 h-12 text-[#808080] mb-4" />
                    <h3 className="text-xl font-bold text-[#e0e0e0] mb-2 font-mono">{service.title}</h3>
                    <p className="text-[#909090] font-mono text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div style={{ x: bottomX }} className="flex gap-6 will-change-transform">
                {services.slice(5).map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      delay: isInView ? (index + 5) * 0.1 : (3 - index) * 0.05,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="min-w-[350px] p-8 bg-[#1a1a1a] border border-[#303030] rounded-lg hover:border-[#505050] transition-colors"
                  >
                    <service.icon className="w-12 h-12 text-[#808080] mb-4" />
                    <h3 className="text-xl font-bold text-[#e0e0e0] mb-2 font-mono">{service.title}</h3>
                    <p className="text-[#909090] font-mono text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="md:hidden grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="p-6 bg-[#1a1a1a] border border-[#303030] rounded-lg"
                >
                  <service.icon className="w-10 h-10 text-[#808080] mb-3" />
                  <h3 className="text-lg font-bold text-[#e0e0e0] mb-2 font-mono">{service.title}</h3>
                  <p className="text-[#909090] font-mono text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
