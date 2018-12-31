import React from 'react';
import NonStretchedImage from './NonStretchedImage';

type PhotoProps = {
  rehyped: string
}


const Photo: React.SFC<PhotoProps> = ({ rehyped }) => {
  const props = JSON.parse(rehyped);

  return <NonStretchedImage fluid={props}/>;
}

export default Photo;
