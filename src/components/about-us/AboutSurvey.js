import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../typography/Text'
import Animation from '../animations/ScrollAnimation'
import Circle from '../../svg/Circle'
import Section from '../general/WideSection'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          aboutStatistic {
            aboutStatistic
          }
          studyText {
            studyText
          }
        }
      }
    }
  }
`
const AboutSurvey = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulAboutPage.edges[0]
  let { aboutStatistic, studyText } = node

  return (
    <Section bg='blue'>
      <Flex flexWrap='wrap'>
        <Box width={[1, 0.15]}>
          <Circle />
        </Box>
        <Box width={[1, 0.85]} px={[0, 4, 4]}>
          <Animation>
            <Text.span
              lineHeight={['medium', 'tagline']}
              fontSize={[4, 6]}
              fontWeight='bold'
              color='white'
            >
              {studyText.studyText}{' '}
            </Text.span>
            <Text.span
              color='grey'
              lineHeight={['medium', 'tagline']}
              fontSize={[4, 6]}
              fontWeight='bold'
            >
              {aboutStatistic.aboutStatistic}
            </Text.span>
          </Animation>
        </Box>
      </Flex>
    </Section>
  )
}

export default AboutSurvey
