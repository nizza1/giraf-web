import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

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

            <div className={styles.nuance}>
            <p>Created by Nuance Studio</p>
            <div >
            <a href="https://www.nuancestudio.de/" target="_blank"        rel="noopener noreferrer">
              <Image
               src="nuance.svg"
                alt="nuance studio"
                width={100}
                 height={50}
                 />
             </a>

            </div>
            
            </div>
    
        </div>
    </div>
  )
}

export default Footer