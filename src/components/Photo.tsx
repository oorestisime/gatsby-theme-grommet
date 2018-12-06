import React from 'react';
import Img from 'gatsby-image';

const Photo = ({ rehyped }) => <Img fluid={JSON.parse(rehyped)} />;

export default Photo;
