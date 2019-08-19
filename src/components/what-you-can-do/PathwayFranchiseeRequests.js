import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import KeyFactCircle from '../shared/KeyStatCircle'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          pathwayFranchiseeRequestsTitle
          pathwayFranchiseeRequestsList {
            childMdx {
              body
            }
          }
          keyStatContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayFranchiseeRequests = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let {
    pathwayFranchiseeRequestsTitle,
    pathwayFranchiseeRequestsList,
    keyStatContent
  } = node
  return (
    <Section bg='lightGrey'>
      <Flex flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <Animation>
            <Subtitle color='blue'>{pathwayFranchiseeRequestsTitle}</Subtitle>
          </Animation>
          <Animation>
            <MDXRenderer>
              {pathwayFranchiseeRequestsList.childMdx.body}
            </MDXRenderer>
          </Animation>
        </Box>
        <Box width={[1, 1 / 2]}>
          <KeyFactCircle
            mainContent={keyStatContent.childMarkdownRemark.html}
          />
        </Box>
      </Flex>
    </Section>
  )
}

export default PathwayFranchiseeRequests
