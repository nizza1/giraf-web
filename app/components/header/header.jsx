

import React from 'react'
import Logo from 'next/image'

//import styles 
import styles from './styles.module.css'
import Link from 'next/link'

import Titlesmall from '@/app/components/title/titlesmall/title'


const Header = () => {
  return (
    <header className={styles.outContainer}>

        <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
            <Titlesmall text='GIRAF'/>
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