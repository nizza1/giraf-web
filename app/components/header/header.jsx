"use client"

import React, {useState} from 'react'
import Logo from 'next/image'

//import styles 
import styles from './styles.module.css'
import Link from 'next/link'

import Titlesmall from '@/app/components/title/titlesmall/title'



const Header = () => {
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [isOpen , setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.outContainer}>

        <div className={styles.innerContainer}>
          
        <div className={styles.logoContainer}>

        <Link href="/">
            <Titlesmall text='GIRAF' />
          </Link>

        </div>
         
        
                <button 
                onClick={toggleMenu}
                className={`${styles.navButton} ${isOpen ? styles.open : ''}`}><div className={styles.line}></div>
                </button>
           

       
      
            <div className={styles.navmenu}>
            <Link className={styles.links} href="/">Home</Link>
             <Link className={styles.links} href="/projects">Projects</Link>
             <Link className={styles.links} href="/services">Services</Link>
             <Link className={styles.links} href="/news">News</Link>
            </div>

            <div className={`${styles.menuMobile} ${isOpen ? '' : styles.menuMobileClose}`}>
            <Link className={styles.linksM}
            onClick={closeMenu}
             href="/">Home</Link>
             <Link className={styles.linksM} 
             onClick={closeMenu}
             href="/projects">Projects</Link>
             <Link className={styles.linksM} 
             onClick={closeMenu}
             href="/services">Services</Link>
             <Link className={styles.linksM}
             onClick={closeMenu}
              href="/news">News</Link>
            </div>
   
        </div>
        
    </div>
  )
}

export default Header