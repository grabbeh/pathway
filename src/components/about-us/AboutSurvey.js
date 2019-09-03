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
    <Box position='relative' bg='blue'>
      <Box position='absolute' top={[40, 40, 40]} left={20}>
        <Circle />
      </Box>
      <Section>
        <Box px={[0, 4, 4]} mt={[6, 100, 5]}>
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
      </Section>
    </Box>
  )
}

export default AboutSurvey
