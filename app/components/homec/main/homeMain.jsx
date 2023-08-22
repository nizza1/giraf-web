import React from 'react'
import styles from './styles.module.css'

//components 
import ContentCard from '../featureSingle/contentCard'

import { FaCogs, FaFlag, FaHandshake, FaGlobe } from 'react-icons/fa';
const HomeMain = () => {

    const features = [
        {
            icon: <FaCogs />,
            title: 'Expertise in Multilateral Project Design and Implementation',
            content: 'GIRAF PM e.K. is an independent company with its core expertise in designing and implementing international multilateral projects in the field of research and education. Combining fundamental project management and business process engineering techniques with substantial practical experience in various funding schemes operation, GIRAF PM helps scientists, educators and innovative entrepreneurs to achieve their goals.'
        },
        {
            icon: <FaFlag />,
            title: 'Comprehensive Project Lifecycle Solutions',
            content: 'The company provides specialized services for every step of a project life cycle, starting from proposal writing and project acquisition over project management, business process analysis and design to dissemination and exploitation services. General translation services offered by GIRAF PM enable even the most heterogeneous consortia to work together internationally without barriers.'
        },
        {
            icon: <FaHandshake />,
            title: 'A Global Network of Funding Expertise',
            content: 'The company core area of expertise is EU-funded programmes ( Horizon Europe, Digital Europe, ERASMUS+, EIT, and programmes of EuropAid). In addition, the company also provides competent help to bilateral projects, international projects funded by national agencies such as BMBF, DFG, USIA and USAID. GIRAF PM experts also participated in projects launched within programmes supported by the International Bank of Reconstruction and Development (The World Bank).'
        },
    ]
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
            {features.map(feature =>{
                return <ContentCard icon={feature.icon} title={feature.title} content={feature.content}/>
            })}
        </div>
    </div>
  )
}

export default HomeMain