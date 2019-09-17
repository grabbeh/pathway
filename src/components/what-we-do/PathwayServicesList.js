import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
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
    <Box px={[3, 5]}>
      <Subtitle color='green'>{pathwayServicesListTitle}</Subtitle>
      <MDXRenderer>{pathwayServicesList.childMdx.body}</MDXRenderer>
    </Box>
  )
}

export default PathwayServicesList
