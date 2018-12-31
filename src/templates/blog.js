import React from 'react';
import { graphql } from 'gatsby';
import {
 Box, Anchor, Text, Heading,
} from 'grommet';
import { History } from 'grommet-icons';
import rehypeReact from 'rehype-react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Tags from '../components/Tags';
import Grid from '../components/Grid';
import Photo from '../components/Photo';
import NonStretchedImage from '../components/NonStretchedImage';

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Anchor,
    'rehype-image': Photo,
    grid: Grid,
  },
}).Compiler;


const BlogPage = ({ data: { markdownRemark } }) => (
  <Layout>
    <Header />
    <Box direction="row" justify="center">
      <Box width="xlarge" margin={{ horizontal: 'medium', vertical: 'small' }}>
        <Heading alignSelf="center" level="3">
          {markdownRemark.frontmatter.title}
        </Heading>
        {markdownRemark.frontmatter.photo && (
          <NonStretchedImage fluid={markdownRemark.frontmatter.photo.childImageSharp.fluid} />
        )}
        {renderAst(markdownRemark.htmlAst)}
        <Box direction="row-responsive" justify="between" margin={{ top: 'medium' }}>
          <Box align="center" direction="row" gap="xsmall">
            <History size="small" />
            <Text size="small">{markdownRemark.frontmatter.date}</Text>
          </Box>
          <Tags tags={markdownRemark.frontmatter.tags} />
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default BlogPage;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      timeToRead
      frontmatter {
        tags
        date(formatString: "MMMM DD, YYYY")
        title
        photo {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              aspectRatio
              src
              sizes
              srcSet
              presentationWidth
            }
          }
        }
      }
    }
  }
`;
