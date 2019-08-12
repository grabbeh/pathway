import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../standard/Box'
import Text from '../standard/Text'
import Flex from '../standard/Flex'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayServicesListTitle
          pathwayServicesList {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayServicesList = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let { pathwayServicesListTitle, pathwayServicesList } = node

  return <Box />
}

export default PathwayServicesList
