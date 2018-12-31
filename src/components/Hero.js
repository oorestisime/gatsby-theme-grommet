import React from 'react';
import Img from 'gatsby-image';
import {
 Box, Heading, ResponsiveContext, Paragraph,
} from 'grommet';
import SiteContext from '../context';

const Hero = ({ image, background }) => (
    <SiteContext.Consumer>
      {site => (
      <Box height="100vh" background={background} align="center" justify="center">
        <ResponsiveContext.Consumer>
          {size => (
            <Box margin="medium" direction={size === 'small' ? 'column' : 'row'} gap="medium">
              <Box margin={{ vertical: `${size === 'small' ? 'none' : size}` }} alignSelf="center">
                <Img alt="avatar" fixed={image} />
              </Box>
              <Box alignSelf="center">
                <Heading>
                  <strong>{site.hero.title}</strong>
                </Heading>
                <Paragraph key="dev" margin={{ bottom: 'small' }}>
                  {site.hero.subtitle}
                </Paragraph>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Box>
    )}
    </SiteContext.Consumer>
  );

export default Hero;
