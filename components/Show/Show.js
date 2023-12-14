import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Show.module.css';

const Show = ({ show }) => {
  const { id, image, name, genres, rating, language } = show;

  return (
    <div className={styles[`show`]}>
      <div>
        <Image src={image?.original} width={200} height={300} alt={name} />
      </div>
      <h3 className={styles[`cardName`]}>{name}</h3>
      <p>
        Rating:
        {rating?.average != null ? rating?.average : <span> Not ranked</span>}
      </p>
      <p>Language: {language}</p>
      <p>Genres: {genres?.join(', ')}</p>
      <Link href={`/show/${id}`} className={styles[`goTo`]}>
        Ver más sobre {name}
      </Link>
    </div>
  );
};

export default Show;
