import React from 'react'
import Box from '../general/Box'
import { graphql, useStaticQuery } from 'gatsby'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'
import BodyText from '../general/BodyText'
import Subtitle from '../general/Subtitle'
import IntroTitle from '../general/IntroTitle'
import SectionTitle from '../general/SectionTitle'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          aboutDescription {
            childMarkdownRemark {
              html
            }
          }
          aboutSubtitle {
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
  let { aboutDescription, aboutSubtitle } = node

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
              html={aboutSubtitle.childMarkdownRemark.html}
            />
          </Animation>
        </Box>
        <Box>
          <Animation>
            <BodyText html={aboutDescription.childMarkdownRemark.html} />
          </Animation>
        </Box>
      </Box>
    </Flex>
  )
}

export default AboutSection
