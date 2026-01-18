"use client"

import { Navbar } from "@/components/navbar"
import { useLenis } from "@/components/smooth-scroll-wrapper"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const blogContent: Record<string, { title: string; date: string; content: string[] }> = {
  "istanbul-web-sitesi-yapimi-rehberi": {
    title: "İstanbul'da Profesyonel Web Sitesi Yapımı: 2025 Rehberi",
    date: "10 JAN 2026",
    content: [
      "İstanbul, Türkiye'nin dijital merkezi olarak web sitesi yapımı ve yazılım geliştirme alanında öncü konumda bulunuyor. 2025 yılında İstanbul'da profesyonel bir web sitesi yaptırmak isteyen işletmeler için doğru firma seçimi kritik öneme sahip. Peki, kaliteli bir web sitesi için nelere dikkat etmelisiniz?",
      "Öncelikle, modern web teknolojileri konusunda uzmanlaşmış bir ekiple çalışmanız gerekiyor. Next.js, React ve TypeScript gibi güncel teknolojiler, web sitenizin hem hızlı hem de SEO dostu olmasını sağlıyor. İstanbul'daki yazılım şirketleri arasında bu teknolojilere hakim olanları tercih etmeniz, uzun vadede size avantaj sağlayacaktır.",
      "Responsive tasarım artık bir lüks değil, zorunluluk. İstanbul'da web sitesi yaptırırken, mobil uyumluluk konusunda taviz vermeyin. Google'ın mobile-first indexing yaklaşımı, mobil uyumlu olmayan siteleri arama sonuçlarında geri plana atıyor. Bu nedenle, web tasarım firmanızın mobil öncelikli bir yaklaşım benimsediğinden emin olun.",
      "SEO optimizasyonu, web sitesi yapımının ayrılmaz bir parçası olmalı. İstanbul'da rekabet yoğun, bu yüzden Google'da üst sıralarda yer almak için teknik SEO, içerik optimizasyonu ve site hızı konularına özel önem verilmeli. Core Web Vitals metriklerini karşılayan bir web sitesi, hem kullanıcı deneyimini hem de arama motoru sıralamalarını iyileştirir.",
      "Son olarak, web sitesi yapımında bütçe planlaması da önemli. İstanbul'da web sitesi fiyatları geniş bir yelpazede değişiyor. Basit bir kurumsal site 15.000-30.000 TL arasında başlarken, özel yazılım gerektiren projeler 100.000 TL'yi aşabiliyor. Kalite ve fiyat dengesini iyi kurmanız, uzun vadeli başarı için kritik.",
    ],
  },
  "turkiye-web-yazilim-sirketleri": {
    title: "Türkiye'de Web Yazılım Şirketleri: Doğru Firmayı Nasıl Seçersiniz?",
    date: "05 JAN 2026",
    content: [
      "Türkiye'de web yazılım sektörü son yıllarda büyük bir gelişim gösterdi. İstanbul, Ankara, İzmir ve Trabzon gibi şehirlerde onlarca profesyonel yazılım şirketi faaliyet gösteriyor. Peki, bu firmalar arasından doğru seçimi nasıl yaparsınız?",
      "İlk olarak, firmanın portfolyosunu detaylı inceleyin. Türkiye'deki başarılı web yazılım şirketleri, geçmiş projelerini şeffaf bir şekilde paylaşır. Referans projeler, firmanın teknik yetkinliğini ve tasarım kalitesini gösteren en önemli göstergelerdir. Özellikle sizin sektörünüze yakın projeler varsa, bu büyük bir avantaj.",
      "Teknoloji stack'i de kritik bir karar faktörü. Modern Türk yazılım şirketleri genellikle React, Vue.js veya Next.js gibi frontend frameworkleri ve Node.js, Python veya .NET gibi backend teknolojileri kullanıyor. Eski teknolojilerle çalışan firmalardan uzak durmanızı öneririz; WordPress tabanlı çözümler her proje için uygun olmayabilir.",
      "İletişim ve proje yönetimi süreçleri de göz ardı edilmemeli. Türkiye'deki en iyi yazılım firmaları, agile metodolojiler kullanır ve düzenli sprint toplantıları ile sizi sürecin içinde tutar. Proje başlangıcında net bir zaman çizelgesi ve milestone'lar belirlenmeli.",
      "Destek ve bakım hizmetleri de uzun vadeli bir ortaklık için önemli. Web siteniz yayına alındıktan sonra da güncellemeler, güvenlik yamaları ve performans optimizasyonları gerekecek. Türkiye'de SLA (Service Level Agreement) sunan firmalarla çalışmak, iş sürekliliğinizi garanti altına alır.",
    ],
  },
  "trabzon-dijital-donusum-web-cozumleri": {
    title: "Trabzon'da Dijital Dönüşüm ve Kurumsal Web Çözümleri",
    date: "28 DEC 2025",
    content: [
      "Trabzon, Karadeniz'in incisi olarak sadece turizmde değil, dijital dönüşümde de önemli adımlar atıyor. Trabzon'daki işletmeler için kurumsal web çözümleri, yerel pazardan ulusal ve uluslararası pazarlara açılmanın anahtarı haline geldi.",
      "Trabzon'da faaliyet gösteren KOBİ'ler için web sitesi artık bir vitrin değil, 7/24 çalışan bir satış temsilcisi. Özellikle fındık, çay ve turizm sektörlerinde faaliyet gösteren Trabzonlu işletmeler, profesyonel web siteleri sayesinde ihracat kapasitelerini artırıyor. E-ticaret entegrasyonları ile yerel ürünler dünya pazarına ulaşıyor.",
      "Kurumsal web çözümleri denilince akla sadece web sitesi gelmemeli. Trabzon'daki işletmeler için CRM sistemleri, stok yönetimi yazılımları, online randevu sistemleri ve müşteri portalları da büyük önem taşıyor. Bu dijital araçlar, operasyonel verimliliği artırırken müşteri memnuniyetini de yükseltiyor.",
      "Trabzon'da dijital dönüşüm sürecinde yerel yazılım firmalarının yanı sıra İstanbul merkezli şirketler de hizmet veriyor. Uzaktan çalışma modelinin yaygınlaşmasıyla, coğrafi sınırlar ortadan kalktı. Önemli olan, projenizi anlayan ve sektörünüze uygun çözümler sunan bir partner bulmak.",
      "Trabzon Ticaret ve Sanayi Odası'nın dijitalleşme teşvikleri ve KOSGEB destekleri, web sitesi yaptırmak isteyen işletmeler için önemli fırsatlar sunuyor. Bu desteklerden yararlanarak, profesyonel bir web sitesine sahip olmak artık her bütçeye uygun hale geldi.",
    ],
  },
  "e-ticaret-web-sitesi-maliyeti-turkiye": {
    title: "E-Ticaret Web Sitesi Maliyeti: Türkiye'de Fiyatlar ve Paketler",
    date: "22 DEC 2025",
    content: [
      "E-ticaret, Türkiye'de her geçen yıl büyüyen bir sektör. Pandemi sonrası online alışveriş alışkanlıkları kalıcı hale geldi ve birçok işletme kendi e-ticaret sitesini kurmak istiyor. Peki, Türkiye'de bir e-ticaret web sitesi ne kadar tutuyor?",
      "Hazır altyapı çözümleri en ekonomik seçenek olarak öne çıkıyor. Shopify, WooCommerce veya Ticimax gibi platformlar, aylık 500-5.000 TL arasında değişen maliyetlerle hızlı başlangıç imkanı sunuyor. Ancak bu çözümler, özelleştirme ve ölçeklenebilirlik konusunda sınırlı kalabiliyor.",
      "Özel yazılım ile geliştirilen e-ticaret siteleri, 50.000-500.000 TL arasında değişen maliyetlere sahip. Bu fiyat farkı; ürün sayısı, entegrasyon gereksinimleri, özel tasarım talepleri ve ödeme sistemi çeşitliliğine göre şekilleniyor. Büyük ölçekli operasyonlar için özel yazılım, uzun vadede daha karlı bir yatırım.",
      "E-ticaret sitesi maliyetlerini etkileyen faktörler arasında: SSL sertifikası, hosting, domain, ödeme entegrasyonları (iyzico, PayTR, Stripe), kargo entegrasyonları, stok yönetimi modülleri ve mobil uygulama yer alıyor. Bu kalemlerin her biri, toplam maliyeti etkiliyor.",
      "Türkiye'de e-ticaret sitesi yaptırırken dikkat edilmesi gereken en önemli nokta, gizli maliyetler. Bazı firmalar düşük başlangıç fiyatları verip, sonradan ek modül ve güncelleme ücretleri talep edebiliyor. Sözleşmenizi imzalamadan önce tüm maliyetleri netleştirin ve yazılı garanti alın.",
    ],
  },
  "mobil-uyumlu-web-tasarim-istanbul": {
    title: "Mobil Uyumlu Web Tasarım: İstanbul Firmaları İçin Öneriler",
    date: "20 DEC 2025",
    content: [
      "Türkiye'de internet trafiğinin %70'inden fazlası mobil cihazlardan geliyor. İstanbul'da faaliyet gösteren firmalar için mobil uyumlu web tasarım, artık bir tercih değil zorunluluk. Google'ın mobile-first indexing politikası, mobil uyumsuz siteleri arama sonuçlarında cezalandırıyor.",
      "Mobil uyumlu web tasarımın temel prensipleri arasında responsive layout, touch-friendly navigation, optimize edilmiş görseller ve hızlı yükleme süreleri yer alıyor. İstanbul'daki profesyonel web tasarım firmaları, bu prensipleri temel alarak projelerini geliştiriyor.",
      "AMP (Accelerated Mobile Pages) teknolojisi, özellikle haber ve blog siteleri için önemli bir avantaj sunuyor. İstanbul'daki medya şirketleri ve içerik üreticileri, AMP sayesinde mobil kullanıcılara anında yüklenen sayfalar sunabiliyor. Bu da hem kullanıcı deneyimini hem de SEO performansını artırıyor.",
      "Progressive Web App (PWA) teknolojisi, mobil deneyimi bir üst seviyeye taşıyor. İstanbul'daki e-ticaret siteleri ve kurumsal firmalar, PWA ile kullanıcılarına native app benzeri bir deneyim sunabiliyor. Offline çalışma, push notification ve ana ekrana ekleme özellikleri, kullanıcı bağlılığını artırıyor.",
      "İstanbul'da mobil uyumlu web sitesi yaptırırken, mutlaka Core Web Vitals metriklerini sorgulayın. LCP (Largest Contentful Paint), FID (First Input Delay) ve CLS (Cumulative Layout Shift) değerleri, sitenizin mobil performansını gösteren kritik metrikler. Bu değerlerin Google'ın belirlediği eşiklerin altında olması, SEO başarınız için şart.",
    ],
  },
  "yapay-zeka-backend-mimarisi": {
    title: "Yapay Zeka Çağında Backend Mimarisi",
    date: "18 DEC 2025",
    content: [
      "Yapay zeka çağında backend mimarisi, geleneksel sistemlerin çok ötesine geçiyor. Artık sadece veri işleme ve depolama değil, gerçek zamanlı öğrenme ve adaptasyon yeteneklerine sahip sistemler inşa ediyoruz.",
      "Modern AI uygulamalarında karşılaştığımız en büyük zorluk, ölçeklenebilirlik ve hız arasındaki dengeyi kurmak. LLM entegrasyonları, vector database yönetimi ve real-time inference sistemleri, klasik CRUD operasyonlarından çok daha karmaşık altyapılar gerektiriyor.",
      "Mikroservis mimarisinin AI dünyasındaki karşılığı, modüler ve izole edilmiş model serving katmanları oluşturmak. Her model, kendi containerında çalışmalı ve bağımsız olarak güncellenebilmeli. Bu yaklaşım, A/B testing ve gradual rollout senaryolarında kritik öneme sahip.",
      "Caching stratejileri de AI sistemlerinde bambaşka bir boyut kazanıyor. Prompt'ların hash'lenmesi, embedding'lerin cache'lenmesi ve semantic similarity bazlı cache hit mekanizmaları, response time'ı saniyelerden milisaniyelere düşürebiliyor.",
      "Sonuç olarak, AI-native backend mimarisi tasarlarken hem klasik distributed systems prensiplerini hem de ML ops best practice'lerini harmanlamamız gerekiyor. Bu hibrit yaklaşım, hem performanslı hem de sürdürülebilir sistemler inşa etmemizi sağlıyor.",
    ],
  },
  "nextjs-15-server-components": {
    title: "Next.js 15: Server Components ile Maksimum Hız",
    date: "12 DEC 2025",
    content: [
      "Next.js 15, React Server Components'i production-ready hale getirerek web geliştirme paradigmasını tamamen değiştirdi. Artık component'lerimiz default olarak server-side render ediliyor ve client bundle'ına hiç dahil edilmiyor.",
      "Bu yaklaşımın en büyük avantajı, JavaScript bundle size'ını dramatik şekilde küçültmesi. Bir e-ticaret uygulamasında, product listing component'ini server component olarak tasarladığımızda, tüm data fetching logic ve büyük dependency'ler serverda kalıyor.",
      "Streaming SSR ile birleştiğinde, Server Components kullanıcı deneyimini bir üst seviyeye taşıyor. Sayfa, chunk chunk yükleniyor ve kullanıcı hemen içeriği görmeye başlıyor. Skeleton loader'lara bile gerek kalmadan, progressive enhancement sağlıyoruz.",
      "Client-Server boundary'si yönetmek başta kafa karıştırıcı gelebilir, ancak 'use client' directive ile bu geçiş çok net tanımlanmış durumda. Interactive component'lerimizi client component olarak işaretleyip, geri kalan her şeyi server component olarak bırakıyoruz.",
      "Performance metrikleri konuşuyor: First Contentful Paint %40, Time to Interactive %60 daha hızlı. Next.js 15 ile birlikte, hem developer experience hem de end-user experience aynı anda optimize oluyor.",
    ],
  },
  "minimalizm-kullanici-deneyimi": {
    title: "Minimalizm ve Kullanıcı Deneyimi Üzerine Notlar",
    date: "28 NOV 2025",
    content: [
      "Minimalizm, sadece estetik bir tercih değil, aynı zamanda kullanıcı deneyimini optimize etmenin en etkili yollarından biri. Her eklediğimiz element, kullanıcının cognitive load'ını artırıyor. Bu yüzden her tasarım kararı, 'bu gerçekten gerekli mi?' sorusuyla başlamalı.",
      "Industrial design'dan aldığımız ilham, dijital ürünlerde form follows function prensibini hayata geçirmemize yardımcı oluyor. Gri tonlar, mono-spaced fontlar ve generous whitespace, dikkat dağıtıcı unsurları ortadan kaldırarak içeriği ön plana çıkarıyor.",
      "Animasyonlar, minimalist tasarımda functional bir rol oynamalı. Gösterişli transition'lar yerine, kullanıcıyı yönlendiren, state değişimlerini communicate eden subtle motion tasarımları tercih ediyoruz. Her animasyon bir purpose'a hizmet etmeli.",
      "Typography-led design, son yıllarda öne çıkan bir trend. Büyük serif başlıklar ve kontrast yaratan font pairing'ler, visual hierarchy oluşturmanın en güçlü araçları. Text'in kendisi, graphic element olarak kullanılabilir.",
      "Minimalist tasarımın başarısı, restraint'te yatıyor. Daha az eleman kullanarak daha fazla söylemek, hem kullanıcı hem de developer açısından sürdürülebilir bir yaklaşım sunuyor.",
    ],
  },
  "llm-entegrasyonu-zorluklar": {
    title: "LLM Entegrasyonunda Karşılaşılan Zorluklar",
    date: "15 NOV 2025",
    content: [
      "Large Language Model entegrasyonu, teoride basit görünse de pratikte birçok karmaşık challenge ile karşı karşıya kalıyoruz. İlk zorluk, latency. GPT-4 gibi büyük modeller, response time'ları 3-5 saniye arasında değişebiliyor. Bu, real-time uygulamalar için kabul edilemez.",
      "Streaming response'lar bu sorunu kısmen çözüyor, ancak beraberinde yeni sorunlar getiriyor: partial response handling, error recovery mid-stream, ve client-side token accumulation. Bu senaryoları handle etmek için robust error handling mekanizmaları gerekiyor.",
      "Cost optimization başlı başına bir challenge. Her request, token bazlı fiyatlandırılıyor ve unoptimized prompt'lar bütçeyi hızla tüketebiliyor. Prompt engineering, sadece quality için değil, aynı zamanda cost efficiency için de kritik hale geliyor.",
      "Context window limitations, uzun conversation'larda problem yaratıyor. Conversation history'yi summarize etmek, relevant context'i extract etmek ve chunking stratejileri geliştirmek gerekiyor. Bu, semantic search ve vector databases ile çözülüyor.",
      "Son olarak, determinism eksikliği testing'i zorlaştırıyor. Aynı prompt farklı response'lar üretebiliyor. Bu yüzden, assertion-based testler yerine, semantic similarity metrics ve human evaluation pipeline'ları geliştirmek zorunda kalıyoruz.",
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = blogContent[slug]
  const { lenis } = useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [slug, lenis])

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Post bulunamadı</h1>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm">
            ← Bloga dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-12 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Bloga dön
          </Link>

          {/* Post Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-4">{post.date}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 leading-tight">{post.title}</h1>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-zinc-400 text-lg leading-relaxed font-light"
                style={{ textAlign: "justify" }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm yazıları gör
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
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
