import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Subtitle from '../general/Subtitle'
import BodyText from '../general/BodyText'

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
  let { node } = data.allContentfulWwdPage.edges[0]
  let { pathwayServicesListTitle, pathwayServicesList } = node

  return (
    <Box px={[3, 5]}>
      <Subtitle color='green'>{pathwayServicesListTitle}</Subtitle>
      <BodyText html={pathwayServicesList.childMarkdownRemark.html} />
    </Box>
  )
}

export default PathwayServicesList
