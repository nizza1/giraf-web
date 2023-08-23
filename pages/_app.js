import React, { Fragment } from 'react'
import Layout from '@/app/components/layout/layout'
import '@/app/globals.css'
import styles from './app.module.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
   <>
    <Layout>
        <Component {...pageProps} />
    </Layout>  
   </>
      
   
  )
}


