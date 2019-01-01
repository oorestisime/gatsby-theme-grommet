import React from 'react';
import NonStretchedImage from './NonStretchedImage';

const Photo = ({ rehyped }) => {
  const props = JSON.parse(rehyped);

  return <NonStretchedImage fluid={props} />;
};

export default Photo;
