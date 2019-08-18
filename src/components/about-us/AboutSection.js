import React from 'react'
import Box from '../general/Box'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../general/StandardSection'
import Animation from '../animations/ScrollAnimation'
import BodyText from '../typography/BodyText'
import Subtitle from '../typography/Subtitle'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'

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
    <Section>
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
    </Section>
  )
}

export default AboutSection
