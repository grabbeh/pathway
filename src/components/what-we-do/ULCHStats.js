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
          ulchStats {
            childContentfulStatisticTextTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

const UCLHStats = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let { ulchStats } = node

  return <Box />
}

export default UCLHStats
