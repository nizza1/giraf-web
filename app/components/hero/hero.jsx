import React from 'react'
import styles from './styels.module.css'


//components 
import Title from '@/app/components/title/title'
import Contact from '@/app/components/buttons/contact/contactButton'
const Hero = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.titleContainer}>
            <Title text='GIRAF PM'/>
            <h1 className={styles.subTitle}>
            Empowering Visionaries Worldwide <br /> 
            
            </h1>

            <p className={styles.textN}>
            Your trusted multilateral project catalyst for fostering collaborative excellence in global research and education initiatives
            </p>

            <Contact text='GET IN TOUCH'/>
           
            </div>
            
        </div>
    </div>
  )
}

export default Hero