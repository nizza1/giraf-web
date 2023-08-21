import React from 'react'
import Logo from 'next/image'

//import styles 
import styles from './styles.module.css'
import Contact from '@/app/components/buttons/contact/contactButton'

const Header = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
            <h1>Log</h1>
        </div>

        <div className={styles.navConatiner }>
            <h1>NAV</h1>
        </div>
        </div>
        
    </div>
  )
}

export default Header