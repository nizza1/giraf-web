import React from 'react'

import styles from './styles.module.css'

const Titlesmal = ({text}) => {
  return (
    <h2 className={styles.title}>{ text }</h2>
  )
}

export default Titlesmal