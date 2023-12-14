import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import img from '../public/assets/foto.png';
import styles from './about.module.css';

const about = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className={styles[`container`]}>
          <Image
            className={styles[`img`]}
            src={img}
            alt="Cami"
            width={300}
            height={215}
          />
          <h1>Camila Dejtiar</h1>
          <h2>Estudiante de Licenciatura en Tecnología Multimedial</h2>
        </div>
      </section>
    </>
  );
};

export default about;
