import Navbar from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
 
import styles from './lay.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children }) {
  return (
    < >
   
    <main className={`${inter.className} ${styles.main}`}>
      <Navbar />
        {children}
      <Footer />
    </main>
    
    </>
     
  )
}