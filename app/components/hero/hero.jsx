import React from 'react'
import styles from './styels.module.css'

import Link from 'next/link'


//components 
import Title from '@/app/components/title/title'
import Contact from '@/app/components/buttons/contact/contactButton'

//lotie animations
import Animation from '../homec/animationscon/animationco'

import homeAnimation from '@/app/animations/homeani.json';



const Hero = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.animationBack}>
            <Animation src={homeAnimation} />
            </div>
         
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