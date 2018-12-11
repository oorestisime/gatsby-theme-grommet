import React from 'react';
import Img from 'gatsby-image';
import { Box } from 'grommet';

const Photo = ({ rehyped }) => (
  <Box alignContent="center">
    <Img fluid={JSON.parse(rehyped)} />
  </Box>
);

export default Photo;
