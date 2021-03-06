import React from 'react';
import { graphql } from 'gatsby';
import { Box, ResponsiveContext, Grid } from 'grommet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';


const BlogPage = ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <Header title="Blog" />
    <Box margin={{ horizontal: 'large' }}>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid align="start" columns={size || 'medium'} gap="medium">
            {allMarkdownRemark.edges.map(post => (
              <Post key={post.node.frontmatter.path} post={post.node} />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Box>
  </Layout>
);

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            photo {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
                  aspectRatio
                  src
                  sizes
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
