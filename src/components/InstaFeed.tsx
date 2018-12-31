import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, ResponsiveContext, Box } from 'grommet';

const Instafeed = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(limit: 8, sort: { fields: [likes], order: DESC }) {
          edges {
            node {
              id
              likes
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResponsiveContext.Consumer>
        {size => size !== 'small' && (
          <Grid
            margin={{ horizontal: 'xsmall' }}
            gap="xxsmall"
            columns={{ count: 8, size: "auto" }}
            justify="center"
          >
            {data.allInstaNode.edges.map(img => (
              <Img key={img.node.id} fixed={img.node.localFile.childImageSharp.fixed} alt={img.node.id} />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    )}
  />
)

export default Instafeed;
