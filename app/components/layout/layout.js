import Navbar from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}