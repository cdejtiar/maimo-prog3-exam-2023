import React, { useState } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';

const HomeContainer = () => {
  return (
    <>
      <Search />
      <Results />
    </>
  );
};

export default HomeContainer;
