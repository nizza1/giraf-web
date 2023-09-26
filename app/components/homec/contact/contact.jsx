"use client"

import React , {useState} from 'react'


import styles from './styles.module.css'

//components 
import ContactButton from '@/app/components/buttons/contact/contactButton'

//lottie 
import Lottie from "lottie-react";
import contactAnimations from '@/app/animations/animation_ll5965nn.json';


/* container to form changed */
const Contact = () => {

  const [formData , setFormData] = useState({
    email : '',
    phone : '',
    name : '',
    message : '',
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {

        alert(data.message);
      } else {
       
        alert(data.message);
      }
    } catch (error) {
      alert('Error:'+ error);
    }
  }



  return (
    <div className={styles.outContainer} id='contact-form'>
        <div className={styles.innerSection} >
        <div className={styles.textAnimations}>

          <div className={styles.gradientBlue}></div>
          
            <h1 className={styles.text}>GET IN TOUCH</h1>

            <div className={styles.animationContainer}>
            <Lottie className={styles.animationsContact}
                  animationData={contactAnimations} />
            </div>

        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
     
      <div className={`${styles.email} ${styles.block}`}>
        <label  htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          placeholder="e.g steve@example.com"
          autoComplete="email"
          required
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div className={`${styles.phone} ${styles.block}`}>
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          placeholder="your phone number"
          type="text"
          name="phone"
          autoComplete="tel"
          required
          value={formData.phone} 
          onChange={handleChange} 
        />
      </div>
      <div className={`${styles.name} ${styles.block}`}>
        <div>
          <label htmlFor="frm-first"> Name</label>
          <input
            id="frm-first"
            placeholder="e.g steve"
            type="text"
            name="name"
            autoComplete="given-name"
            required
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
   
      </div>
      <div className={`${styles.message} ${styles.block}`}>
        <label htmlFor="frm-message">Message</label>
        <textarea className={styles.textarea} id="frm-message" rows="6" name="message" placeholder="your message"
        value={formData.message} 
        onChange={handleChange} 
        ></textarea>
      </div>
      <div className={`${styles.button} ${styles.block}`}>
       
       
      </div>
      <ContactButton text='Send'/>
         </form>
        </div>
    </div>
  )
}

export default Contact