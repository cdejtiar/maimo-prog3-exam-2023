import React, { useState } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import FeaturesShows from '../components/FeaturesShows/FeaturesShows';

const HomeContainer = () => {

  return (
    <>
      <h1>Search your shows</h1>
      <Search />
      <FeaturesShows />
    </>
  );
};

export default HomeContainer;
