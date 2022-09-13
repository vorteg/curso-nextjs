import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar"

export const MainLayout = ({ children, childTitle }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>{childTitle} - Vic</title>
        <meta name="description" content={childTitle + " " + "page"} />
        <meta name="keywords " content="proband,qupi,etc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}

      </main>


    </div>
  )
};