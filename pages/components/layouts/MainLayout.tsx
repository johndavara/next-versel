import styles from './MainLayout.module.css';
import Head from 'next/head';
import  { Navbar }  from '../Navbar';
type Props = {
  children?: React.ReactNode
};
const MainLayout :  React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Johnnatan</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="johnnatan,vargas,curso,next.js" />
          </Head>
    
          <Navbar></Navbar>
    
          <main className={styles.main}>
           { children}
          </main>
    
    
        </div>
      )
}

export default MainLayout