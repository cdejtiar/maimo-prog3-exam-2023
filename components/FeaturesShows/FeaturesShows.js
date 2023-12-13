import React from 'react';
import grid from '../../styles/grid.module.css';
import Image from 'next/image';
import { useAppContext } from '../../contexts/AppContext';

const FeaturedShows = () => {
  const { showsData } = useAppContext();
  return (
    <section className={`${grid['col_3']}`}>
      <h2>Search results</h2>
      <div>
        {showsData &&
          showsData.map((show) => (
            <div key={show.show.id}>
              <h2>{show.show.name}</h2>
              <Image
                src={show.show.image?.medium}
                alt=""
                width={'100'}
                height={'100'}
              />
              <button onClick="handleGetShow(show.show.id)">
                Ver más sobre {show.show.name}
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FeaturedShows;
