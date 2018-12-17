import React from 'react'
import { Box, Paragraph, Button } from 'grommet'
import { graphql, push } from 'gatsby'

import Layout from '../components/Layout'
import GithubRepo from '../components/GithubRepo'
import Post from '../components/Post'
import IndexSection from '../components/IndexSection'
import Hero from '../components/Hero'

type IndexData = {
  data: {
    avatar: {
      childImageSharp: {
        fixed: object
      }
    }
    github: {
      viewer: {
        repositories: {
          edges: object[]
        }
        repositoriesContributedTo: {
          edges: object[]
        }
      }
    }
    allMarkdownRemark: {
      edges: object[]
    }
  }
}

const IndexPage: React.SFC<IndexData> = ({ data }) => (
  <Layout>
    <Hero image={data.avatar.childImageSharp.fixed} />
    <Box background="brand">
      <Box margin={{ horizontal: 'xsmall' }} align="center" alignSelf="stretch" gridArea="header">
        <Paragraph color="white" size="large" textAlign="center">
          This is a personal website / portfolio / blog using the new theming feature of
          Gatsby and the awesome UI library Grommet. This theme is using markdown for the blogging part, typescript and it
        </Paragraph>
        <Paragraph margin={{ top: 'none' }} color="white" size="large" textAlign="center">
          The example website showcases some of the theme's capabilities such as
          integrating images with gatsby-image, showcasing post cards, rendering github repositories,
          SEO optimization with Helmet.
        </Paragraph>
      </Box>
    </Box>
    <IndexSection title="Repositories examples">
      {data.github.viewer.repositories.edges.map(repo => (
        <GithubRepo key={repo.node.name} repo={repo} />
      ))}
    </IndexSection>
    <IndexSection title="Blog">
      {data.allMarkdownRemark.edges.map(post => (
        <Post key={post.node.frontmatter.path} post={post.node} />
      ))}
    </IndexSection>
    <Box fill align="center" justify="center" margin={{ vertical: 'small' }}>
      <Button onClick={() => push('/blog')} label="Load more" />
    </Box>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fixed(width: 190, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(limit: 4, sort: { order: DESC, fields: frontmatter___date }) {
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
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
    github {
      viewer {
        repositories(first: 6, orderBy: { direction: DESC, field: STARGAZERS }) {
          edges {
            node {
              isArchived
              stargazers {
                totalCount
              }
              forkCount
              name
              description
              primaryLanguage {
                name
              }
              url
            }
          }
        }
      }
    }
  }
`
export default IndexPage
