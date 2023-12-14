import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import ShowContainer from '../../containers/ShowContainer';
import { useRouter } from 'next/router';

const Show = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Show Single</title>
        <meta name="description" content="Welcome to the machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={`main`}>
        <ShowContainer id={id} />
      </main>

      <footer className={`footer`}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by UMAI
        </a>
      </footer>
    </div>
  );
};

export default Show;
