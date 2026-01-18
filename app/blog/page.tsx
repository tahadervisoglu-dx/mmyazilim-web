"use client"

import { Navbar } from "@/components/navbar"
import { useLenis } from "@/components/smooth-scroll-wrapper"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const blogPosts = [
  {
    slug: "istanbul-web-sitesi-yapimi-rehberi",
    title: "İstanbul'da Profesyonel Web Sitesi Yapımı: 2025 Rehberi",
    date: "10 JAN 2026",
    tag: "Web Tasarım",
    readTime: "7 min read",
  },
  {
    slug: "turkiye-web-yazilim-sirketleri",
    title: "Türkiye'de Web Yazılım Şirketleri: Doğru Firmayı Nasıl Seçersiniz?",
    date: "05 JAN 2026",
    tag: "Rehber",
    readTime: "9 min read",
  },
  {
    slug: "trabzon-dijital-donusum-web-cozumleri",
    title: "Trabzon'da Dijital Dönüşüm ve Kurumsal Web Çözümleri",
    date: "28 DEC 2025",
    tag: "Kurumsal",
    readTime: "6 min read",
  },
  {
    slug: "e-ticaret-web-sitesi-maliyeti-turkiye",
    title: "E-Ticaret Web Sitesi Maliyeti: Türkiye'de Fiyatlar ve Paketler",
    date: "22 DEC 2025",
    tag: "E-Ticaret",
    readTime: "8 min read",
  },
  {
    slug: "mobil-uyumlu-web-tasarim-istanbul",
    title: "Mobil Uyumlu Web Tasarım: İstanbul Firmaları İçin Öneriler",
    date: "20 DEC 2025",
    tag: "Mobil",
    readTime: "5 min read",
  },
  {
    slug: "yapay-zeka-backend-mimarisi",
    title: "Yapay Zeka Çağında Backend Mimarisi",
    date: "18 DEC 2025",
    tag: "Architecture",
    readTime: "8 min read",
  },
  {
    slug: "nextjs-15-server-components",
    title: "Next.js 15: Server Components ile Maksimum Hız",
    date: "12 DEC 2025",
    tag: "Frontend",
    readTime: "6 min read",
  },
  {
    slug: "minimalizm-kullanici-deneyimi",
    title: "Minimalizm ve Kullanıcı Deneyimi Üzerine Notlar",
    date: "28 NOV 2025",
    tag: "Design",
    readTime: "5 min read",
  },
  {
    slug: "llm-entegrasyonu-zorluklar",
    title: "LLM Entegrasyonunda Karşılaşılan Zorluklar",
    date: "15 NOV 2025",
    tag: "AI",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  const { lenis } = useLenis()

  useEffect(() => {
    // Immediate scroll for initial load
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Also reset Lenis when it's ready
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [lenis])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-16">Yazılar</h1>

          <div className="space-y-0">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-8 border-b border-zinc-800 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-zinc-500 font-mono text-sm uppercase tracking-wider w-24 shrink-0">
                      {post.date}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-white/90 transition-all duration-300">
                        {post.title}
                      </h2>
                      <p className="text-zinc-600 text-sm mt-2 font-mono uppercase tracking-wider">{post.tag}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-zinc-500 text-sm font-mono hidden md:block">{post.readTime}</span>
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-zinc-600 text-xs uppercase font-mono tracking-wider">MM Yazılım © 2025</div>
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
      </div>
    </div>
  )
}
