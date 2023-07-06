import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magnam possimus pariatur! Assumenda quibusdam architecto dolorem necessitatibus quia, sit recusandae corporis esse possimus dignissimos, alias dicta harum aperiam excepturi reprehenderit.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magnam possimus pariatur! Assumenda quibusdam architecto dolorem necessitatibus quia, sit recusandae corporis esse possimus dignissimos, alias dicta harum aperiam excepturi reprehenderit.</p>

        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
