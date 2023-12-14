import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={`${styles['container']}`}>
      <div className={styles['logo']}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
      <div className={styles['navbar']}>
        <Link href={`../about`}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;
