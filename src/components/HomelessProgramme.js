import React from 'react'
import Box from './Box'
import { useStaticQuery, graphql } from 'gatsby'
import Circle from '../svg/Circle'
import Text from './Text'
import Flex from './Flex'
import MarkdownText from './MarkdownText'

const HomelessProgramme = () => {
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
          <Flex justifyContent='center'>
            <Box width={0.7}>
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
        </Box>
      </Flex>
    </Box>
  )
}

export default HomelessProgramme
