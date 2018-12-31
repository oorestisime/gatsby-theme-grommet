import React from 'react';
import { Grommet } from 'grommet';

import data from '../config/data';
import SiteContext from '../context';
import { customTheme, GlobalTheme } from '../config/theme';
import Footer from './Footer';
import InstaFeed from './InstaFeed';

const Layout = ({ children }) => (
  <SiteContext.Provider value={data}>
    <Grommet theme={customTheme}>
      <GlobalTheme />
      {children}
      <InstaFeed />
      <Footer />
    </Grommet>
  </SiteContext.Provider>
);

export default Layout;
