import React from 'react'
import Box from '../standard/Box'
import { graphql, useStaticQuery } from 'gatsby'
import Flex from '../standard/Flex'
import Animation from '../animations/ScrollAnimation'
import BodyText from '../standard/BodyText'
import Subtitle from '../standard/Subtitle'
import IntroTitle from '../standard/IntroTitle'
import SectionTitle from '../standard/SectionTitle'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          childContentfulAboutPageAboutDescriptionTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulAboutPageAboutSubtitleTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const AboutSection = () => {
  const data = useStaticQuery(query)

  let { node } = data.allContentfulAboutPage.edges[0]
  let {
    childContentfulAboutPageAboutDescriptionTextNode,
    childContentfulAboutPageAboutSubtitleTextNode
  } = node

  return (
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        <Animation>
          <Box mb={3}>
            <IntroTitle color='green'>About</IntroTitle>
            <SectionTitle>Who is Pathway?</SectionTitle>
          </Box>
        </Animation>
        <Box>
          <Animation>
            <Subtitle
              color='green'
              html={
                childContentfulAboutPageAboutSubtitleTextNode
                  .childMarkdownRemark.html
              }
            />
          </Animation>
        </Box>
        <Box>
          <Animation>
            <BodyText
              html={
                childContentfulAboutPageAboutDescriptionTextNode
                  .childMarkdownRemark.html
              }
            />
          </Animation>
        </Box>
      </Box>
    </Flex>
  )
}

export default AboutSection
