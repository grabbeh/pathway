import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, StandardSection as Section } from '../general/index'
import { Subtitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'
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
            <Subtitle text={pathwayFranchiseeRequestsTitle} color='blue' />
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
