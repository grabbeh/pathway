import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import SectionTitle from '../typography/SectionTitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Text from '../typography/Text'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulContactDetails {
      edges {
        node {
          name
          title
          emailAddress
          phoneNumber
        }
      }
    }
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          nextStepsTitle
          nextStepsSubtitle
          nextStepsContent {
            childMarkdownRemark {
              html
            }
          }
          nextSteps {
            step
          }
          queriesTitle
        }
      }
    }
  }
`

const PathwayFranchiseeRequests = () => {
  const data = useStaticQuery(query)
  const {
    nextStepsTitle,
    nextStepsSubtitle,
    nextStepsContent,
    nextSteps,
    queriesTitle
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  const {
    name,
    title,
    emailAddress,
    phoneNumber
  } = data.allContentfulContactDetails.edges[0].node
  return (
    <Box>
      <Box mx={[3, 6]} maxWidth={[null, 800, 1000]}>
        <Animation>
          <SectionTitle>{nextStepsTitle}</SectionTitle>
        </Animation>
        <Animation>
          <BodyText html={nextStepsContent.childMarkdownRemark.html} />
        </Animation>
        <Box mb={3}>
          <Animation>
            <Subtitle color='blue'>{nextStepsSubtitle}</Subtitle>
          </Animation>
        </Box>
      </Box>
      <Flex flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <Box pr={4} ml={[3, 6]}>
            <Animation>
              {nextSteps.map((step, i) => (
                <Box key={i} mb={4}>
                  <Text fontSize={3} color='green'>
                    Step {i + 1}
                  </Text>
                  <Subtitle>{step.step}</Subtitle>
                </Box>
              ))}
            </Animation>
          </Box>
        </Box>
        <Box bg='green' p={[3, 5]} width={[1, 1 / 2]}>
          <Animation>
            <Box mb={4}>
              <Subtitle color='white'>{queriesTitle}</Subtitle>
            </Box>
            <Text fontSize={4} fontWeight='bold' color='yellow'>
              {name}
            </Text>
            <Text mb={3} fontSize={4} color='white'>
              {title}
            </Text>
            <Box mb={3}>
              <Text.span fontSize={4} color='white' fontWeight='bold'>
                Email:
              </Text.span>{' '}
              <Text.span fontSize={4} color='white'>
                {emailAddress}
              </Text.span>
            </Box>
            <Box>
              <Text.span fontSize={4} color='white' fontWeight='bold'>
                M:
              </Text.span>
              <Text.span fontSize={4} color='white'>
                {phoneNumber}
              </Text.span>
            </Box>
          </Animation>
        </Box>
      </Flex>
    </Box>
  )
}

export default PathwayFranchiseeRequests
