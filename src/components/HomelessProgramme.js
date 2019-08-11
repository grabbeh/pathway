import React from 'react'
import Box from './Box'
import { useStaticQuery, graphql } from 'gatsby'
import Circle from '../svg/Circle'
import Text from './Text'
import Flex from './Flex'
import MarkdownText from './MarkdownText'
import Animation from './ScrollAnimation'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          childContentfulHomelessnessPageProgrammeTextTextNode {
            childMarkdownRemark {
              html
            }
          }
          programmeTitle
        }
      }
    }
  }
`

const HomelessProgramme = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulHomelessnessPage.edges[0]
  let {
    childContentfulHomelessnessPageProgrammeTextTextNode,
    programmeTitle
  } = node
  return (
    <Box>
      <Flex flexWrap='wrap'>
        <Box bg='greyer' width={[1, 1 / 3]}>
          <Circle />
        </Box>
        <Box py={5} bg='green' width={[1, 2 / 3]}>
          <Animation>
            <Flex justifyContent='center'>
              <Box p={[3, 0]} width={[1, 0.7]}>
                <Box mb={3}>
                  <Text color='white' fontSize={3}>
                    {programmeTitle}
                  </Text>
                </Box>
                <Box>
                  <Box>
                    <MarkdownText
                      fontWeight='subtitle'
                      fontSize={4}
                      color='white'
                      lineHeight='subtitle'
                      html={
                        childContentfulHomelessnessPageProgrammeTextTextNode
                          .childMarkdownRemark.html
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Animation>
        </Box>
      </Flex>
    </Box>
  )
}

export default HomelessProgramme
