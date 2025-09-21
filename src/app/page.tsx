import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { HeroScroll } from '@/components/HeroScroll'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <HeroScroll />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}