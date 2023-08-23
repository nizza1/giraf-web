import React from 'react'
import Layout from '@/app/components/layout/layout'
import '@/app/globals.css'
import styles from './app.module.css'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main  className={styles.main}>
      <Component {...pageProps} />
      </main>
    </Layout>
  )
}