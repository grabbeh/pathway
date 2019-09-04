import React from 'react'
import Section from '../general/CenterSection'
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
          letterTagline
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
  const { node } = data.allContentfulHomePage.edges[0]
  const { letterIntroTitle, letterTitle, letterTagline, letterContent } = node
  return (
    <Section>
      <Box mb={4}>
        <IntroTitle textAlign='center' color='blue'>
          {letterIntroTitle}
        </IntroTitle>
        <Animation>
          <SectionTitle textAlign='center'>{letterTitle}</SectionTitle>
        </Animation>
      </Box>
      <Flex justifyContent='space-between' flexWrap='wrap'>
        <Box width={[1, 1, 1 / 2]}>
          <Animation>
            <Box mt={-3} mr={[0, 4]}>
              <Tagline color='blue' textAlign={['center', 'center', 'right']}>
                {letterTagline}
              </Tagline>
            </Box>
          </Animation>
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          <Animation>
            <Box ml={[0, 4]}>
              <BodyText html={letterContent.childMarkdownRemark.html} />
              <Box mt={3}>
                <Text fontSize={3} fontWeight='bold' color='green'>
                  Alex Bax,
                </Text>
              </Box>
              <Text fontSize={3}>Chief Executive, Pathway</Text>
            </Box>
          </Animation>
        </Box>
      </Flex>
    </Section>
  )
}
export default Letter
