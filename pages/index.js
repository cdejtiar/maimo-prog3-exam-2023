import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import HomeContainer from '../containers/HomeContainer';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Examen Prog 2023</title>
        <meta name="description" content="Exam Practice" />
        <link rel="icon" href="/streaming logo.svg" />
      </Head>
      <Navbar />

      <main className={`main`}>
        <Hero />
        <HomeContainer />
      </main>

      <footer className={`footer`}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by UMAI
        </a>
      </footer>
    </div>
  );
}
