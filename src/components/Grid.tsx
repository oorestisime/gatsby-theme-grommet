import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import { ResponsiveContext, Grid } from 'grommet';

type GridProps = {
  children: ReactNode[]
}

const GridComponent: React.SFC<GridProps> = props => (
  <ResponsiveContext.Consumer>
    {size => (
      <Grid
        align="start"
        columns={size !== 'small' && { count: 'fill', size: 'medium' }}
        gap="medium"
      >
        {props.children.filter(child => child !== '\n').map(child => (
          <Img fluid={JSON.parse(child.props.rehyped)} />
        ))}
      </Grid>
    )}
  </ResponsiveContext.Consumer>
);

export default GridComponent;
