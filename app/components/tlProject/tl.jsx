import React from 'react'
import styles from './style.module.css'
const Tl = ({year}) => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.container}>
            <div className={styles.time}>
                <p>{year}</p>
            </div>
        </div>
    </div>
  )
}

export default Tl