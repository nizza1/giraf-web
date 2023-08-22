import Image from 'next/image'
import styles from './page.module.css'

//components
import Header from '@/app/components/header/header'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import HomeMain from './components/homec/main/homeMain'
import Contact from '@/app/components/homec/contact/contact'
export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Hero />
        <HomeMain />
        <Contact />
        <Footer />
    </main>
  )
}
