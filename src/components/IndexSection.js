import React from 'react';
import {
 ResponsiveContext, Grid, Box, Heading,
} from 'grommet';

const IndexSection = ({ title, children }) => (
  <Box margin={{ horizontal: 'xlarge' }}>
    <Box align="center" alignContent="center">
      <Heading textAlign="center" size="medium">
        {title}
      </Heading>
    </Box>
    <ResponsiveContext.Consumer>
      {size => (
        <Grid columns={size || 'medium'} gap="small">
          {children}
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  </Box>
);

export default IndexSection;
