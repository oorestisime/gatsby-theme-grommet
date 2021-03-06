import React from 'react';
import {
 ResponsiveContext, Box, Heading, Paragraph, Text, Anchor,
} from 'grommet';
import { Clock, Calendar } from 'grommet-icons';
import Img from 'gatsby-image';

import Tags from './Tags';


const Post = ({ post }) => (
  <Box align="start" fill pad="small">
    <Box fill="horizontal" elevation="small" round="xsmall">
      {post.frontmatter.photo && (
        <Box height="small">
          <Img fluid={post.frontmatter.photo.childImageSharp.fluid} />
        </Box>
      )}
      <Box pad="small">
        <Heading level="3" margin="none">
          {post.frontmatter.title}
        </Heading>
        <Box direction="row" gap="xsmall" align="center" margin={{ left: 'xsmall', top: 'xsmall' }}>
          <Calendar size="small" />
          <Text size="small">{post.frontmatter.date}</Text>
          <Clock size="small" />
          <Text size="small">{post.timeToRead} min read</Text>
        </Box>
        <Paragraph size="small" margin={{ horizontal: 'medium' }}>
          {post.excerpt}
          <Anchor href={post.frontmatter.path} label=" Read more" size="small" />
        </Paragraph>
        <ResponsiveContext.Consumer>
          {size => size !== 'small' && (
              <Box gap="xsmall" direction="row" wrap align="center">
                <Tags tags={post.frontmatter.tags} />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Box>
  </Box>
);

export default Post;
