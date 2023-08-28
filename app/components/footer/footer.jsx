import React from 'react'
import Link from 'next/link'

import styles from './styels.module.css'
const Footer = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.contact}>
            <Link 
             className={styles.link}
             href="mailto:services@giraf-pm.com">
            services@giraf-pm.com
            </Link>

            <Link
            className={styles.link}
             href="tel:+49 170 321 8955">+49 170 321 8955</Link>

            </div>

            <div className={styles.rights}>
              <Link

               href="/dataprotection" >
                Privacy Policy & Imprint
              </Link>
            </div>
    
        </div>
    </div>
  )
}

export default Footer