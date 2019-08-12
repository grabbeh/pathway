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
