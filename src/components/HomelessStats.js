import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import Animation from './ScrollAnimation'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          statisticsHolder {
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

const HomelessStats = () => {
  const data = useStaticQuery(query)
  let {
    node: { statisticsHolder }
  } = data.allContentfulHomelessnessPage.edges[0]

  return (
    <Box>
      <Flex flexWrap='wrap'>
        {statisticsHolder.map(({ figure, text: { text } }, i) => (
          <Box mb={[0, 3]} width={[1, 1 / 2, 1 / 3]} key={i}>
            <Animation>
              <Box mr={4}>
                <Flex flexWrap='wrap'>
                  <Flex flex='0 1'>
                    <Box mr={2}>
                      <Text color='blue' fontSize={7} fontWeight='heavy'>
                        {figure}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex flex='1'>
                    <Box mt={3}>
                      <Text lineHeight='text' fontSize={3}>
                        {text}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Animation>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default HomelessStats
