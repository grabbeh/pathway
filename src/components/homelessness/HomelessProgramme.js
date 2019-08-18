import React from 'react'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Circle from '../../svg/Circle'
import IntroTitle from '../typography/IntroTitle'
import Flex from '../general/Flex'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          programmeText {
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
  let { programmeText, programmeTitle } = node
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
                  <IntroTitle color='white'>{programmeTitle}</IntroTitle>
                </Box>
                <Box>
                  <Box>
                    <Subtitle
                      color='white'
                      html={programmeText.childMarkdownRemark.html}
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
