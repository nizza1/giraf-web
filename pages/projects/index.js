import React from 'react'

import styles from './styles.module.css'
import pageStyles from '../pages.module.css'

import PageTitle from '@/app/components/pagescomponents/pageTitle/pageTitle'

//icons 
import {BsListUl ,BsCheckCircle } from 'react-icons/bs';

const Projects = () => {
  return (
    <div className={pageStyles.outContainer}>
      <div className={pageStyles.innerContainer}>
        <PageTitle text='Projects' />
      </div>

      <div className={styles.projectsBody}>
        <div className={styles.projectContainer}>
          <h2 className={styles.bodyTitle}>## MICROCASA (2023-2026)</h2>
          <p className={styles.description}>is the first international project aimed at sharing the European experiences and building institutional capacities in Southeast Asia to co-create, promote and deliver short competence-oriented educational units leading to micro-credentials with the goal of solving various economic and social problems. Focusing on different aspects of micro-credentialing, for instance course content co-creation, educational technology, transparent quality assurance, technologies for issuance and verification of digital micro-credentials, the project builds a comprehensive set of competences and technical capacities in Southeast Asian Universities. Leveraging on the partner networks, as well as on the links to the national educational authorities and regional initiatives, MICROCASA has an ambition to have a systemic impact on the ASEAN region as a whole.</p>

          <p className={styles.listDes}>
            <BsListUl className={styles.icon}/> 
            The project plan builds around the following groups of activities:</p>

          <ul className={styles.lists}>
            <li><BsCheckCircle className={styles.listIcon}/> 
            Regional Micro-credentials Study and Roundtables, which will allow gathering factual data and experts opinions about the barriers and enablers for introducing micro-credentials into the regional HEIs, as well as to benchmark the regional approaches to the ones in the EU.</li>

            <li><BsCheckCircle className={styles.listIcon}/>
            Micro-credentials capacity building Programme covering all abovementioned aspects of micro-credentialing.</li>

            <li><BsCheckCircle className={styles.listIcon}/>
            Pilot development, delivery and evaluation of the set of Digital Competences courses granting micro-credentials.</li>

            <li><BsCheckCircle className={styles.listIcon}/>
              Targeted awareness raising and dissemination activities spreading the excellence beyond the project consortium.</li>
          </ul>

          <h4 className={styles.bottomText}>On the European side, the project consortium includes 3 European Universities with complementary competences, Italian NARIC Agency and the quality assurance expert company. The representative group of 6 Southeast Asian University includes central agenda-setting national Universities, as well as Universities with regional development missions.</h4>

          <h5 className={styles.highlight}>GIRAF is a Quality Assurance partner in the project.
</h5>
          
        </div>
      </div>
    </div>
  )
}

export default Projects