import React from 'react'
import CenterSection from '../general/CenterSection'
import Text from '../typography/Text'
import Box from '../general/Box'
import Flex from '../general/Flex'
import { useStaticQuery, graphql } from 'gatsby'
import Animation from '../animations/ScrollAnimation'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import Tagline from '../typography/Tagline'
import BodyText from '../typography/BodyText'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          letterIntroTitle
          letterTitle
          letterTagline {
            childMarkdownRemark {
              html
            }
          }
          letterContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const Letter = () => {
  const data = useStaticQuery(query)

  let { node } = data.allContentfulHomePage.edges[0]
  let { letterIntroTitle, letterTitle, letterTagline, letterContent } = node
  return (
    <CenterSection>
      <Animation>
        <Box mb={4}>
          <IntroTitle textAlign='center' color='blue'>
            {letterIntroTitle}
          </IntroTitle>
          <SectionTitle textAlign='center'>{letterTitle}</SectionTitle>
        </Box>
        <Flex justifyContent='space-between' flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <Box mt={-4} mr={[0, 4]}>
              <Tagline
                html={letterTagline.childMarkdownRemark.html}
                color='blue'
                textAlign={['center', 'right']}
              />
            </Box>
          </Box>
          <Box width={[1, 1 / 2]}>
            <Box ml={[0, 4]}>
              <BodyText html={letterContent.childMarkdownRemark.html} />
              <Box mt={3}>
                <Text fontSize={3} fontWeight='bold' color='green'>
                  Alex Bax,
                </Text>
              </Box>
              <Text fontSize={3}>Chief Executive, Pathway</Text>
            </Box>
          </Box>
        </Flex>
      </Animation>
    </CenterSection>
  )
}
export default Letter
