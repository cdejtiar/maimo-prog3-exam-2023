import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import img from '../public/assets/foto.png';

const about = () => {
  return (
    <>
      <Navbar />
      <section>
        <Image src={img} alt="Cami" width={72} height={16} />
        <h1>Camila Dejtiar</h1>
        <h2>Estudiante de Licenciatura en tecnología Multimedial</h2>
      </section>
    </>
  );
};

export default about;
