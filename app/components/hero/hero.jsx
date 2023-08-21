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
            Empowering Visionaries Worldwide <br />Your Trusted Multilateral Project Catalyst for Fostering Collaborative Excellence in Global Research and Education Initiatives
            </h1>

            <Contact text='GET IN TOUCH'/>
           
            </div>
            
        </div>
    </div>
  )
}

export default Hero