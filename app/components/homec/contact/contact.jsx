"use client"

import React from 'react'


import styles from './styles.module.css'

//components 
import ContactButton from '@/app/components/buttons/contact/contactButton'

//lottie 
import Lottie from "lottie-react";
import contactAnimations from '@/app/animations/animation_ll5965nn.json';


/* container to form changed */
const Contact = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerSection}>
        <div className={styles.textAnimations}>
            <h1 className={styles.text}>GIT IN TOUCH</h1>

            <div className={styles.animationContainer}>
            <Lottie className={styles.animationsContact}
                  animationData={contactAnimations} />
            </div>

        </div>

        <form className={styles.form}>
     
      <div className={`${styles.email} ${styles.block}`}>
        <label  htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={`${styles.phone} ${styles.block}`}>
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className={`${styles.name} ${styles.block}`}>
        <div>
          <label htmlFor="frm-first"> Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
   
      </div>
      <div className={`${styles.message} ${styles.block}`}>
        <label htmlFor="frm-message">Message</label>
        <textarea className={styles.textarea} id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className={`${styles.button} ${styles.block}`}>
       {/*  <button type="submit">Send</button> */}
       
      </div>
      <ContactButton text='Send'/>
         </form>
        </div>
    </div>
  )
}

export default Contact