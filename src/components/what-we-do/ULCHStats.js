import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../general/Text'
import Flex from '../general/Flex'
import CenterSection from '../general/CenterSection'
import Animation from '../animations/ScrollAnimation'
import SectionTitle from '../general/SectionTitle'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          ulchStatsTitle
          ulchStats {
            figure
            text {
              text
            }
          }
        }
      }
    }
  }
`

const UCLHStats = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let { ulchStatsTitle, ulchStats } = node

  return (
    <Box bg='green'>
      <CenterSection>
        <Animation>
          <SectionTitle color='white'>{ulchStatsTitle}</SectionTitle>
        </Animation>
        <Box mt={3}>
          <Animation>
            <Flex justifyContent='space-around' flexWrap='wrap'>
              {ulchStats.map(({ figure, text }) => (
                <Box width={[1, 1 / 3]}>
                  <Stat figure={figure} text={text.text} />
                </Box>
              ))}
            </Flex>
          </Animation>
        </Box>
      </CenterSection>
    </Box>
  )
}

export default UCLHStats

const Stat = ({ figure, text }) => (
  <Box>
    <Text fontSize={9} color='white' fontWeight='heavy'>
      {figure}%
    </Text>
    <Text.span mr={2} fontWeight='subtitle' fontSize={3} color='yellow'>
      reduction
    </Text.span>
    <Text.span fontWeight='subtitle' fontSize={3} color='white'>
      {text}
    </Text.span>
  </Box>
)
