'use client'
 
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header/Header" 
import Dashboard from './dashboard/page';
import TextForm from './text-form/page'
import MediaForm from "./media-form/page"
import CreateAd from './create-ad/page'

export default function Home() {


  return (
    <main className={styles.main}>
  
  <Header/>
  {/* <TextForm/> */}
  {/* <MediaForm/> */}
  <Dashboard/>
  {/* <CreateAd/> */}
    </main>
  )
}
