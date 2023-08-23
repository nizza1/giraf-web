

import React from 'react'
import Logo from 'next/image'

//import styles 
import styles from './styles.module.css'
import Link from 'next/link'


const Header = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
            <h1>Log</h1>
        </div>

      
            <div className={styles.navmenu}>
            <Link href="/">Home</Link>
             <Link href="/projects">Projects</Link>
             <Link href="/services">Services</Link>
             <Link href="/news">News</Link>
            </div>
   
        </div>
        
    </div>
  )
}

export default Header