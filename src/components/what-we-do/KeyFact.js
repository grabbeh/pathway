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
