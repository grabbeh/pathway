import React from 'react'
import { Box, Flex, CenterSection as Section } from '../general/index'
import {
  BodyText,
  IntroTitle,
  SectionTitle,
  Tagline,
  Text
} from '../typography/index'
import { useStaticQuery, graphql } from 'gatsby'
import Animation from '../animations/ScrollAnimation'

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
  const {
    letterIntroTitle,
    letterTitle,
    letterTagline,
    letterContent
  } = data.allContentfulHomePage.edges[0].node
  return (
    <Section>
      <Box>
        <Animation>
          <IntroTitle text={letterIntroTitle} textAlign='center' color='blue' />
        </Animation>
        <Animation>
          <SectionTitle text={letterTitle} textAlign='center' />
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
            <Box ml={[0, 3, 4]}>
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
