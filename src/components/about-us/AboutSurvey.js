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
    <Box bg='green'>
      <Box maxWidth={1200}>
        <Box>
          <Circle size={75} />
        </Box>
        <Box pt={[5, 0]}>
          <Section>
            <Animation>
              <Text.span lineHeight='tagline' fontSize={5} fontWeight='bold' color='white'>
                {studyText.studyText}{' '}
              </Text.span>
              <Text.span lineHeight='tagline' fontSize={5} fontWeight='bold' color='grey'>
                {aboutStatistic.aboutStatistic}
              </Text.span>
            </Animation>
          </Section>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutSurvey
