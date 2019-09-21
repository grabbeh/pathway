import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import WhatYouCanDoFact from '../../svg/WhatYouCanDoFact.js'

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
  const {
    pathwayFranchiseeRequestsTitle,
    pathwayFranchiseeRequestsList
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section pt={4} pb={0}>
      <Flex flexWrap='wrap'>
        <Box pr={3} width={[1, 1, 1 / 2]}>
          <Animation>
            <Subtitle color='blue'>{pathwayFranchiseeRequestsTitle}</Subtitle>
          </Animation>
          <Animation>
            <MDXRenderer>
              {pathwayFranchiseeRequestsList.childMdx.body}
            </MDXRenderer>
          </Animation>
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          <Box mt={[3, 0]} pl={[2, 5]}>
            <Animation>
              <WhatYouCanDoFact />
            </Animation>
          </Box>
        </Box>
      </Flex>
    </Section>
  )
}

export default PathwayFranchiseeRequests
