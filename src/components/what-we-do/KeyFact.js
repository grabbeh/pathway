import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../general/Text'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          childContentfulWwdPageWwgKeyFactTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const KeyFacts = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let { childContentfulWwdPageWwgKeyFactTextNode } = node

  return <Box />
}

export default KeyFacts
