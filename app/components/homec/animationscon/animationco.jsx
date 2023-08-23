"use client"

import React from 'react'


//lottie 
import Lottie from "lottie-react";
import contactAnimations from '@/app/animations/animation_ll5965nn.json';

import styles from './styles.module.css'

const Animationco = ({src}) => {
  return (
  
        <div className={styles.animationContainer}>
            <Lottie className={styles.animation}
                  animationData={src} />
        </div>

  )
}

export default Animationco