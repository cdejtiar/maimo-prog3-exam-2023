import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import Image from 'next/image';
import loader from '../public/assets/loader.svg';
import dayjs from 'dayjs';
import styles from './ShowContainer.module.css';

const ShowContainer = ({ id }) => {
  const { singleShowData, handleGetSingleShow, showLoading } = useAppContext();
  useEffect(() => {
    if (id) {
      handleGetSingleShow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {/* Todo esto podría haberlo puesto en otro componente, pero lo dejo acá para tenerlo a mano*/}
      {!showLoading && (
        <div className={styles[`containerShow`]}>
          <div>
            <Image
              src={singleShowData.image?.original}
              width={200}
              height={300}
              alt={singleShowData.name}
            />
          </div>
          <h2>{singleShowData.name}</h2>
          <p>Language: {singleShowData.language}</p>
          <p>Status: {singleShowData.status}</p>
          <p>
            Ended: <span> </span>
            {singleShowData.ended ? (
              dayjs(singleShowData.ended).format('YYYY/MM/DD')
            ) : (
              <span>Ongoing</span>
            )}
          </p>
          <p>
            Rating: <span> </span>
            {singleShowData.rating?.average != null ? (
              singleShowData.rating?.average
            ) : (
              <span>Not ranked</span>
            )}
          </p>
          <p>Summary: {singleShowData.summary}</p>
        </div>
      )}
      {showLoading && (
        <div className={styles[`loader`]}>
          <Image src={loader} alt="Loader" width={100} height={100} />
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default ShowContainer;
