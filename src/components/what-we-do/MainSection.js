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
          childContentfulWwdPageWwdMainSectionSubtitleTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulWwdPageWwdMainSectionTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let {
    childContentfulWwdPageWwdMainSectionSubtitleTextNode,
    childContentfulWwdPageWwdMainSectionTextNode
  } = node

  return <Box />
}

export default MainSection
