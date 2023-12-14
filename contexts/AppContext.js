import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  const [showsData, setShowsData] = useState(defaultValue);
  const [singleShowData, setSingleShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const handleGetShows = async (query) => {
    try {
      setLoading(true);
      const request = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      setShowsData(request.data);
      setLoading(false);
    } catch (error) {
      console.log('ERROR EN EL CATCH', error);
    }
  };

  const handleGetSingleShow = async (id) => {
    try {
      setShowLoading(true);
      const request = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setSingleShowData(request.data);
      setShowLoading(false);
    } catch (error) {
      console.log('ERROR EN EL CATCH', error);
    }
  };

  /*useEffect(() => {
    handleGetShows();
  }, []);*/

  return (
    <AppContext.Provider
      value={{
        showsData,
        handleGetShows,
        loading,
        singleShowData,
        handleGetSingleShow,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppProvider, AppContext };
