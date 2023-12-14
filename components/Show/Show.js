import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Show = ({ show }) => {
  const { id, image, name, genres, rating, language } = show;

  return (
    <div>
      <div>
        <Image src={image?.original} width={100} height={200} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>Rating: {rating?.average}</p>
      <p>Language: {language}</p>
      <p>Genres: {genres?.join(', ')}</p>
      <Link href={`/show/${id}`}>Ver más sobre {name}</Link>
    </div>
  );
};

export default Show;
