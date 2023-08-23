

import React from 'react'
import Logo from 'next/image'

//import styles 
import styles from './styles.module.css'
import Link from 'next/link'


const Header = () => {
  return (
    <header className={styles.outContainer}>

        <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
            <h1>Log</h1>
        </div>

      
            <div className={styles.navmenu}>
            <Link className={styles.links} href="/">Home</Link>
             <Link className={styles.links} href="/projects">Projects</Link>
             <Link className={styles.links} href="/services">Services</Link>
             <Link className={styles.links} href="/news">News</Link>
            </div>
   
        </div>
        
    </header>
  )
}

export default Header