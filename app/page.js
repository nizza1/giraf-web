import Image from 'next/image'
import styles from './page.module.css'

//components
import Header from '@/app/components/header/header'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import HomeMain from './components/homec/main/homeMain'

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Hero />
        <HomeMain />
        <Footer />
    </main>
  )
}
