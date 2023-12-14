import React, { useState } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';

const HomeContainer = () => {

  return (
    <>
      <h1>Search your shows</h1>
      <Search />
      <Results />
    </>
  );
};

export default HomeContainer;
