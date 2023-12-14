import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import Image from 'next/image';
import dayjs from 'dayjs';

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
      {!showLoading && (
        <div>
          <div>
            <Image
              src={singleShowData.image?.original}
              width={100}
              height={200}
              alt={singleShowData.name}
            />
          </div>
          <h2>{singleShowData.name}</h2>
          <p>Language: {singleShowData.language}</p>
          <p>Status: {singleShowData.status}</p>
          <p>
            Ended:
            {singleShowData.ended ? (
              dayjs(singleShowData.ended).format('YYYY/MM/DD')
            ) : (
              <span> Ongoing</span>
            )}
          </p>
          <p>
            Rating:
            {singleShowData.rating?.average != null ? (
              singleShowData.rating?.average
            ) : (
              <span> Not ranked</span>
            )}
          </p>
          <p>Summary: {singleShowData.summary}</p>
        </div>
      )}
      {showLoading && <p>Loading...</p>}
    </>
  );
};

export default ShowContainer;
