import React from 'react'

import PageTitle from '@/app/components/pagescomponents/pageTitle/pageTitle'
import pageStyles from '../pages.module.css'

const Services = () => {
  return (
    <div className={pageStyles.outContainer}>
    <div className={pageStyles.innerContainer}>
        <PageTitle text='Services'/>
    </div>
  </div>
  )
}

export default Services