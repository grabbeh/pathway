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
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let {
    nextStepsTitle,
    nextStepsSubtitle,
    nextStepsContent,
    nextSteps,
    queriesTitle
  } = node
  return (
    <Flex flexWrap='wrap'>
      <Box bg='lightGrey' p={[3, 5]} width={[1, 1 / 2]}>
        <Animation>
          <SectionTitle>{nextStepsTitle}</SectionTitle>
        </Animation>
        <Animation>
          <BodyText html={nextStepsContent.childMarkdownRemark.html} />
        </Animation>
        <Animation>
          <Subtitle color='green'>{nextStepsSubtitle}</Subtitle>
        </Animation>
        <Animation>
          <Box>
            {nextSteps.map((step, i) => (
              <Box key={i} mb={3}>
                <Text color='green'>Step {i + 1}</Text>
                <Subtitle color='black'>{step.step}</Subtitle>
              </Box>
            ))}
          </Box>
        </Animation>
      </Box>
      <Box bg='green' p={[3, 5]} width={[1, 1 / 2]}>
        <Animation>
          <Subtitle color='white'>{queriesTitle}</Subtitle>
        </Animation>
      </Box>
    </Flex>
  )
}

export default PathwayFranchiseeRequests
