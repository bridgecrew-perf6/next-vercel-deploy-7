import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface props {
  children: React.ReactNode
}
export const MainLayout = ({children}:props): JSX.Element => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
     
          <Navbar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}

