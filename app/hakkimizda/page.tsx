"use client"

import { Navbar } from "@/components/navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function HakkimizdaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]) // Adjusted philosophy section to reveal earlier - changed from [0.2, 0.5] to [0.1, 0.35]
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div style={{ opacity: opacity1 }} className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-none">MM Yazılım</h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Dijital dünyada iz bırakan, estetik ve işlevselliği harmanlayan yazılım çözümleri üretiyoruz.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity: opacity2 }}>
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <Image
                src="/minimalist-industrial-workspace-with-computer-code.jpg"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity2 }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Felsefemiz</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Teknoloji ve sanatın kesiştiği noktada, minimalist bir yaklaşımla çalışıyoruz. Her projede, gereksiz
              karmaşıklığı ortadan kaldırıp özü bulmaya odaklanıyoruz.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Industrial design prensiplerimiz, dijital ürünlerimize yansıyor. Form ve fonksiyon arasındaki mükemmel
              dengeyi yakalamak, her tasarım kararımızın merkezinde yer alıyor.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Kod yazarken de aynı minimalist yaklaşımı benimsiyoruz. Clean architecture, readable code ve maintainable
              systems bizim için vazgeçilmez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            style={{ opacity: opacity3 }}
            className="text-4xl md:text-5xl font-serif text-white mb-16 text-center"
          >
            Ekibimiz
          </motion.h2>

          <motion.div style={{ opacity: opacity3 }} className="grid md:grid-cols-2 gap-16">
            {/* Team Member 1 - Replaced photo with TD monogram */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center border border-zinc-800">
                <div className="relative">
                  {/* Geometric background elements */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 border border-cyan-500/20 rotate-45" />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-cyan-500/10 rotate-12" />

                  {/* TD Monogram */}
                  <div className="relative z-10">
                    <div className="text-[120px] font-mono font-bold leading-none tracking-tighter">
                      <span className="text-white">T</span>
                      <span className="text-cyan-400">D</span>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-zinc-700 via-cyan-500 to-zinc-700 mt-2" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-2">Taha Dervişoğlu</h3>
                <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-4">Lead Developer</p>
                <p className="text-zinc-400 leading-relaxed">
                  10+ yıllık deneyimle, backend mimarisinden frontend detaylarına kadar her şeyi kapsayan full-stack
                  development expertise'i.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
                    <span className="text-4xl text-zinc-700">+</span>
                  </div>
                  <p className="text-zinc-600 font-mono text-sm uppercase tracking-wider">Pozisyon Açık</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white mb-2">Yeni Takım Arkadaşımız</h3>
                <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-4">Coming Soon</p>
                <p className="text-zinc-400 leading-relaxed">
                  Ekibimize katılacak yetenekli bir profesyoneli arıyoruz. Belki de bu sen olabilirsin?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Değerlerimiz</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Minimalizm",
                desc: "Az ama öz. Her element bir amaca hizmet etmeli.",
              },
              {
                title: "Kalite",
                desc: "Compromise yok. Her satır kod, her pixel özenle işlenmiş olmalı.",
              },
              {
                title: "İnovasyon",
                desc: "Teknolojinin sınırlarını zorlamak, yeni paradigmalar keşfetmek.",
              },
              {
                title: "Şeffaflık",
                desc: "Client'larla açık iletişim, process visibility, no hidden agendas.",
              },
              {
                title: "Sürdürülebilirlik",
                desc: "Sadece bugün için değil, yarın için de maintainable solutions.",
              },
              {
                title: "Estetik",
                desc: "Güzel kod yazmak, güzel design üretmek bizim işimiz.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-zinc-800 p-8 hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-white mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="fixed bottom-8 left-0 right-0 px-8 pointer-events-none">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-zinc-600 text-xs uppercase font-mono tracking-wider">MM Yazılım © 2025</div>
          <div className="flex gap-6 text-zinc-600 text-xs uppercase font-mono tracking-wider pointer-events-auto">
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
      </div>
    </div>
  )
}
