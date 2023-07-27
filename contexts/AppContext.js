import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  const [showsData, setShowsData] = useState(defaultValue);
  const [singleShowData, setSingleShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const handleGetShows = async (query) => {
    console.log(query);
  };

  const handleGetSingleShow = async (id) => {
    console.log(id);
  };

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
