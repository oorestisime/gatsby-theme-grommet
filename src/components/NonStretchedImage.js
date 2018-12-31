import React from 'react';
import Img from 'gatsby-image';

const NonStretchedImage = ({ fluid }) => (
  <Img
    fluid={fluid}
    style={{
      maxWidth: fluid.presentationWidth,
      margin: '0 auto',
    }}
  />
);

export default NonStretchedImage;
