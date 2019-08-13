import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../general/Text'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'
import Circle from '../../svg/Circle'

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
          <Flex justifyContent='center'>
            <Box mx={[3, 6]} maxWidth={800} py={5}>
              <Animation>
                <Text.span fontSize={4} fontWeight='bold' color='white'>
                  {studyText.studyText}{' '}
                </Text.span>
                <Text.span fontSize={4} fontWeight='bold' color='yellow'>
                  {aboutStatistic.aboutStatistic}
                </Text.span>
              </Animation>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutSurvey
