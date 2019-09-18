import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'
import BodyText from '../typography/BodyText'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          statisticsHolder {
            figure
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

const HomelessStats = () => {
  const data = useStaticQuery(query)
  const { statisticsHolder } = data.allContentfulHomelessnessPage.edges[0].node
  return (
    <Box>
      <Flex flexWrap='wrap'>
        {statisticsHolder.map(
          (
            {
              figure,
              text: {
                childMarkdownRemark: { html }
              }
            },
            i
          ) => (
            <Box mb={[0, 3]} width={[1, 1 / 2, 1 / 3]} key={i}>
              <Animation>
                <Box mr={4}>
                  <Flex flexWrap='wrap'>
                    <Flex flex='0 1'>
                      <Box mr={2}>
                        <Text color='blue' fontSize={8} fontWeight='heavy'>
                          {figure}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex flex='1'>
                      <Box mt={3}>
                        <BodyText html={html} />
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Animation>
            </Box>
          )
        )}
      </Flex>
    </Box>
  )
}

export default HomelessStats
