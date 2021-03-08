import React from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesScatter from '../components/sections/FeaturesScatter';

const Home = () => {

  return (
    <>
      <FeaturesScatter invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;