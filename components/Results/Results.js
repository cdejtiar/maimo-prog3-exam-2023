import React from 'react';
import styles from './Results.module.css';
import { useAppContext } from '../../contexts/AppContext';
import Show from '../Show/Show';

const Results = () => {
  const { showsData, loading } = useAppContext();

  return (
    <div className={styles.results_container}>
      <h2>Search results</h2>
      <div className={`grid`}>
        {!loading &&
          showsData &&
          showsData.map((show, index) => (
            <div className={`col_4`} key={index}>
              <Show show={show.show} />
            </div>
          ))}
        ;{loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Results;
