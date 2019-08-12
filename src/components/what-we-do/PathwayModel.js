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
          pathwayModelTitle
          childContentfulWwdPageWwdPathwayModelSubtitleTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulWwdPageWwdPathwayModelTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulWwdPageWwdPathwayModelPartTwoTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayModel = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let {
    pathwayModelTitle,
    childContentfulWwdPageWwdPathwayModelSubtitleTextNode,
    childContentfulWwdPageWwdPathwayModelTextNode,
    childContentfulWwdPageWwdPathwayModelPartTwoTextNode
  } = node

  return <Box />
}

export default PathwayModel
