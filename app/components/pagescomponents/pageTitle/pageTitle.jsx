import React from 'react'

import styles from './styles.module.css'

const PageTitle = ({text}) => {
  return (
    <div className={styles.titleContainer}>
         <h1 className={styles.title}>{text}</h1>
         <div className={styles.line}></div>
    </div>
   
  )
}

export default PageTitle