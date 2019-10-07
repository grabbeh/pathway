import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '../general'
import { Subtitle } from '../typography'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayServicesListTitle
          pathwayServicesList {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const PathwayServicesList = () => {
  const data = useStaticQuery(query)
  const {
    pathwayServicesListTitle,
    pathwayServicesList
  } = data.allContentfulWwdPage.edges[0].node
  return (
    <Box>
      <Subtitle text={pathwayServicesListTitle} color='green' />
      <MDXRenderer>{pathwayServicesList.childMdx.body}</MDXRenderer>
    </Box>
  )
}

export default PathwayServicesList
