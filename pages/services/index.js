import React from 'react'

import PageTitle from '@/app/components/pagescomponents/pageTitle/pageTitle'
import pageStyles from '../pages.module.css'

import styles from './styles.module.css'

import Image from 'next/image'


const project = '/illustrations/project.svg'
const business = '/illustrations/business.svg'
const training = '/illustrations/training.svg'
const translation = '/illustrations/translation.svg'


const Services = () => {
  return (
    <div className={pageStyles.outContainer}>
    <div className={pageStyles.innerContainer}>
        <PageTitle text='Services'/>
    </div>

    <div className={styles.pageBody}>
      <div className={styles.innerContainer}>

        <div className={styles.sercices}>

        <div className={styles.serviceBox}>

          <div className={styles.illustrationContainer}>
            <Image
            src= {project} 
            alt="Project Illustration"
            width={300}
            height={300}
            className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
          <h3 className={styles.seciceTitle}>
          Project Management
          </h3>

          <p>GIRAF PM provides services for every step of a projectï¿½s life-cycle.</p><p> This includes searching for funding opportunities, shaping a project idea to make it fundable by a particular funding scheme, designing a project (work plan creation, consortium building), competitive proposal writing, running project negotiations with funding agencies, and managerial support to project implementation (reporting, accounting, risk management, IPR management etc.)</p>
          <p> We know the business and can release you from the managerial burden of acquiring and running a project in order to enable you to stay focussed on essential things.</p>
          </div>
      
        </div>

        <div className={styles.serviceBox}>

          <div className={styles.illustrationContainer}>
            <Image
            src= {business} 
            alt="business Illustration"
            width={300}
            height={300}
            className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
          <h3 className={styles.seciceTitle}>
          Business Consulting
          </h3>

          <p>To be able to function with greatest efficiency, organisations need lean processes. GIRAF PM provides specialized consulting to achieve this goal.</p>
          <p> The companyï¿½s business consulting services include requirements and process analysis, identification of bottlenecks and inefficiencies, design and development of optimized processes and IT-solutions, and implementation of new processes and corresponding IT-solutions. Having successfully designed and implemented processes and IT-solutions in dozens of projects (both public and private sector), GIRAF PM will help you finding the best solution for you.</p>
          </div>
      
        </div>

        <div className={styles.serviceBox}>

          <div className={styles.illustrationContainer}>
          <Image
            src= {training} 
            alt="training Illustration"
            width={300}
            height={300}
            className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
          <h3 className={styles.seciceTitle}>
          Training
          </h3>

          <p>GIRAF PM designs and delivers targeted training measures on both project management (in particular management of EU- and nationally funded multilateral projects) and organisational strategy/analysis.</p>
          <p> If you need to develop an in-house project management capacity or organise such training events for clients, GIRAF PM will be your best choice. With the history of previous experiences in training development and delivery, we can provide exactly the training you need.</p>
          </div>
      
        </div>

         <div className={styles.serviceBox}>

          <div className={styles.illustrationContainer}>
          <Image
            src= {translation} 
            alt="translation Illustration"
            width={300}
            height={300}
            className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
          <h3 className={styles.seciceTitle}>
          Translation Services
          </h3>

          <p>Particularly in international multilateral project, participants can get lost in translation.</p>
          <p> Partners from foreign countries need to be managed, reports need to be written in the required language, events with international participants and speakers need to be organised.</p>
          <p>GIRAF PM ensures that you will not get lost in translation as we provide translation services in key languages (English, German, Russian, Ukrainian, French) covering a wide variety of countries.</p>
          </div>
      
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Services