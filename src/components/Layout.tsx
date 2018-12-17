import React, { ReactChild } from 'react'
import { Grommet } from 'grommet'

import data from '../data'
import SiteContext from '../context'
import { customTheme, GlobalTheme } from '../theme'
import Footer from './Footer'
import InstaFeed from './InstaFeed';

type LayoutProps = {
  children: ReactChild[]
}

const Layout: React.SFC<LayoutProps> = props => (
  <SiteContext.Provider value={data}>
    <Grommet theme={customTheme}>
      <GlobalTheme />
      {props.children}
      <InstaFeed />
      <Footer />
    </Grommet>
  </SiteContext.Provider>
)

export default Layout
