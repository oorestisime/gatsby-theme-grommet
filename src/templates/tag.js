import React from 'react';
import { Box, ResponsiveContext, Grid } from 'grommet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';

const Tag = ({ pageContext: { title, posts } }) => (
  <Layout>
    <Header title={`Tag: ${title}`} />
    <Box margin={{ horizontal: 'large' }}>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid align="start" columns={size || 'medium'} gap="medium">
            {posts.map(post => (
              <Post key={post.frontmatter.path} post={post} />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Box>
  </Layout>
);

export default Tag;
