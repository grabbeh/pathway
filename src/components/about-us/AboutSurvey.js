import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../typography/Text'
import Animation from '../animations/ScrollAnimation'
import Section from '../general/WideSection'
import Flex from '../general/Flex'
import KeyStatsStamp from '../../svg/KeyStatsStamp'

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
  const {
    aboutStatistic,
    studyText
  } = data.allContentfulAboutPage.edges[0].node

  return (
    <Section bg='blue'>
      <Flex flexWrap='wrap'>
        <Box width={[1, 0.15]}>
          <KeyStatsStamp />
        </Box>
        <Box my={[0, 5]} width={[1, 0.85]}>
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
