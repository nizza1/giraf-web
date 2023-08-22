import React from 'react'


import styles from './styles.module.css'
const ContentCard = ({icon, title , content}) => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.iconTitleContainer}>
        <h1 className={styles.icon}>{icon}</h1>
        <h1 className={styles.title}>{title}</h1>
        </div>
        
        <p className={styles.text}>{content}</p>
    </div>
  )
}

export default ContentCard