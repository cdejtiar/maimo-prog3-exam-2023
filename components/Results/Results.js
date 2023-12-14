import React from 'react';
import styles from './Results.module.css';
import { useAppContext } from '../../contexts/AppContext';
import Show from '../Show/Show';
import loader from '../../public/assets/loader.svg';
import Image from 'next/image';

const Results = () => {
  const { showsData, loading } = useAppContext();

  return (
    <div className={styles.results_container}>
      <h2 className={styles[`sectionTitle`]}>Results</h2>
      {loading && (
        <div className={styles[`loader`]}>
          <Image src={loader} alt="Loader" width={100} height={100} />
          <p>Loading...</p>
        </div>
      )}

      <div className={`grid`}>
        {!loading &&
          showsData &&
          showsData.map((show, index) => (
            <div className={`col_4`} key={index}>
              <Show show={show.show} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Results;
