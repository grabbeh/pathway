import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../typography/Text'
import Animation from '../animations/ScrollAnimation'
import Circle from '../../svg/Circle'
import Section from '../general/StandardSection'

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
    <Box position='relative' bg='green'>
      <Box position='absolute' top={[40, 40, 75]} left={20}>
        <Circle />
      </Box>
      <Section>
        <Box mt={[6, 100, 0]}>
          <Animation>
            <Text.span
              lineHeight='tagline'
              fontSize={6}
              fontWeight='bold'
              color='white'
            >
              {studyText.studyText}{' '}
            </Text.span>
            <Text.span
              lineHeight='tagline'
              fontSize={6}
              fontWeight='bold'
              color='grey'
            >
              {aboutStatistic.aboutStatistic}
            </Text.span>
          </Animation>
        </Box>
      </Section>
    </Box>
  )
}

export default AboutSurvey
