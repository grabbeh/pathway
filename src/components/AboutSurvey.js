import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from './general/Box'
import Text from './general/Text'
import Flex from './general/Flex'
import Animation from './ScrollAnimation'
import Circle from '../svg/Circle'

const query = graphql`
  query {
    allContentfulAboutPageStudyTextTextNode {
      edges {
        node {
          studyText
        }
      }
    }
    allContentfulAboutPageAboutStatisticTextNode {
      edges {
        node {
          aboutStatistic
        }
      }
    }
  }
`
const AboutSurvey = () => {
  const data = useStaticQuery(query)
  let { studyText } = data.allContentfulAboutPageStudyTextTextNode.edges[0].node
  let {
    aboutStatistic
  } = data.allContentfulAboutPageAboutStatisticTextNode.edges[0].node

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
                  {studyText}{' '}
                </Text.span>
                <Text.span fontSize={4} fontWeight='bold' color='yellow'>
                  {aboutStatistic}
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
