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
          childContentfulWwdPageWwdCaseStudySubtitleTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulWwdPageWwdCaseStudyTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const CaseStudy = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let {
    childContentfulWwdPageWwdCaseStudySubtitleTextNode,
    childContentfulWwdPageWwdCaseStudyTextNode
  } = node

  return <Box />
}

export default CaseStudy
