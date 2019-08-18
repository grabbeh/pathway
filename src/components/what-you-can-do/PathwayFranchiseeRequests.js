import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          pathwayFranchiseeRequestsTitle
          pathwayFranchiseeRequestsList {
            childMarkdownRemark {
              html
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
            <BodyText
              html={pathwayFranchiseeRequestsList.childMarkdownRemark.html}
            />
          </Animation>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Box
            ml={4}
            pt={100}
            px={4}
            height={450}
            width={450}
            bg='yellow'
            borderRadius={5}
          >
            <Animation>
              <Subtitle
                textAlign='center'
                color='white'
                html={keyStatContent.childMarkdownRemark.html}
              />
            </Animation>
          </Box>
        </Box>
      </Flex>
    </Section>
  )
}

export default PathwayFranchiseeRequests
